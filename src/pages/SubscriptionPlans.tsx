import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import svgPathsSubscription from "@/components/ui/icons/subscription-svg";
import imgWaveCircleWhite from "figma:asset/85ef7a7284b26057657fc5cbaeefab0d1429915e.png";
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import SubscriptionService, { PricingPlan } from '@/services/subscription.service';
import { Spinner } from '@/components/ui/Spinner';
import { toast } from 'sonner';
function PlanCard({ plan }: { plan: PricingPlan }) {
    const { useCreateCheckoutSession } = SubscriptionService();
    const checkoutMutation = useCreateCheckoutSession();

    const handleSelectPlan = async () => {
        try {
            const successUrl = `${window.location.origin}/dashboard?checkout=success`;
            const failureUrl = `${window.location.origin}/subscriptions?checkout=cancel`;

            const response = await checkoutMutation.mutateAsync({
                pricingPlanId: plan.id,
                successUri: successUrl,
                failureUri: failureUrl
            });

            if (response.checkoutLink) {
                window.location.href = response.checkoutLink;
            }
        } catch (error) {
            console.error('Checkout error:', error);
        }
    };

    const isPopular = plan.name.toLowerCase() === 'premium';

    return (
        <div className="relative bg-[rgba(26,26,26,0.7)] rounded-[4px] flex-1 max-w-full lg:max-w-[356px]">
            <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />

            {isPopular && (
                <div className="absolute left-1/2 -translate-x-1/2 top-[-16px] bg-[#611dcd] rounded-[1.667px] px-[12px] py-[6px] flex items-center gap-[8px] z-20">
                    <div aria-hidden="true" className="absolute border-[#611dcd] border-[0.833px] border-solid inset-[-0.833px] pointer-events-none rounded-[2.5px]" />
                    <div className="relative size-[16px]">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWaveCircleWhite} />
                    </div>
                    <p className="font-['Pavanam',sans-serif] leading-[20px] text-[16.667px] text-white">Most Popular</p>
                </div>
            )}

            <div className="p-[40px] flex flex-col gap-[40px] h-full justify-between min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]">
                <div className="flex flex-col gap-[40px]">
                    <div className="flex flex-col gap-[4px]">
                        <p className="font-['Pavanam',sans-serif] leading-[18px] text-[16px] text-[#faf9f6]">{plan.name}</p>
                        <p className="font-['Pavanam',sans-serif] leading-[28px] text-[28px] text-[#faf9f6]">${plan.price} /{plan.interval === 'Monthly' ? 'Month' : plan.interval}</p>
                    </div>
                    <p className="font-['Pavanam',sans-serif] leading-[24px] text-[20px] text-[#faf9f6]">{plan.description}</p>
                    <div className="flex flex-col gap-[8px]">
                        <p className="font-['Pavanam',sans-serif] leading-[18px] text-[16px] text-[#faf9f6]">What's Included?</p>
                        <div className="flex flex-col gap-[8px]">
                            {plan.features.map((feature, idx) => (
                                <div key={idx} className="flex gap-[10px] items-start">
                                    <div className="relative shrink-0 size-[20px] mt-[2px]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                            <path d={svgPathsSubscription.p13eef200} fill="#FAF9F6" />
                                        </svg>
                                    </div>
                                    <p className="font-['Pavanam',sans-serif] leading-[24px] text-[20px] text-[#faf9f6] flex-1">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleSelectPlan}
                    disabled={checkoutMutation.isPending}
                    className="bg-[rgba(250,249,246,0.25)] flex gap-[10px] items-center justify-center px-[12px] py-[8px] rounded-[35px] cursor-pointer hover:bg-[rgba(250,249,246,0.35)] transition-colors w-full border-none disabled:opacity-50"
                >
                    <p className="font-['Pavanam',sans-serif] leading-[28px] text-[28px] text-black">
                        {checkoutMutation.isPending ? 'Processing...' : 'Select Plan'}
                    </p>
                    {!checkoutMutation.isPending && (
                        <div className="relative shrink-0 size-[24px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <path d={svgPathsSubscription.p3991db40} fill="#0F0F0F" />
                            </svg>
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
}

export function SubscriptionPlans({ onNavigate }: { onNavigate?: (page: 'dashboard' | 'queue' | 'applications' | 'profile') => void }) {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { useFetchPricingPlans } = SubscriptionService();
    const { data: plans, isLoading, isError } = useFetchPricingPlans();

    React.useEffect(() => {
        const checkoutStatus = searchParams.get('checkout');
        if (checkoutStatus === 'cancel') {
            toast.error('Payment cancelled. Please try again when you\'re ready.');
            // Clear the param
            navigate('/subscriptions', { replace: true });
        }
    }, [searchParams, navigate]);

    return (
        <DashboardLayout currentTab="profile" onNavigate={onNavigate} showBackground={false} contentScrollable={true}>
            <div className="w-full relative min-h-full bg-[#0f0f0f] py-[50px] lg:py-[80px]">
                <BackgroundDecor />

                <div className="relative z-10 px-[20px] sm:px-[40px] lg:px-[60px]">
                    {/* Title Section */}
                    <div className="flex flex-col gap-[8px] items-center mb-[60px] lg:mb-[80px]">
                        <h1 className="font-['Pavanam',sans-serif] leading-[52px] text-[36px] sm:text-[42px] lg:text-[52px] text-white text-center">WorkApply Subscription Plans</h1>
                        <p className="font-['Pavanam',sans-serif] leading-[28px] text-[20px] sm:text-[24px] lg:text-[28px] text-center text-white">Find the plan that fits your job search.</p>
                    </div>

                    {isLoading ? (
                        <div className="flex justify-center items-center py-20">
                            <Spinner className="size-12 text-white" />
                        </div>
                    ) : isError ? (
                        <div className="text-center text-white py-20">
                            <p className="text-xl">Failed to load subscription plans. Please try again later.</p>
                        </div>
                    ) : (
                        <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[24px] items-stretch justify-center max-w-[1200px] mx-auto mb-[60px]">
                            {plans?.map((plan) => (
                                <PlanCard key={plan.id} plan={plan} />
                            ))}
                        </div>
                    )}

                    {/* Footer Text */}
                    <div className="flex flex-col gap-[8px] items-center mt-12 pb-12">
                        <p className="font-['Pavanam',sans-serif] leading-[28px] text-[20px] sm:text-[24px] lg:text-[28px] text-center text-white">You can cancel your plan at anytime.</p>
                        <p className="font-['Pavanam',sans-serif] leading-[28px] text-[20px] sm:text-[24px] lg:text-[28px] text-center text-white">Need help? <span className="underline cursor-pointer">Ask Us.</span></p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

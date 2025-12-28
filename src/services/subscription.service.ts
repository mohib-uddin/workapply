import { useQuery, useMutation } from '@tanstack/react-query';
import instance from '@/lib/config/axios-instance';

export interface PricingPlan {
    id: number;
    name: string;
    description: string;
    type: string;
    price: number;
    interval: string;
    isActive: boolean;
    features: string[];
    config: {
        jobsToApplyEachDay: number;
    };
    audit: {
        createdAt: string;
        updatedAt: string;
    };
}

export interface CheckoutRequest {
    pricingPlanId: number;
    successUri: string;
    failureUri: string;
}

export interface CheckoutResponse {
    checkoutLink: string;
}

const SubscriptionService = () => {
    const useFetchPricingPlans = (enabled: boolean = true) => {
        const fetchPlans = async (): Promise<PricingPlan[]> => {
            const response = await instance.get('/api/v1/pricing-plans');
            return response.data;
        };

        return useQuery({
            queryFn: fetchPlans,
            queryKey: ['pricing-plans'],
            enabled,
            retry: 1,
        });
    };

    const useCreateCheckoutSession = () => {
        const createCheckout = async (data: CheckoutRequest): Promise<CheckoutResponse> => {
            const { pricingPlanId, successUri, failureUri } = data;
            const response = await instance.post(
                `/api/v1/payments/checkout?successUri=${successUri}&failureUri=${failureUri}`,
                { pricingPlanId }
            );
            return response.data;
        };

        return useMutation({
            mutationFn: createCheckout,
        });
    };

    return {
        useFetchPricingPlans,
        useCreateCheckoutSession,
    };
};

export default SubscriptionService;

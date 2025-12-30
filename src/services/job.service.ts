import { useQuery } from '@tanstack/react-query';
import instance from '@/lib/config/axios-instance';

export interface RecommendedJob {
    id: number;
    userId: number;
    jobId: number;
    score: number;
    semanticSimilarity: number;
    keywordBonus: number;
    autoApply: boolean;
    audit: {
        createdAt: string;
        updatedAt: string;
    };
    job: {
        id: number;
        sourceId: string;
        company: string;
        title: string;
        location: string;
        description: string;
        position: string;
        platform: string;
        sourceUrl: string;
        postedAt: string;
        pay: {
            min: number | null;
            max: number | null;
            currency: string | null;
            per: string | null;
        };
    };
}

export interface RecommendedJobsResponse {
    data: RecommendedJob[];
}

const JobService = () => {
    const useFetchRecommendedJobs = (limit: number = 3) => {
        const fetchRecommendedJobs = async (): Promise<RecommendedJobsResponse> => {
            const response = await instance.get(`/api/v1/recommended-jobs/me?limit=${limit}`);
            return response.data;
        };

        return useQuery({
            queryKey: ['recommendedJobs', limit],
            queryFn: fetchRecommendedJobs,
            retry: 1,
        });
    };

    return {
        useFetchRecommendedJobs,
    };
};

export default JobService;

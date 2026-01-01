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
        payMin: number | null;
        payMax: number | null;
        payCurrency: string | null;
        payPer: string | null;
    };
}

export interface RecommendedJobsResponse {
    data: RecommendedJob[];
}

export interface JobDetail {
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
    payMin: number | null;
    payMax: number | null;
    payCurrency: string | null;
    payPer: string | null;
    locationPreference: string | null;
    employmentType: string | null;
    parsedJobTitle: string;
    parsedRoleOverview: string;
    parsedJobType: string;
    parsedEmploymentType: string;
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

    const useFetchJobById = (jobId: number | null) => {
        const fetchJob = async (): Promise<JobDetail> => {
            if (!jobId) throw new Error("Job ID is required");
            const response = await instance.get(`/api/v1/jobs/${jobId}`);
            return response.data;
        };

        return useQuery({
            queryKey: ['job', jobId],
            queryFn: fetchJob,
            enabled: !!jobId,
            retry: 1,
        });
    };

    return {
        useFetchRecommendedJobs,
        useFetchJobById,
    };
};

export default JobService;

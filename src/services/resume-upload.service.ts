import { useMutation, useQuery } from '@tanstack/react-query';
import instance from '@/lib/config/axios-instance';
import { toast } from 'sonner';

interface ResumeUploadResponse {
  success: boolean;
  message: string;
  data?: any;
}

interface ResumeData {
  id: string;
  fileName: string;
  fileUrl: string;
  uploadedAt: string;
}

interface FetchResumeResponse {
  data: ResumeData[];
  meta?: {
    currentPage: number;
    totalPages: number;
  };
}

export const useUploadResume = () => {
  const uploadResume = async (file: File): Promise<ResumeUploadResponse> => {
    try {
      const formData = new FormData();
      formData.append('resume', file);

      const response = await instance.post('/api/v1/users/resume', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return {
        success: true,
        message: 'Resume uploaded successfully',
        data: response.data,
      };
    } catch (error: any) {
      console.error('Error uploading resume:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to upload resume',
        data: error.response?.data,
      };
    }
  };

  return useMutation({
    mutationFn: uploadResume,
    onSuccess: (data) => {
      if (data.success) {
        toast.success('Resume uploaded successfully');
      } else {
        toast.error(data.message);
      }
    },
    onError: () => {
      toast.error('An error occurred while uploading your resume');
    },
  });
};

export const useFetchResume = (enabled: boolean = true) => {
  const fetchResume = async (): Promise<FetchResumeResponse> => {
    const response = await instance.get('/api/v1/users/me/resume');
    return response.data;
  };

  return useQuery({
    queryFn: fetchResume,
    queryKey: ['resume'],
    enabled,
    retry: 1,
  });
};

export const HandleGetResume = () => {
  return useFetchResume(true);
};


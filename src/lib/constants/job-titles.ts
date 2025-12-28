import jobTitlesData from './job-titles-data.json';

export interface JobTitle {
  job_title: string;
  category: string;
  bachelors_job: boolean;
}

export function processJobTitles(): string[] {
  return jobTitlesData.map((job: JobTitle) => job.job_title);
}

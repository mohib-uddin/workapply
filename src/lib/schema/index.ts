import {z} from "zod";


export const auditSchema=z.object({
    createdAt:z.string(),
    updatedAt:z.string(),
    deletedAt:z.string()
});
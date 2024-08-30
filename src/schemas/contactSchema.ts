import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(2, { message: "Name too small" }),
    email: z.string().email({message: "Invalid email"}),
    message: z.string().min(10, "Message too small")
});
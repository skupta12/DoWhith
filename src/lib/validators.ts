import { z } from "zod";
  
export const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  export const errorMessages = {
    email: "Please enter a valid email address.",
    name: "Please enter a name with at least 8 characters.",
  };
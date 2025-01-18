import { z } from 'zod';

export const formSchema = z.object({
  shop_name: z.string().min(3, { message: "Shop name must be at least 3 characters long." }).max(100, { message: "Shop name must not exceed 100 characters." }),
//   description: z.string().min(4, { message: "Description must be at least 4 characters long." }).max(500, { message: "Description must not exceed 500 characters." }),
//   category: z.string().min(3, { message: "Category must be at least 3 characters long." }).max(100, { message: "Category must not exceed 100 characters." }),
//   address: z.string().min(4, { message: "Address must be at least 4 characters long." }).max(300, { message: "Address must not exceed 300 characters." }),
//   link: z.string().url({ message: "Please provide a valid URL." }).refine(
//     async (url) => {
//       try {
//         const res = await fetch(url, { method: "HEAD" });
//         const contentType = res.headers.get("content-type");
//         if (contentType?.startsWith("image/")) {
//           return true;
//         }
//         return false;
//       } catch {
//         return false;
//       }
//     },
//     {
//       message: "The URL must link to a valid image.",
//     }
//   ),
});

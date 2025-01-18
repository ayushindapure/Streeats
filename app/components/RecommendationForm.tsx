"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formSchema } from "@/lib/validation";
import { Send } from "lucide-react";
// import { z } from "zod";
import React, { useActionState, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { createPitch } from "@/lib/actions";

const RecommendationForm = () => {
//   const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const router = useRouter();
  

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        shop_name: formData.get("shop_name") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch: formData.get("pitch") as string,
      };

      // Validate form values.
      await formSchema.parseAsync(formValues);

    //   console.log("Form Values:", formValues);
      const result = await createPitch(prevState, formData, pitch);

      if (result.status == "SUCCESS") {
        toast({
          title: "Success",
          description: "Your startup pitch has been created successfully",
        });

        router.push(`/recommendations/${result._id}`);
      }

      return result;

      // Show a success toast.
      toast({
        title: "Success",
        description: "Your recommendation has been submitted!",
      });

      // Redirect or perform other actions.
      router.push("/recommendations/success");
    } catch (error) {
    //   if (error instanceof z.ZodError) {
    //     const fieldErrors = error.flatten().fieldErrors;
    //     setErrors(fieldErrors as unknown as Record<string, string>);
    //     toast({
    //       title: "Validation Error",
    //       description: "Please check your inputs and try again.",
    //       variant: "destructive",
    //     });
    //   } else {
    //     toast({
    //       title: "Unexpected Error",
    //       description: "An unexpected error occurred. Please try again.",
    //       variant: "destructive",
    //     });
    //   }
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit,{
    error: "",
    status: "INITIAL",
  });

  return (
    <>
      <div>
        <div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-xl mx-auto">
            <div className="mt-1">
              <form action={formAction} className="recommendation-form">
                <div className="grid gap-4 lg:gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label
                        htmlFor="shop_name"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Spot Name
                      </label>
                      <Input
                        id="shop_name"
                        name="shop_name"
                        className="py-3 px-4 border-2 border-neutral-400 block w-full rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none"
                        required
                      />
                      {/* {errors.shop_name && (
                        <p className="text-red-700">Shop Name entered wrongly</p>
                      )} */}
                    </div>

                    <div>
                      <label
                        htmlFor="address"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Address
                      </label>
                      <Input
                        id="address"
                        type="text"
                        name="address"
                        className="py-3 px-4 border-2 border-neutral-400 block w-full rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm text-gray-700 font-medium"
                    >
                      Must Try's (separate it with ',')
                    </label>
                    <Textarea
                      id="description"
                      name="description"
                      className="py-3 px-4 border-2 border-neutral-400 block w-full rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Mysore Masala Dosa, Cheese Onion Utthapa, Wada Sambar"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label
                        htmlFor="category"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Category
                      </label>
                      <Input
                        id="category"
                        type="text"
                        name="category"
                        className="py-3 px-4 border-2 border-neutral-400 block w-full rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="link"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Image URL (image upload soon)
                      </label>
                      <Input
                        id="link"
                        name="link"
                        type="url"
                        className="py-3 px-4 border-2 border-neutral-400 block w-full rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="pitch"
                      className="block mb-2 text-sm text-gray-700 font-medium"
                    >
                      Details
                    </label>
                    <Textarea
                      id="pitch"
                      typeof="text"
                      name="pitch"
                      rows={4}
                      className="py-3 px-4 border-2 border-neutral-400 block w-full rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Briefly describe why you like the food at above stall and whats so special in it"
                    />
                  </div>
                </div>

                <div className="mt-6 grid">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-3 px-4 border-neutral-400 inline-flex justify-center items-center gap-x-2 text-sm font-sm rounded-lg border border-transparent bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {isPending ? "Submitting..." : "Submit"}
                  </button>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500">
                    Your recommendations will be on the public page in less than
                    60 seconds
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendationForm;

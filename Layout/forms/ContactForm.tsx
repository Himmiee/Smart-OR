"use client";

import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/inputs/CustomInput";
import { FormTextArea } from "@/inputs/TextAreaContainer";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactUsSchema } from "@/schema/validation.schema";
import { ContactFormData, useSubmitContactForm } from "@/helpers/queries";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

export const ContactFormComponent = () => {
  const methods = useForm<ContactFormData>({
    resolver: yupResolver(ContactUsSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      subject: "Contact Message",
    },
  });
  const { mutate, isError, isSuccess, error, isPending, data } =
    useSubmitContactForm();
  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }

    if (isSuccess) {
      toast.success(data.message);
      window.scrollTo(0, 0);
      methods.reset();
    }
  }, [isError, isSuccess, error, methods]);

  const { handleSubmit } = methods;

  const onSubmit = (data: ContactFormData) => {
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-xl border shadow-sm h-fit w-full  p-4 py-6  lg:p-8 space-y-6"
      >
        <div className="text-center max-w-lg space-y-2 mx-auto"></div>
        <div className="grid grid-cols-1 gap-y-6 lg:gap-y-0 lg:grid-cols-2 gap-x-6 ">
          <CustomInput
            isFormInput={true}
            name="firstName"
            label="First name"
            required={true}
            type="Firstname"
            placeholder="First name"
          />
          <CustomInput
            isFormInput={true}
            name="lastName"
            label="Last name"
            required={true}
            type="Lastname"
            placeholder="Last name"
          />
        </div>
        <div className="space-y-6">
          <CustomInput
            isFormInput={true}
            name="email"
            label="Email"
            required={true}
            type="Email"
            placeholder="i.e youremail@gmail.com"
          />
          <FormTextArea
            name="message"
            label="Message"
            placeholder="Message"
            required={true}
          />
        </div>
        <Button
          type="submit"
          variant="secondary"
          size="lg"
          className="w-full h-11 text-base"
        >
          {isPending ? (
            <Loader2 className="animate-spin w-full text-lg" />
          ) : (
            "Send"
          )}
        </Button>
      </form>
    </FormProvider>
  );
};

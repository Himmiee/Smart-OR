"use client";

import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/inputs/CustomInput";
import { FormTextArea } from "@/inputs/TextAreaContainer";

type ContactForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export const ContactFormComponent = () => {
  const methods = useForm<ContactForm>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: ContactForm) => {
    console.log(data);
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
        <Button type="submit" variant="secondary" size="lg" className="w-full h-11 text-base">
          Send
        </Button>
      </form>
    </FormProvider>
  );
};

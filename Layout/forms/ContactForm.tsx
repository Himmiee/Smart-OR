"use client";

import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/inputs/CustomInput";
import { FormTextArea } from "@/inputs/TextAreaContainer";
import { Checkbox } from "@/components/ui/checkbox";

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
        className="rounded-xl border shadow-sm h-fit w-full  p-4 py-6  lg:p-12 space-y-6"
      >
        <div className="text-center max-w-lg space-y-2 mx-auto">
          <p className="text-[#101828] text-2xl font-medium">Online Form</p>
          <p className="text-[#667085] text-sm">
            If you prefer, fill out our online form below with your message and
            contact details, and we’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-6 lg:gap-y-0 lg:grid-cols-2 gap-x-6 ">
          <CustomInput
            isFormInput={true}
            name="firstName"
            label="First name"
            required={false}
            type="Firstname"
            placeholder="First name"
          />
          <CustomInput
            isFormInput={true}
            name="lastName"
            label="Last name"
            required={false}
            type="Lastname"
            placeholder="Last name"
          />
        </div>
        <div className="space-y-6">
          <CustomInput
            isFormInput={true}
            name="email"
            label="Email"
            required={false}
            type="Email"
            placeholder="i.e youremail@gmail.com"
          />
          <CustomInput
            isFormInput={true}
            name="phone"
            label="Phone"
            required={false}
            type="Email"
            placeholder="i.e +123"
          />
          <FormTextArea
            name="message"
            label="Message"
            placeholder="Message"
            required={false}
          />
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Checkbox /> You agree to our friendly privacy policy.
        </div>
        <Button type="submit" variant="secondary" size="lg" className="w-full">
          Send
        </Button>
      </form>
    </FormProvider>
  );
};

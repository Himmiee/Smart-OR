import React from "react";
import { useFormContext } from "react-hook-form";
import { InputContainer } from "./InputContainer";
import classnames from "classnames";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const FormTextArea: React.FC<{
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  maxWords?: number;
}> = ({
  name,
  label,
  required = false,
  placeholder = "Type your message here.",
}) => {
  const {
    register,
    // watch,
    formState: { errors },
  } = useFormContext();

  const textareaError = errors[name]?.message;

  return (
    <InputContainer label={""} required={false} error={textareaError}>
      <Label htmlFor={name} className="">
        {label}{" "}
        {required && (
          <span className=" text-base relative -left-1.5 -top-[0px]">*</span>
        )}
      </Label>
      <Textarea
        id={name}
        placeholder={placeholder}
        className={classnames("mt-3", {
          // "border-red-500": isError,
        })}
        {...register(name)}
      />
    </InputContainer>
  );
};

import { Label } from "@/components/ui/label";
import { InputContainerProps } from "@/structure/types/types";


export const InputContainer = ({
  label,
  info,
  required,
  children,
  error,
}: InputContainerProps) => {
  return (
    <div className="">
      <Label className="">
        {label}
        {required && (
          <sup className="text-red-500 text-base relative -top-[2px]  left-1">
            *
          </sup>
        )}
      </Label>
      {info && <p className="infoText">{info}</p>}
      <div className="mt-2">{children}</div>
      {error && <p className="text-[12px] mt-[2px] !text-red-500">{`${error}`}</p>}
    </div>
  );
};

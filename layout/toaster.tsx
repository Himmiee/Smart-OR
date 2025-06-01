import { Toast, toast } from "react-hot-toast";
import { X } from "lucide-react";
import clsx from "clsx";

export const CustomToast = ({
  t,
  message,
  type = "success",
}: {
  t: Toast;
  message: string;
  type?: "success" | "error";
}) => {
  const bg =
    type === "success"
      ? "bg-black/90 border-blue-500"
      : "bg-black/90 border-red-500";
  const textColor = "text-white";

  return (
    <div
      className={clsx(
        "w-[320px] rounded-xl p-4 shadow-lg flex items-start gap-3 transition-all duration-300",
        bg,
        textColor,
        t.visible ? "animate-enter" : "animate-leave"
      )}
    >
      <div className="flex-1 font-medium text-sm leading-tight">{message}</div>
      <button
        onClick={() => toast.dismiss(t.id)}
        className="text-blue-400 hover:text-white transition"
      >
        <X size={18} />
      </button>
    </div>
  );
};

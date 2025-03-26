import { TextareaHTMLAttributes, useState } from "react";
import { cn } from "@/utils/variants";
import { useFormikContext } from "formik";
import { FormValues } from "@/types/general.types";

interface tagProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  emoji?: string;
  content: string;
  name: string;
}

//Logic: TextArea basically fully "shadowed / immitated" by a <p> sitting right behind it dictating its width and height to the textarea since it cannot do that itself. It allows the impression that the textarea is adjusting its size based on userinput. This workaround was necessary, since there is no major (and accessible) approach to auto-growing inputs/textareas.
function Tag({ emoji, content, ...props }: tagProps) {
  const [value, setValue] = useState(content);
  const { setFieldValue } = useFormikContext<FormValues>();

  const handleBlur = () => {
    setFieldValue(props.name, value.trim());
    if (!value.trim()) setValue(content);
  };

  return (
    <div className="relative w-auto text-[13.5px]">
      <p className="pointer-events-none absolute left-[14px] top-1/2 z-[1] -translate-y-1/2 scale-125">
        {emoji}
      </p>
      <p
        className={cn(
          "pointer-events-none invisible whitespace-pre-wrap break-all border px-4 py-[7px] text-left hover:cursor-pointer",
          emoji && "pl-9",
        )}
      >
        {value ? value : props.placeholder}{" "}
      </p>
      <textarea
        className={cn(
          "x absolute inset-0 resize-none overflow-hidden break-all rounded-xl border-1 border-[#5e6081] bg-[#434565] px-4 py-[7px] outline-none transition-all hover:cursor-pointer focus:cursor-auto focus:border-[#797A9C] focus:shadow-[0px_0px_0px_2px_#797A9C50]",
          emoji && "pl-9",
        )}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => (value == content ? setValue("") : null)}
        onBlur={handleBlur}
        value={value}
        {...props}
        onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
          if (e.key === "Enter") e.preventDefault();
        }}
      />
    </div>
  );
}

export default Tag;

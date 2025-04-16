"use client";

import { cn } from "@/utils/variants";
import { useField, useFormikContext } from "formik";
import { InputHTMLAttributes } from "react";

function Toggle({ ...props }: {} & InputHTMLAttributes<HTMLInputElement>) {
  const [field] = useField(props);
  const { submitForm, setFieldValue } = useFormikContext();

  const handleClick = () => {
    setFieldValue(field.name, !field.value);
  };

  return (
    <label className="relative inline-block h-7 min-w-[45px]">
      <input
        type="checkbox"
        checked={field.value ?? false}
        onClick={handleClick}
        readOnly
        className="peer sr-only"
        {...field}
        onChange={submitForm}
      />
      <span className="absolute inset-0 cursor-pointer rounded-full bg-[#6C6C81] transition-colors duration-200 peer-checked:bg-[#D900FF]">
        <span
          className={cn(
            "absolute left-[3px] top-1/2 aspect-square h-[calc(100%-6px)] -translate-y-1/2 rounded-full bg-white transition-transform duration-200",
            field.value && "translate-x-[17px]",
          )}
        ></span>
      </span>
    </label>
  );
}

export default Toggle;

import clsx from "clsx";
import { useState } from "react";

function Checkbox({ label }: { label: string }) {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <label className="relative flex cursor-pointer select-none items-center gap-2">
      <input
        className="checkbox peer size-6 cursor-pointer opacity-0"
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />

      <span className="absolute left-0 top-0 flex size-[20px] items-center justify-center rounded-[6px] border-2 border-[#262537] transition-all peer-checked:border-transparent peer-checked:bg-[#dd00ff]">
        <svg
          className={clsx("opacity-0 transition-opacity", {
            "opacity-100": isChecked,
          })}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path
            d="M9.97956 14.9968L10.3331 15.3504L10.6867 14.9968L17.9933 7.68942L18.4651 8.16088L10.3331 16.2928L5.73689 11.6966L6.20812 11.2254L9.97956 14.9968Z"
            strokeWidth="2"
            stroke="white"
          />
        </svg>
      </span>
      <span className="font-inter text-[14px]">{label}</span>
    </label>
  );
}

export default Checkbox;

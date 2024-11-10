import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ className, type, variant, value, onChange, ...props }, ref) => {
    const renderNumberInput = () => (
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => {
            const newValue = Math.max(value - 1, props.min || 0);
            onChange(newValue); // Ensure we call onChange with the new value
          }}
          className="flex items-center justify-center h-10 w-10 border border-slate-200 rounded-l-md bg-white hover:bg-black hover:text-white transition-colors duration-300"
        >
          -
        </button>
        <input
          type="number"
          className={cn(
            "flex h-10 w-full min-w-12 text-center rounded-none border-t border-b border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          value={value}
          onChange={(e) => {
            const newValue = Math.round(Number(e.target.value));
            // Ensure we handle invalid inputs gracefully
            if (!isNaN(newValue)) {
              onChange(
                Math.min(Math.max(newValue, props.min || 0), props.max || 30)
              ); // Clamp the value between min and max
            }
          }}
          ref={ref}
          {...props}
        />
        <button
          type="button"
          onClick={() => {
            const newValue = Math.min(value + 1, props.max || 30);
            onChange(newValue); // Ensure we call onChange with the new value
          }}
          className="flex items-center justify-center h-10 w-10 border border-slate-200 rounded-r-md bg-white hover:bg-black hover:text-white transition-colors duration-300"
        >
          +
        </button>
      </div>
    );

    return type === "number" ? (
      renderNumberInput()
    ) : (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full border-b border-slate-200 focus-visible:border-black/40 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

import React, { ComponentProps } from "react";

type TrailActionProps = {
  children: React.ReactNode;
} & ComponentProps<"button">;

export const TrailAction = ({ children, ...props }: TrailActionProps) => {
  return (
    <button {...props} className="text-slate-500 rounded-full">
      {children}
    </button>
  );
};

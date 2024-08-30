import React from "react";

type TrailTitleProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

export const TrailTitle = ({ isOpen, children }: TrailTitleProps) => {
  return (
    <>
      <h2
        data-isopen={isOpen}
        className="text-slate-400 text-[32px] font-medium leading-[100%] data-[isopen=true]:text-amber-600 "
      >
        {children}
      </h2>
    </>
  );
};

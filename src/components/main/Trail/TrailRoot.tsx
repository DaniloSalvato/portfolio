import React from "react";

type TrailRootProps = {
  isOpen: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

export const TrailRoot = ({ isOpen, children, onClick }: TrailRootProps) => {
  return (
    <>
      <div
        data-isopen={isOpen}
        onClick={onClick}
        className="flex flex-col w-full h-20 py-6 px-6 border border-slate-200 justify-center items-center rounded-md transition-all duration-1000 data-[isopen=true]:h-fit cursor-pointer"
      >
        {children}
      </div>
    </>
  );
};

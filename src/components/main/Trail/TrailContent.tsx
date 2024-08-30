import React from "react";

type TrailContentProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

export const TrailContent = ({ isOpen, children }: TrailContentProps) => {
  return <>{isOpen && children}</>;
};

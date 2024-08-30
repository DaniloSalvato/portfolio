type TrailHeaderProps = {
  children: React.ReactNode;
};

export const TrailHeader = ({ children }: TrailHeaderProps) => {
  return (
    <>
      <div className="flex w-full justify-between items-center">{children}</div>
    </>
  );
};

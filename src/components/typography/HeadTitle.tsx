type HeadTitleProps = {
  children: React.ReactNode;
  className?: string
}

export const HeadTitle = ({children,className}:HeadTitleProps) => {
  return (
    <span className={`text-amber-600 text-base md:text-2xl font-medium ${className}`}>
      {children}
    </span>
  );
};

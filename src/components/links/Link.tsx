import { tv, VariantProps } from "tailwind-variants";

import { ComponentProps, ReactNode } from "react";

const link = tv({
  base: "flex bg-slate-800 text-white rounded font-medium text-base justify-center items-center text-nowrap w-full",
  variants: {
    color: {
      primary:
        "bg-amber-100 text-amber-600 hover:bg-amber-600 hover:text-amber-100",
      secondary:
        "bg-amber-600 text-slate-50 hover:bg-amber-100 hover:text-amber-600",
    },
    size: {
      sm: "px-4 py-2 font-medium text-base",
      md: "px-32 py-2 font-medium text-base",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type LinkVariants = VariantProps<typeof link>;

type LinkProps = {
  children: ReactNode;
} & ComponentProps<"a"> &
LinkVariants;

export const Link = ({
  children,
  color,
  size,
  className,
  ...props
}: LinkProps) => {
  return (
    <a
      {...props}
      className={link({
        color,
        size,
        className,
      })}
    >
      {children}
    </a>
  );
};

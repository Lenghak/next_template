"use client";

import { type AnchorHTMLAttributes } from "react";

import Link, { type LinkProps } from "next/link";

import { cn } from "@/lib/utils";

import { buttonVariants } from "./button";
import { H3 } from "./h3";

type LogoProps = Omit<LinkProps, "href"> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <Link
      href={"/"}
      className={cn(
        buttonVariants({ variant: "link" }),
        "p-0 font-bold text-secondary hover:no-underline",
        className,
      )}
      {...props}
    >
      <H3 className="font-bold">
        Lenghak<span className="text-primary">.</span>
      </H3>
    </Link>
  );
};

"use client";

import { type AnchorHTMLAttributes, forwardRef } from "react";

import Link from "next/link";
import type { LinkProps } from "next/link";
import { useRouter } from "next/router";

import { cn } from "@/lib/utils";

import { buttonVariants } from "./button";

type NavLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    exact?: boolean;
  };

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ children, href, className, exact = false, ...props }, ref) => {
    const { pathname } = useRouter();

    return (
      <Link
        data-active={exact ? pathname === href : pathname.startsWith(href)}
        href={href}
        ref={ref}
        className={cn(
          buttonVariants({
            variant: "link",
            className: "relative text-sm font-bold text-foreground",
          }),
          "after:absolute after:bottom-0 after:left-1/2 after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all",
          "hover:no-underline hover:after:left-0 hover:after:w-full",
          className,
        )}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";

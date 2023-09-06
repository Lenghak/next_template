import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type BlockquoteProps = HTMLAttributes<HTMLQuoteElement>;

export const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <blockquote
        className={cn("mt-6 border-l-2 pl-6 italic", className)}
        ref={ref}
        {...props}
      >
        {children}
      </blockquote>
    );
  },
);

Blockquote.displayName = "Blockquote";

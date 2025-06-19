"use client";
import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";

interface Props {
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null;
  size?: "default" | "sm" | "lg" | "icon" | null;
  isScrolled: boolean;
  link: string;
  label: string;
  index: number;
}

const AccountBtn: React.FC<Props> = ({ variant, size, isScrolled, link, label, index }) => {
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn(
        index === 0 && isScrolled && "lg:hidden",
        index === 1 && isScrolled && "lg:hidden",
        index === 2 && (isScrolled ? "lg:inline-flex" : "hidden"),
      )}
    >
      <Link href={link}>
        <span>{label}</span>
        {index === 2 && <ArrowUpRightIcon />}
      </Link>
    </Button>
  );
};

export default AccountBtn;
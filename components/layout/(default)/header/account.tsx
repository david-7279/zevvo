"use client";
import React, { useEffect, useState } from "react";
import { Path } from "@/lib/paths";

import AccountBtn from "@/components/layout/(default)/header/account-btn";
import { cn } from "@/lib/utils";

const accountBtn: {
  variant: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null;
  size: "default" | "sm" | "lg" | "icon" | null;
  link: string;
  label: string;
}[] = [
  {
    variant: "outline",
    size: "sm",
    link: Path.login,
    label: "Iniciar",
  },
  {
    variant: "default",
    size: "sm",
    link: Path.register,
    label: "Registar",
  },
  {
    variant: "default",
    size: "sm",
    link: Path.root,
    label: "Começar",
  },
];

const Account = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
      )}
    >
      <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
        {accountBtn.map((btn, index) => (
          <AccountBtn
            key={index}
            variant={btn.variant}
            size={btn.size}
            isScrolled={isScrolled}
            link={btn.link}
            label={btn.label}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Account;
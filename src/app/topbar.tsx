"use client";

import { SetStateAction } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import Logo from "../components/logo";
import DesktopNav from "@/components/desktopnav";
import MobileNav from "@/components/mobilenav";
import { useState } from "react";

export default function Topbar({
  isSideBarOpen,
  setIsSideBarOpen,
  isAuthenticated,
  setIsAuthenticated,
}: {
  isSideBarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<SetStateAction<boolean>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<SetStateAction<boolean>>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex justify-between bg-[#FFF] p-5 md:py-5 lg:px-14 md:px-5 gap-12">
      <Logo />

      {/* Desktop nav menu */}
      <DesktopNav />

      {/* Mobile menu */}
      {/* <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#0E0E10] md:hidden"
      >
        <Menu size={24} />
      </button> */}
      <MobileNav
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
    </header>
  );
}

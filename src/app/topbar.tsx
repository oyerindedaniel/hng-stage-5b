"use client";

import { SetStateAction } from "react";
import { cn } from "@/lib/utils";

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
  return (
    <header className="flex h-14 px-5">
      <div
        className="font-mono cursor-pointer ml-auto mr-5"
        onClick={() => setIsAuthenticated((prev) => !prev)}
      >
        <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-3 pt-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Switch to authenticated:
          <code className="font-mono font-bold">
            {isAuthenticated.toString()}
          </code>
        </p>
      </div>
      <div
        className="relative ml-auto flex items-center cursor-pointer group"
        onClick={() => setIsSideBarOpen((prev) => !prev)}
      >
        <span
          className={cn(
            "transition-all duration-500 group-hover:before:w-[141.42%] group-hover:after:w-[141.42%] [transition-timing-function:cubic-bezier(0.19, 1, 0.22, 1)] relative w-[28px] h-[28px] m-0 p-0 before:content-[''] before:w-full before:h-[12%] before:bg-black before:block before:top-0 before:rounded-lg after:rounded-lg before:left-0 before:origin-top-left group-hover:before:rotate-45 group-hover:before:-translate-y-2/4 after:absolute after:w-full after:h-[12%] after:content-[''] after:bottom-0 after:left-0  after:bg-black after:origin-bottom-left group-hover:after:-rotate-45 group-hover:after:translate-y-1/2 before:transition-all before:duration-500 before:[transition-timing-function:cubic-bezier(0.19, 1, 0.22, 1)] after:transition-all after:duration-500 after:[transition-timing-function:cubic-bezier(0.19, 1, 0.22, 1)]",
            isSideBarOpen
              ? "before:rotate-45 after:-rotate-45 before:w-[141.42%] after:w-[141.42%] before:-translate-y-2/4 after:translate-y-2/4"
              : "before:rotate-0 after:-rotate-0 before:w-full after:w-full"
          )}
        >
          <span
            className={cn(
              "block absolute left-0 top-[44%] rounded-lg w-full h-[12%] bg-black group-hover:scale-[0.1]",
              isSideBarOpen ? "scale-[0.1]" : "scale-100"
            )}
          >
            <span className="sr-only">Menu</span>
          </span>
        </span>
      </div>
    </header>
  );
}

"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { SetStateAction } from "react";
import { NAV_ITEMS, SIDEBAR_LINKS } from "./constants";
import { Button } from "@/components/ui/button";

export default function Sidebar({
  isSideBarOpen,
  setIsSideBarOpen,
  isAuthenticated,
}: {
  isSideBarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<SetStateAction<boolean>>;
  isAuthenticated: boolean;
}) {
  return (
    <aside
      className={cn(
        "w-[300px] bg-white text-[#99999B] z-50 top-0 py-[40px] px-[22px] fixed left-0 h-full transition-transform duration-500",
        isSideBarOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <nav>
        {isAuthenticated ? (
          <div className="flex flex-col gap-3">
            {Object.entries(SIDEBAR_LINKS).map(
              ([section, links], sectionIndex) => (
                <div key={section}>
                  {sectionIndex > 0 && (
                    <div className="mb-3 border-t border-[#99999B]"></div>
                  )}
                  <div className="flex flex-col gap-3">
                    {links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.url}
                        className="flex gap-3 text-sm items-center text-[#99999B] hover:bg-[#B15210] p-[10px] hover:text-white hover:rounded-md"
                      >
                        <link.icon className="w-[20px] h-[20px]" />
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-7">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-[#99999B] hover:bg-[#B15210] p-[10px] hover:text-white hover:rounded-md text-sm"
              >
                {item.name}
                {item.hasSubmenu && <span></span>}
              </Link>
            ))}
            <div className="flex flex-col gap-5">
              {" "}
              <Button variant="outline" size="lg">
                Log in
              </Button>
              <Button variant="default" size="lg">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </aside>
  );
}

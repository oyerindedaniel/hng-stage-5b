import Link from "next/link";
import { X } from "lucide-react";
import { SetStateAction } from "react";
import { cn } from "@/lib/utils";

type ModalProps = {
  isSideBarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<SetStateAction<boolean>>;
};

export default function MobileNav({
  isSideBarOpen,
  setIsSideBarOpen,
}: ModalProps) {
  return (
    <div
      className="relative ml-auto flex items-center cursor-pointer group md:hidden"
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
            "block absolute left-0 top-[44%] rounded-lg w-full h-[12%] bg-black group-hover:scale-[0.1] transition-all duration-500 [transition-timing-function:cubic-bezier(0.19, 1, 0.22, 1)]",
            isSideBarOpen ? "scale-[0.1]" : "scale-100"
          )}
        >
          <span className="sr-only">Menu</span>
        </span>
      </span>
    </div>
  );
}

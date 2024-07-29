"use client";

import { SetStateAction } from "react";
import { motion } from "framer-motion";

export default function Overlay({
  isSideBarOpen,
  setIsSideBarOpen,
}: {
  isSideBarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 z-40 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: isSideBarOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => setIsSideBarOpen(false)}
      style={{ pointerEvents: isSideBarOpen ? "auto" : "none" }}
    />
  );
}

"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <div className="font-mono">
        <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
      </div>

      <div className="flex gap-5">
        <Button size="lg" asChild>
          <Link href={"/contact-us"}>Go to Contact us Page</Link>
        </Button>
        <Button size="lg" asChild>
          <Link href={"/feedback"}>Go to Feedback Page</Link>
        </Button>
      </div>
    </main>
  );
}

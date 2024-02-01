import StampClock from "@/components/StampClock";
import React from "react";

export default function Home() {
  return (
      <main>
          <div className="flex flex-col items-center justify-between p-10">
      </div>
    <div className="flex min-h-screen flex-col items-center justify-between md:p-12">
      <div className="z-5 items-center justify-between font-mono text-sm flex">
          <StampClock progress={24} progressText={"sooon"} />
      </div>
    </div>
    </main>
  )
}

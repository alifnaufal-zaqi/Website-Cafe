"use client";

import { ThemeToggle } from "@/components/commons/dark-mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  const handleClick = () => {
    const timeNow = Date.now();
    console.log(`Click at ${timeNow}`);
  };

  return (
    <div>
      <Button onClick={handleClick}>Hello</Button>
      <ThemeToggle />
    </div>
  );
}

'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// redirect to /home/page.tsx on website load
export default function Open() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return null;
}
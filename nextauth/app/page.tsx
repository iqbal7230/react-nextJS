"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (status === "authenticated") {
      if (countdown > 0) {
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        router.push("/dashboard");
      }
    }
  }, [status, countdown, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome</h1>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : session ? (
        <div className="text-center">
          <p className="mb-2">Hello, {session.user?.name}</p>
          <p>Already logged in, Redirecting you in {countdown}</p>
        </div>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="border px-4 py-2 bg-blue-500 text-white rounded"
        >
          Continue with Google
        </button>
      )}
    </div>
  );
}

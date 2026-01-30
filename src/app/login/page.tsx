"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: replace with real auth call
    // Example: await fetch("/api/auth/login", { method: "POST", body: JSON.stringify({ email }) })
    router.push("/dashboard");
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </main>
  );
}
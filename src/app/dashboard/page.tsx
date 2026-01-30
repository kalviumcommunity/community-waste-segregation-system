import Link from "next/link";

export default function DashboardPage() {
  // TODO: add auth guard / server session check
  return (
    <main style={{ padding: 24 }}>
      <h1>Dashboard</h1>
      <p>Protected area — implement authentication checks here.</p>
      <p><Link href="/login">Go to Login</Link></p>
    </main>
  );
}
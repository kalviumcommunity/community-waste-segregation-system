import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Community Waste Segregation System</h1>
      <p>Welcome — choose an action:</p>
      <ul>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
      </ul>
    </main>
  );
}

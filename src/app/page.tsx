import EmailForm from "../component/EmailForm";

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Community-Driven Waste Segregation Reporting System
      </h1>

      {/* Email testing form */}
      <EmailForm />
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

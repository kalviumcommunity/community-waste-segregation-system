export default function LoginPage() {

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
      <h1>Login</h1>
      <p>Please sign in to continue.</p>

      <form>
        <div style={{ marginBottom: 12 }}>
          <label>Email</label><br />
          <input type="email" placeholder="Enter email" />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Password</label><br />
          <input type="password" placeholder="Enter password" />
        </div>

        <button type="submit">Login</button>
      </form>
    </main>
  );
}

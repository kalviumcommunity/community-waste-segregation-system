import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: 220,
          padding: 16,
          borderRight: "1px solid #eee",
          background: "#fafafa",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Dashboard</h3>
        <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Link href="/dashboard">Overview</Link>
          <Link href="/dashboard/reports">Reports</Link>
          <Link href="/dashboard/settings">Settings</Link>
        </nav>
      </aside>

      <section style={{ flex: 1, padding: 24 }}>{children}</section>
    </div>
  );
}
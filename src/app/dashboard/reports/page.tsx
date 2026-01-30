import Link from "next/link";

type Report = {
  id: string;
  title: string;
  createdAt: string;
  status: "ready" | "processing" | "failed";
};

const mockReports: Report[] = [
  { id: "r1", title: "Weekly Collection", createdAt: "2026-01-25", status: "ready" },
  { id: "r2", title: "Monthly Summary", createdAt: "2026-01-01", status: "processing" },
];

export default function ReportsPage() {
  return (
    <main style={{ padding: 24 }}>
      <nav style={{ marginBottom: 12 }}>
        <Link href="/dashboard">Go to Dashboard</Link>
      </nav>
      <h1>Reports</h1>
      <p>Generate and view system reports related to waste segregation.</p>

      <div style={{ margin: "16px 0" }}>
        <Link href="/dashboard/reports/generate">
          <button type="button">Generate Report</button>
        </Link>
        <span style={{ marginLeft: 12 }} />
        <Link href="/dashboard">Back to dashboard</Link>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: 8 }}>Title</th>
            <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: 8 }}>Created</th>
            <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: 8 }}>Status</th>
            <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: 8 }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockReports.map((r) => (
            <tr key={r.id}>
              <td style={{ padding: 8 }}>{r.title}</td>
              <td style={{ padding: 8 }}>{r.createdAt}</td>
              <td style={{ padding: 8 }}>{r.status}</td>
              <td style={{ padding: 8 }}>
                <Link href={`/dashboard/reports/${r.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
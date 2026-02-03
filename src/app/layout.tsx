import "./globals.css";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Community Waste Segregation System",
  description: "Manage and view reports for waste segregation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: 16, borderBottom: "1px solid #eee", display: "flex", gap: 12 }}>
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard/reports">Reports</Link>
          <Link href="/login" style={{ marginLeft: "auto" }}>Login</Link>
        </header>

        <main style={{ padding: 24 }}>{children}</main>
      </body>
    </html>
  );
}
import { AuthProvider } from "@/context/AuthContext";


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>
<AuthProvider>{children}</AuthProvider>
</body>
</html>
);
}
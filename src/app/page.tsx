import EmailForm from "../component/EmailForm";

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Community-Driven Waste Segregation Reporting System
      </h1>

      {/* Email testing form */}
      <EmailForm />
    </main>
  );
}

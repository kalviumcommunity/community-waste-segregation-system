"use client";

import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, message }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Email sent successfully ✅");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (err: any) {
      setStatus(`Error: ${err.message || "Something went wrong"}`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow mt-10">
      <h2 className="text-xl font-bold mb-4">Send Test Email</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Recipient email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="border p-2 rounded"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send Email
        </button>
      </form>
      {status && <p className="mt-2">{status}</p>}
    </div>
  );
}

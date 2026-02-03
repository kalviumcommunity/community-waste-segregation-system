export default function LoginPage() {
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

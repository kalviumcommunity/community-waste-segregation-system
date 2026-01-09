export type UserRole = "CITIZEN" | "COLLECTOR" | "ADMIN";

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
}

export function isAdmin(user: AuthUser | null) {
  return user?.role === "ADMIN";
}

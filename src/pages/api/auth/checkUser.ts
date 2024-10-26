import { app } from "../../../firebase/server";
import { getAuth } from "firebase-admin/auth";
import { SESSION_COOKIE } from "../../../constants";
import { UnauthorizedError, ForbiddenError } from "../../../errors";
import type { AstroCookies } from "astro";

export const checkUserAuth = async (cookies?: AstroCookies, token?: string) => {
  const user = await verifyToken(token, cookies?.get(SESSION_COOKIE)?.value);

  if (!user) {
    throw new UnauthorizedError("User not found");
  }
  if (!user.email_verified) {
    throw new ForbiddenError("Email not verified");
  }
  if (!user.email) {
    throw new ForbiddenError("Email not present");
  }
  if (user.email.split("@").length > 2) {
    throw new ForbiddenError("Invalid email");
  }

  return user;
};

const verifyToken = async (idToken?: string, sessionCookie?: string) => {
  const auth = getAuth(app);
  try {
    if (idToken) {
      return auth.verifyIdToken(idToken);
    } else if (sessionCookie) {
      return auth.verifySessionCookie(sessionCookie);
    }
    throw new UnauthorizedError("Authorization token not present");
  } catch (error) {
    console.error(error);
    throw new UnauthorizedError("Failed to verify authentication token");
  }
};

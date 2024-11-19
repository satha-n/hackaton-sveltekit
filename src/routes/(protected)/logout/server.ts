import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import { getLogoutUri } from "$lib/auth/services";

export const GET: RequestHandler = async ({ cookies }) => {
  cookies.delete("accessToken", {path: "/"});
  cookies.delete("idToken", {path: "/"});
  cookies.delete("account", {path: "/"});

  throw redirect(302, getLogoutUri());
};
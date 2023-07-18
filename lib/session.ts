import { getServerSession } from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import { SessionInterface } from "@/common.types";

export const authOptions: NextAuthOptions = {
    providers: []
}

export async function getCurrentUser() {
    const session = await getServerSession(authOptions) as SessionInterface;
  
    return session;
  }
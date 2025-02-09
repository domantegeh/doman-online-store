import type { Provider } from "next-auth/providers";
import type { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import NextAuth from "next-auth";

import { prisma } from "@/utils/configs/db";
import { Roles } from "@/utils/types/users";

const providers: Provider[] = [
  Google({
    allowDangerousEmailAccountLinking: true,
  }),
  GitHub({
    allowDangerousEmailAccountLinking: true,
  }),
];

const config = {
  adapter: PrismaAdapter(prisma),
  providers,
  session: {
    strategy: "database",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    session({ session, user }) {
      session.user.role = user.role;
      session.user.address = user.address;
      return session;
    },
  },
} satisfies NextAuthConfig;

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export const { handlers, signIn, signOut, auth } = NextAuth(config);

declare module "next-auth" {
  interface User {
    role: Roles;
    address: string;
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser {
    role: Roles;
    address: string;
  }
}

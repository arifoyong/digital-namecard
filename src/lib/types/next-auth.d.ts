import NextAuth from 'next-auth';
import { DefaultSession } from "next-auth";

// // nextauth.d.ts
declare module "next-auth" {
  export interface Session {
    user?: {
      id: string;
    } & DefaultSession["user"];
  }
}

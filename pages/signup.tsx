import Signup from "@/components/signup/Signup";
import { AuthContextProvider } from "@/contexts/AuthContext";
import Head from "next/head";

export default function signup() {
  return (
    <>
      <Head>
        <title>Sign-Up</title>
        <meta name="description" content="RJ Interior Sign-Up Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthContextProvider>
        <Signup />
      </AuthContextProvider>
    </>
  );
}

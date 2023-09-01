import Login from "@/components/login/Login";
import { AuthContextProvider } from "@/contexts/AuthContext";
import Head from "next/head";

export default function login() {
  return (
    <>
      <Head>
        <title>Log-In</title>
        <meta name="description" content="RJ Interior Log-In Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthContextProvider>
        <Login />
      </AuthContextProvider>
    </>
  );
}

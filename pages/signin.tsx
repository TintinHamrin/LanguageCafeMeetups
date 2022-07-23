import { signIn } from "next-auth/react";

export default ({ email }: { email: string }) => (
  <button onClick={() => signIn("email", { email: "tintinhamrin@gmail.com" })}>
    Sign in with Email
  </button>
);

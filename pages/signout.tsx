import { signOut } from "next-auth/react";

export default ({ email }: { email: string }) => (
  <button
    //onClick={() => signOut({ callbackUrl: "http://localhost:3000/meetups" })}
    onClick={() => signOut({ redirect: false })}
  >
    Sign out with Email
  </button>
);

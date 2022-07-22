import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function login() {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

//   async function auth() {
//     const data = await fetch("/api/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: {tt:logi},
//     });
//     const result = await data.json(); // change to check that res is ok
//   }
//   auth();

//   return <div>login</div>;
// }

export default login;

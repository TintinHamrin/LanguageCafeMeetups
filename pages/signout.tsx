import { signOut, useSession } from "next-auth/react";
import classes from "./signin.module.css";

export default () => {
  return (
    <div className={classes.wrapper}>
      <button onClick={() => signOut()}>Sign out with Email</button>
    </div>
  );
};

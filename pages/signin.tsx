import { signIn } from "next-auth/react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import classes from "./signin.module.css";
import { useState } from "react";
import { Card, CardContent } from "@mui/material";

export default function signin() {
  const [loginEmail, setLoginEmail] = useState("");

  const onEmailChange = (event: any) => {
    setLoginEmail(event.target.value);
  };

  return (
    <div className={classes.wrapper}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            onChange={onEmailChange}
          />
          <button
            className={classes.button}
            onClick={() =>
              signIn("email", {
                email: loginEmail,
                callbackUrl: "/add-meetup",
              })
            }
          >
            Sign in with Email
          </button>
        </CardContent>
      </Card>
    </div>
  );
}

import { signIn } from "next-auth/react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import classes from "./signin.module.css";
import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export default function signin() {
  const [loginEmail, setLoginEmail] = useState("");

  const onEmailChange = (event: any) => {
    setLoginEmail(event.target.value);
  };

  return (
    <div className={classes.body}>
      <Card className={classes.card}>
        <CardContent>
          <Box
            className={classes.formWrapper}
            component="form"
            noValidate
            autoComplete="off"
          >
            <Typography variant="h4" sx={{ mb: "15px" }}>
              Sign in with Email
            </Typography>
            <TextField
              className={classes.textField}
              id="email"
              label="Email"
              variant="outlined"
              onChange={onEmailChange}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button
            onClick={() =>
              signIn("email", {
                email: loginEmail,
                callbackUrl: "/add-meetup",
              })
            }
          >
            Sign in with Email
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

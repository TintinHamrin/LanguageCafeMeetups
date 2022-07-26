import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import classes from "./signin.module.css";

export default () => {
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
              Bye!
            </Typography>
            {/* <TextField
              className={classes.textField}
              id="email"
              label="Email"
              variant="outlined"
              onChange={onEmailChange} */}
            {/* /> */}
          </Box>
        </CardContent>
        <CardActions>
          <Button onClick={() => signOut()}>Sign out with email</Button>
        </CardActions>
      </Card>
    </div>
  );
};

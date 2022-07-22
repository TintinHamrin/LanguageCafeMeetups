import { Box, Card, CardContent, TextField, Typography } from "@mui/material";
import { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import CustomButton from "../../../components/ui/CustomButton";
import classes from "./index.module.css";

export default function index() {
  const router = useRouter();
  const { MeetupId } = router.query;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  const handleNameChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPhone(event.target.value);
  };

  const handleMailChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMail(event.target.value);
  };

  const handleSubmit = async () => {
    const attendee: Prisma.AttendeeCreateInput = {
      name: name,
      phone: phone,
      mail: mail,
      meetingId: parseInt(router.query.MeetupId! as string),
    };
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attendee),
    });
    const result = await res.json();
    router.push(`/meetup/${MeetupId}`);
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
              Register for meetup
            </Typography>
            <TextField
              fullWidth
              id="outlined-textarea"
              label="First and last name"
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                handleNameChange(event)
              }
            />
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Phone number"
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                handlePhoneChange(event)
              }
            />
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Email"
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                handleMailChange(event)
              }
            />
            <CustomButton onClick={handleSubmit}>Submit</CustomButton>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

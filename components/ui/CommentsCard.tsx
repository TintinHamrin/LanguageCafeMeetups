import {
  Card,
  CardActions,
  CardContent,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import classes from "./CommentsCard.module.css";
import CustomButton, { CustomButtonDisabled } from "./CustomButton";

function CommentsCard({ comments }) {
  const router = useRouter();
  const { MeetupId } = router.query;
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  console.log(comments.length);

  //   useEffect(() => {
  //     comments.map((comment) => {
  //       const y = moment(comment.date).format("YYYY-MM-DD");
  //       const diff = moment(Date.now()).diff(y, "days");
  //       console.log("diff in days", diff);
  //     });
  //   });

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onCommentChange = (e) => {
    setComment(e.target.value);
  };

  const addCommentHandler = async () => {
    const commentData = {
      name: name,
      comment: comment,
      date: new Date(Date.now()),
      meetupId: MeetupId,
    };

    const data = await fetch("/api/new-comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
    const result = await data.json();
    console.log(result);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <Card variant="outlined" className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="body2">Comments</Typography>

            <div className={classes.readComments}>
              {comments.length === 0 && (
                <Typography variant="body2">No comments yet...</Typography>
              )}

              {comments.map((comment) => (
                <p key={comment.name}>
                  {comment.name}: {comment.comment},{comment.written} day(s)
                  ago.
                </p>
              ))}
            </div>
            <div className={classes.commentsCard}>
              <TextField
                fullWidth
                //id="standard-multiline-static"
                label="Name"
                rows={1}
                //defaultValue="Name"
                variant="filled"
                onChange={onNameChange}
              />
              <TextField
                fullWidth
                //id="standard-multiline-static"
                label="Comment"
                multiline
                rows={3}
                //defaultValue="Comment"
                variant="filled"
                onChange={onCommentChange}
              />
              <CardActions className={classes.cardActions}>
                <CustomButton onClick={addCommentHandler}>
                  Add comment
                </CustomButton>
              </CardActions>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default CommentsCard;

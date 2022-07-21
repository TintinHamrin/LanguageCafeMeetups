import {
  Card,
  CardActions,
  CardContent,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import moment from "moment";
import { ObjectId } from "mongodb";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CommentDocument } from "../../database/paprModels";
import classes from "./CommentsCard.module.css";
import CustomButton, { CustomButtonDisabled } from "./CustomButton";

function CommentsCard({ comments }: { comments: CommentDocument[] }) {
  const router = useRouter();
  const { MeetupId } = router.query;
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  //console.log(comments.length);

  //   useEffect(() => {
  //     comments.map((comment) => {
  //       const y = moment(comment.date).format("YYYY-MM-DD");
  //       const diff = moment(Date.now()).diff(y, "days");
  //       console.log("diff in days", diff);
  //     });
  //   });

  const onNameChange = (e: any) => {
    setName(e.target.value);
  };

  const onCommentChange = (e: any) => {
    setComment(e.target.value);
  };

  const addCommentHandler = async () => {
    console.log("adding");
    const commentData = {
      //_id: new string,
      date: new Date(Date.now()),
      name: name,
      comment: comment,
      meetupId: MeetupId! as string,
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

    updateCommentsSection();
  };

  const updateCommentsSection = () => {
    setName("");
    setComment("");
    router.push(`/meetup/${MeetupId}`);
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
                <div className={classes.commentWrapper} key={comment.name}>
                  <span>
                    <span className={classes.commentName}>{comment.name}:</span>
                    {comment.comment}
                  </span>
                  <span className={classes.commentDate}>
                    {/* {comment.written} day(s) ago. */}x day(s) ago.
                  </span>
                </div>
              ))}
            </div>
            <div className={classes.commentsCard}>
              <TextField
                fullWidth
                //id="standard-multiline-static"
                label="Name"
                rows={1}
                //defaultValue={name}
                variant="filled"
                onChange={onNameChange}
                value={name}
              />
              <TextField
                fullWidth
                //id="standard-multiline-static"
                label="Comment"
                multiline
                rows={3}
                //defaultValue={comment}
                variant="filled"
                onChange={onCommentChange}
                value={comment}
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

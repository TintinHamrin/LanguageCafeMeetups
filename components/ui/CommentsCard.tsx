import {
  Card,
  CardActions,
  CardContent,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Comment, Prisma } from "@prisma/client";
import moment from "moment";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import classes from "./CommentsCard.module.css";
import CustomButton from "./CustomButton";

function CommentsCard({ comments }: { comments: Comment[] }) {
  const router = useRouter();
  const { MeetupId } = router.query;
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [dateDiff, setDateDiff] = useState(0);

  useEffect(() => {
    comments.map((comment) => {
      const commentDate = moment(comment.date).format("YYYY-MM-DD");
      setDateDiff(moment(Date.now()).diff(commentDate, "days"));
    });
  });

  const onNameChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setName(e.target.value);
  };

  const onCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const addCommentHandler = async () => {
    const commentData: Prisma.CommentCreateInput = {
      name: name,
      comment: comment,
      meetupId: parseInt(MeetupId! as string),
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
                    {dateDiff} day(s) ago.
                  </span>
                </div>
              ))}
            </div>
            <div className={classes.commentsCard}>
              <TextField
                fullWidth
                label="Name"
                rows={1}
                //defaultValue={name}
                variant="filled"
                onChange={onNameChange}
                value={name}
              />
              <TextField
                fullWidth
                label="Comment"
                multiline
                rows={3}
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

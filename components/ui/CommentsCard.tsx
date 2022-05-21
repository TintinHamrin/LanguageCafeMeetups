import {
  Card,
  CardActions,
  CardContent,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import classes from "./CommentsCard.module.css";
import CustomButton, { CustomButtonDisabled } from "./CustomButton";

function CommentsCard() {
  const addCommentHandler = () => {};

  return (
    <>
      <div className={classes.wrapper}>
        <Card variant="outlined" className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="body2">Comments</Typography>

            <div className={classes.readComments}>
              <Typography variant="body2">No comments yet...</Typography>
            </div>
            <div className={classes.commentsCard}>
              <TextField
                fullWidth
                //id="standard-multiline-static"
                label="Name"
                rows={1}
                //defaultValue="Name"
                variant="filled"
              />
              <TextField
                fullWidth
                //id="standard-multiline-static"
                label="Comment"
                multiline
                rows={3}
                //defaultValue="Comment"
                variant="filled"
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

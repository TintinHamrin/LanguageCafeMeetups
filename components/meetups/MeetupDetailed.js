import React from "react";
import { useRouter } from "next/router"
import classes from "./MeetupDetailed.module.css";

const MeetupDetailed = (props) => {
  const router = useRouter();
  const query = router.query;


  return (
    <>
      <section className={classes.details}>
        <img src={props.image} />
        <h1>
          {props.title} {query.meetupId}
        </h1>
      </section>
    </>
  );
};

export default MeetupDetailed;

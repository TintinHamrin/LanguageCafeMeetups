import classes from "./MeetupList.module.css";

function MeetupList() {
  return (
    <ul className={classes.list}>
      <li>one meetup</li>
      <li>two meetup</li>
      <li>three meetup</li>
    </ul>
  );
}

export default MeetupList;

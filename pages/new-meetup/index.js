import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  async function newMeetupHandler(data) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const data = await response.json();
    // console.log(data);
  }

  return (
    <>
      <NewMeetupForm onAddMeetup={newMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;

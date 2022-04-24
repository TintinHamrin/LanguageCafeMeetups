import React from "react";
import { useRouter } from "next/router";
import MeetupList from "../../../components/meetups/MeetupList";

function City() {
  const router = useRouter();
  const city = router.query.city;

  return (
    <>
      <div>in dynamic city {city}</div>
      <MeetupList />
    </>
  );
}

export default City;

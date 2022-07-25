import React from "react";
import { useRouter } from "next/router";
import MeetupCard from "../../../components/ui/MeetupCard";
import MeetupBox from "../../../components/ui/MeetupBox";
import { Meetup, PrismaClient } from "@prisma/client";

function City({ meetups }: { meetups: string[] }) {
  const parsedMeetups = meetups.map((m) => JSON.parse(m) as Meetup);
  const router = useRouter();
  const city = router.query.city;

  return (
    <>
      <MeetupBox city={city}>
        {parsedMeetups.map((meetup) => (
          <MeetupCard meetup={meetup} />
        ))}
      </MeetupBox>
    </>
  );
}

export default City;

// export async function getStaticPaths() {
//   return {
//     fallback: true,
//     paths: [
//       {
//         params: {
//           city: "miami",
//         },
//       },
//       {
//         params: {
//           city: "newyork",
//         },
//       },

//       {
//         params: {
//           city: "colorado",
//         },
//       },
//     ],
//   };
// }

export async function getStaticProps(context: any) {
  let param = context.params.city;
  const capital = param[0].toUpperCase();
  param = capital.concat(param.slice(1));

  const prisma = new PrismaClient();
  const result = await prisma.meetup.findMany({
    where: {
      city: param,
    },
  });

  return {
    props: {
      meetups: result.map((r) => JSON.stringify(r)),
    },
  };
}

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Card, CardContent, Tab, Tabs, Typography } from "@mui/material";
import { Meetup, PrismaClient, User } from "@prisma/client";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import React from "react";
import classes from "./profile.module.css";

function Profile({ meetups }: { meetups: string[] }) {
  const y = meetups.map((m) => JSON.parse(m) as Meetup);
  const [value, setValue] = React.useState("1");
  const { data: session } = useSession();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const openMeetupHandler = () => {
    console.log("openMeetupHandler");
  };

  return (
    <div className={classes.body}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5"> Hello {session?.user?.email}</Typography>
          <Box>
            <TabContext value={value}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Account info" value="Account info" />
                <Tab label="Added meetups" value="Added meetups" />
                <Tab label="Friends" value="Friends" />
              </TabList>

              <TabPanel value="Account info">Account info</TabPanel>
              <TabPanel value="Added meetups">
                {y.map((m) => (
                  <Card
                    sx={{ margin: 2 }}
                    onClick={openMeetupHandler}
                    className={classes.meetupCard}
                  >
                    {/* TODO move to css */}

                    <CardContent>
                      <div>
                        <>
                          {m.city}
                          {m.date}
                          {m.description}
                        </>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabPanel>
              <TabPanel value="Friends">Friends</TabPanel>
            </TabContext>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default Profile;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  console.log("sess", session?.h);
  const prisma = new PrismaClient();
  const meetups = await prisma.meetup.findMany({
    where: {
      createdBy: session?.id as string,
    },
  });

  //   const res = await prisma.user.findMany({
  //     where: {
  //       id: session?.user.email,
  //     },
  //   });

  return {
    props: {
      meetups: meetups.map((m) => JSON.stringify(m)),
      //meetups: meetups,
    },
  };
};

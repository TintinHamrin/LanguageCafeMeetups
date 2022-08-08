import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Card, CardContent, Tab, Tabs, Typography } from "@mui/material";
import { Meetup, PrismaClient, User } from "@prisma/client";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { unstable_getServerSession } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import React from "react";
import classes from "./profile.module.css";
import { authOptions } from "./api/auth/[...nextauth]";
import { useRouter } from "next/router";

function Profile({ meetups }: { meetups: string[] }) {
  const router = useRouter();
  const y = meetups.map((m) => JSON.parse(m) as Meetup);
  const [value, setValue] = React.useState("1");
  const { data: session } = useSession();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const openMeetupHandler = (m: Meetup) => {
    router.push(`meetup/${m.id}`);
  };

  const instagramHandler = () => {
    router.push(
      "https://api.instagram.com/oauth/authorize?client_id=586680009758333&redirect_uri=https://language-cafe.herokuapp.com/&scope=user_profile,user_media&response_type=code"
    );
  };
  const instagramHandler2 = async () => {
    const rawResponse = await fetch(
      "https://api.instagram.com/oauth/access_token",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: "e970eccbc55765f943e55771936d577c",
          client_secret: "4cee8569bb17cf249f193d30a7d81d4c",
          grant_type: "authorization_code",
          redirect_uri: "https://language-cafe.herokuapp.com/",
          code: "AQCDwUo8l3OlQR4DlW0beKHOeSWn2ND1XoiSV3zbVS7CI-G5T3k0dINqNUlNr3n_hHimW4Ij70lxrAXbpg9ogSECnj0MSQX7o-fsYkLE8DRTA7pLyvdk3-r9mE2Jt6COx1831cku88Lyh4ole0SNAHAmSki8hEgmOIj4vLhTiIoDR6ZH6kwyBr2mpNuK0k6kZrUpeOTvP5dqu5wuM6S_UNt4p_QtKRYoD5HYhbktmN2L7A",
        }),
      }
    );
    const content = await rawResponse.json();

    console.log(content);
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

              <TabPanel value="Account info">
                Account info
                <div>
                  <button onClick={instagramHandler}>
                    Connect to Instagram
                  </button>
                </div>
                <button onClick={instagramHandler2}>
                  Connect to Instagram again
                </button>
              </TabPanel>
              <TabPanel value="Added meetups">
                {y.map((m) => (
                  <Card
                    sx={{ margin: 2 }}
                    onClick={(e) => openMeetupHandler(m)}
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

// export const getServerSideProps: GetServerSideProps = async (
//   ctx: GetServerSidePropsContext
// ) => {

export async function getServerSideProps(context: any) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  //   const session = await getSession(ctx); //const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions);
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
    },
  };
}

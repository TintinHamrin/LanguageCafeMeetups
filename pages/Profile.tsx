import { Card, CardContent, Typography } from "@mui/material";
import { PrismaClient, User } from "@prisma/client";
import { useSession } from "next-auth/react";
import React from "react";

function Profile({ res }: { res: string }) {
  const { data: session } = useSession();

  console.log("user", session);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography>User: {session?.user?.email}</Typography>
        <Typography>Member since:</Typography>
      </CardContent>
    </Card>
  );
}

export default Profile;

export async function getServerSideProps() {
  //   const prisma = new PrismaClient();
  //   const res = await prisma.user.findUnique({
  //     where: {
  //       email: "tintinhamrin@gmail.com",
  //     },
  //   });
  //   return { props: res };
}

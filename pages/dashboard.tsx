import { Box, Center, Grid, Heading, VStack } from "@chakra-ui/react";
import axios from "axios";
import { getCookie } from "cookies-next";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Router from "next/router";
import React from "react";
import NilaiAkhir from "../components/NilaiAkhir";
import Profile from "../components/Profile";
import Status from "../components/Status";
import useClient, { TitleId } from "../engines/useClient";

function Dashboard(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const client = useClient();
  const validateToken = client.validateEntityToken();
  const EntityToken = getCookie("EntityToken");
  React.useEffect(() => {
    if ((validateToken.data?.data?.error && !EntityToken) || !props.dataLogin)
      Router.push("/");
  }, [
    validateToken,
    EntityToken,
    props.accountInfo,
    props.dataLogin,
    props.error,
  ]);

  return (
    <VStack
      position={"relative"}
      height={"100vh"}
      width={"100vw"}
      backgroundImage={"./Background_Dashboard.png"}
    >
      <Center
        width={"40%"}
        height={"9%"}
        borderBottomRadius={"70px"}
        bgColor={"#f9f3ea"}
        color={"#BE9770"}
        boxShadow={"0 9px 0 0 rgb(0 0 0 / 15%), 0 0 9px 0 rgb(0 0 0 / 14%)"}
      >
        <Heading fontSize={"40px"}>Dashboard Information</Heading>
      </Center>
      <Grid
        paddingTop={"50px"}
        paddingBottom={"20px"}
        height={"91%"}
        width={"90%"}
        templateRows="repeat(14, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={{ lg: 12, md: 6 }}
      >
        <Profile userData={props} />
        <Status userData={props} />
        <NilaiAkhir userData={props} />
      </Grid>
    </VStack>
  );
}

// @ts-ignore
export const getServerSideProps: GetServerSideProps<{
  dataLogin: any;
  accountInfo: any;
  error: any;
}> = async (context) => {
  try {
    const SessionTicket = getCookie("SessionTicket", context) || "";
    const PlayFabId = getCookie("PlayFabId", context) || "";
    const dataLogin = await axios.post(
      `https://${TitleId}.playfabapi.com/Client/GetUserData`,
      {},
      {
        headers: {
          "X-Authorization": SessionTicket,
        },
        withCredentials: true,
      }
    );
    const accountInfo = await axios.post(
      `https://${TitleId}.playfabapi.com/Client/GetAccountInfo`,
      {
        PlayFabId: PlayFabId,
      },
      {
        headers: {
          "X-Authorization": SessionTicket,
          withCredentials: true,
        },
      }
    );
    return {
      props: {
        dataLogin: dataLogin.data?.data?.Data,
        accountInfo: accountInfo.data?.data?.AccountInfo,
      },
    };
  } catch (error) {
    return {
      props: {
        // @ts-ignore
        error: error.response.data,
      },
    };
  }
};

export default Dashboard;

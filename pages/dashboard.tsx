import { Box, Center, Grid, Heading, VStack } from "@chakra-ui/react";
import { css } from "@emotion/react";
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
      height={{ lg: "100vh", sm: "auto" }}
      width={"100vw"}
      backgroundImage={"./Background_Dashboard.png"}
      overflowY={{ sm: "auto", lg: "unset" }}
    >
      <Center
        width={{ lg: "40%", sm: "70vw" }}
        height={{ lg: "9%", sm: "35px" }}
        borderBottomRadius={{ sm: "25px", lg: "70px", md: "30px" }}
        bgColor={"#f9f3ea"}
        color={"#BE9770"}
        boxShadow={"0 9px 0 0 rgb(0 0 0 / 15%), 0 0 9px 0 rgb(0 0 0 / 14%)"}
      >
        <Heading fontSize={{ lg: "2.35vw", sm: "4vw", md: "3.25vw" }}>
          Dashboard Information
        </Heading>
      </Center>
      <Grid
        paddingTop={{ lg: "50px", sm: "30px" }}
        paddingBottom={"20px"}
        height={"91%"}
        minHeight={"850px"}
        css={css`
          @media only screen and (orientation: landscape) and (max-width: 1200px) {
            min-height: 0px;
          }
        `}
        width={{ lg: "90%", sm: "95%" }}
        templateRows={"repeat(14, 1fr)"}
        templateColumns={{ lg: "repeat(4, 1fr)", sm: "repeat(1, 1fr)" }}
        gap={{ md: 12, sm: 10 }}
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

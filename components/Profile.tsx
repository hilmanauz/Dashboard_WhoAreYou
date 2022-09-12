import {
  GridItem,
  Box,
  Heading,
  Center,
  HStack,
  VStack,
  Spacer,
  Button,
  Image,
  Text,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { deleteCookie } from "cookies-next";
import Router from "next/router";
import React from "react";

const profileTitle = [
  "Nama",
  "Umur",
  "Jenis kelamin",
  "NIP",
  "Institusi",
  "Kota",
];

function Profile({
  userData,
}: {
  userData: { dataLogin: any; accountInfo: any };
}) {
  const handleSignOut = React.useCallback(() => {
    deleteCookie("EntityId");
    deleteCookie("SessionTicket");
    deleteCookie("EntityToken");
    deleteCookie("PlayFabId");
    Router.push("/");
  }, []);

  return (
    <GridItem
      marginBottom={"25px"}
      colSpan={2}
      rowSpan={7}
      bg="#F9F3EA"
      borderRadius={"10px"}
      boxShadow={"0 12px 0 0 rgb(0 0 0 / 15%), 0 0 12px 0 rgb(0 0 0 / 14%)"}
      outlineOffset={"-11px"}
      position={"relative"}
    >
      <Center height={"100%"} width={"100%"} padding={"40px"} paddingY={"0px"}>
        <Box
          position={"absolute"}
          top={{ md: -5, lg: -8 }}
          left={0}
          right={0}
          textAlign={"center"}
        >
          <HStack
            width={"70%"}
            justifyContent={"center"}
            marginLeft={"auto"}
            marginRight={"auto"}
            paddingY={"0.5vw"}
            borderRadius={"16px"}
            bgColor={"#BE9770"}
            boxShadow={"0 5px 0 0 rgb(0 0 0 / 15%), 0 0 5px 0 rgb(0 0 0 / 14%)"}
          >
            <span style={{ fontSize: "20px", color: "white" }}>&#9670;</span>
            <Heading color={"white"} paddingInline={"20px"} fontSize={"36px"}>
              Profile
            </Heading>
            <span style={{ fontSize: "20px", color: "white" }}>&#9670;</span>
          </HStack>
        </Box>
        <HStack gap={8} height={"100%"} width={"100%"}>
          <Center
            width={{ base: "25%", md: "33%", lg: "25%" }}
            height={"full"}
            flexDirection={"column"}
          >
            <br />
            <Image src="./Male_Head.png" alt="Dan Abramov" width={"160px"} />
            <Button
              type={"submit"}
              onClick={handleSignOut}
              size={"lg"}
              marginTop={"15px"}
              width={"160px"}
              bgColor={"#BE9770"}
              borderRadius={"15px"}
              _hover={{ bgColor: "#E7D7C5" }}
              color={"white"}
              fontSize={"22px"}
              boxShadow={
                "0 3px 0 0 rgb(0 0 0 / 15%), 0 0 3px 0 rgb(0 0 0 / 14%)"
              }
            >
              Sign out
            </Button>
          </Center>

          <Center
            height={"full"}
            width={"full"}
            flexDirection={"column"}
            alignItems={"flex-start"}
          >
            <br />
            <TableContainer width={"full"}>
              <Table size="sm">
                <Tbody>
                  <Tr border={"2px solid #D7BFA4"}>
                    <Th
                      borderRight={"2px solid #D7BFA4"}
                      width={"150px"}
                      color={"#C5A27F"}
                    >
                      <HStack>
                        <Text>Nama</Text>
                        <Spacer />
                        <Text>:</Text>
                      </HStack>
                    </Th>
                    <Td fontSize={"18px"}>
                      {userData.dataLogin.PlayerName.Value || "-"}
                    </Td>
                  </Tr>
                  <Tr border={"2px solid #D7BFA4"}>
                    <Th
                      borderRight={"2px solid #D7BFA4"}
                      width={"150px"}
                      color={"#C5A27F"}
                    >
                      <HStack>
                        <Text>Umur</Text>
                        <Spacer />
                        <Text>:</Text>
                      </HStack>
                    </Th>
                    <Td fontSize={"18px"}>
                      {userData.dataLogin.PlayerAge.Value || "-"}
                    </Td>
                  </Tr>
                  <Tr border={"2px solid #D7BFA4"}>
                    <Th
                      borderRight={"2px solid #D7BFA4"}
                      width={"150px"}
                      color={"#C5A27F"}
                    >
                      <HStack>
                        <Text>Jenis Kelamin</Text>
                        <Spacer />
                        <Text>:</Text>
                      </HStack>
                    </Th>
                    <Td fontSize={"18px"}>
                      {userData.dataLogin.PlayerGender?.Value || "-"}
                    </Td>
                  </Tr>
                  <Tr border={"2px solid #D7BFA4"}>
                    <Th
                      borderRight={"2px solid #D7BFA4"}
                      width={"150px"}
                      color={"#C5A27F"}
                    >
                      <HStack>
                        <Text>Institusi</Text>
                        <Spacer />
                        <Text>:</Text>
                      </HStack>
                    </Th>
                    <Td fontSize={"18px"}>
                      {userData.dataLogin.PlayerInstitution?.Value || "-"}
                    </Td>
                  </Tr>
                  <Tr border={"2px solid #D7BFA4"}>
                    <Th
                      borderRight={"2px solid #D7BFA4"}
                      width={"150px"}
                      color={"#C5A27F"}
                    >
                      <HStack>
                        <Text>Kota</Text>
                        <Spacer />
                        <Text>:</Text>
                      </HStack>
                    </Th>
                    <Td fontSize={"18px"}>
                      {userData.dataLogin.PlayerCity?.Value || "-"}
                    </Td>
                  </Tr>
                  <Tr border={"2px solid #D7BFA4"}>
                    <Th
                      borderRight={"2px solid #D7BFA4"}
                      width={"200px"}
                      color={"#C5A27F"}
                    >
                      <HStack>
                        <Text>NIP</Text>
                        <Spacer />
                        <Text>:</Text>
                      </HStack>
                    </Th>
                    <Td fontSize={"18px"}>
                      {userData.dataLogin.PlayerNip?.Value || "-"}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Center>
        </HStack>
      </Center>
    </GridItem>
  );
}

export default Profile;

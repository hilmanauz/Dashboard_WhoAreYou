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
      marginBottom={{ lg: "25px", sm: 0 }}
      colSpan={2}
      rowSpan={7}
      bg="#F9F3EA"
      borderRadius={"10px"}
      boxShadow={"0 12px 0 0 rgb(0 0 0 / 15%), 0 0 12px 0 rgb(0 0 0 / 14%)"}
      outlineOffset={"-11px"}
      position={"relative"}
    >
      <Center
        height={"100%"}
        width={"100%"}
        padding={{ lg: "40px", sm: "25px" }}
        flexDirection={{ md: "row", sm: "column" }}
        paddingY={"0px"}
      >
        <Box
          position={"absolute"}
          top={{ sm: -4, md: -5, lg: -8 }}
          left={0}
          right={0}
          textAlign={"center"}
        >
          <HStack
            width={{ lg: "70%", sm: "55%" }}
            height={{ lg: "auto", md: "40px", sm: "30px" }}
            justifyContent={"center"}
            marginLeft={"auto"}
            marginRight={"auto"}
            paddingY={"0.5vw"}
            borderRadius={{ lg: "16px", md: "12px", sm: "8px" }}
            bgColor={"#BE9770"}
            boxShadow={"0 5px 0 0 rgb(0 0 0 / 15%), 0 0 5px 0 rgb(0 0 0 / 14%)"}
          >
            <Text fontSize={{ lg: "1vw", sm: "2.5vw" }} color={"white"}>
              &#9670;
            </Text>
            <Heading
              color={"white"}
              paddingInline={"20px"}
              fontSize={{ lg: "1.8vw", sm: "4vw" }}
            >
              Profile
            </Heading>
            <Text fontSize={{ lg: "1vw", sm: "2.5vw" }} color={"white"}>
              &#9670;
            </Text>
          </HStack>
        </Box>
        <HStack
          gap={{ lg: 8, md: 4, sm: 0 }}
          spacing={0}
          height={"100%"}
          width={"100%"}
        >
          <Center
            width={{ base: "20%", md: "33%", lg: "25%" }}
            height={"100%"}
            flexDirection={"column"}
            display={{ md: "flex", sm: "none" }}
          >
            <br />
            <Image src="./Male_Head.png" alt="Dan Abramov" width={"160px"} />
            <Button
              onClick={handleSignOut}
              size={{ lg: "lg", md: "md", sm: "sm" }}
              marginTop={"15px"}
              paddingInline={{ md: "45px", sm: "15px" }}
              bgColor={"#BE9770"}
              borderRadius={{ lg: "15px", sm: "10px" }}
              _hover={{ bgColor: "#E7D7C5" }}
              color={"white"}
              fontSize={"1.3vw"}
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
                    <Th borderRight={"2px solid #D7BFA4"} color={"#C5A27F"}>
                      <HStack width={{ lg: "150px", sm: "90px", md: "140px" }}>
                        <Text
                          fontSize={{ lg: "0.7vw", md: "1.8vw", sm: "2vw" }}
                        >
                          Nama
                        </Text>
                        <Spacer />
                        <Text
                          fontSize={{ lg: "0.7vw", md: "1.8vw", sm: "3vw" }}
                        >
                          :
                        </Text>
                      </HStack>
                    </Th>
                    <Td fontSize={{ lg: "0.9vw", sm: "2.5vw" }}>
                      {userData.dataLogin.PlayerName.Value || "-"}
                    </Td>
                  </Tr>
                  <Tr border={"2px solid #D7BFA4"}>
                    <Th borderRight={"2px solid #D7BFA4"} color={"#C5A27F"}>
                      <HStack width={{ lg: "150px", sm: "90px", md: "140px" }}>
                        <Text
                          fontSize={{ lg: "0.7vw", md: "1.8vw", sm: "2vw" }}
                        >
                          Umur
                        </Text>
                        <Spacer />
                        <Text
                          fontSize={{ lg: "0.7vw", md: "1.8vw", sm: "3vw" }}
                        >
                          :
                        </Text>
                      </HStack>
                    </Th>
                    <Td fontSize={{ lg: "0.9vw", sm: "2.5vw" }}>
                      {userData.dataLogin.PlayerAge.Value || "-"}
                    </Td>
                  </Tr>
                  <Tr border={"2px solid #D7BFA4"}>
                    <Th borderRight={"2px solid #D7BFA4"} color={"#C5A27F"}>
                      <HStack width={{ lg: "150px", sm: "90px", md: "140px" }}>
                        <Text
                          fontSize={{ lg: "0.7vw", md: "1.8vw", sm: "2vw" }}
                        >
                          Jenis Kelamin
                        </Text>
                        <Spacer />
                        <Text
                          fontSize={{ lg: "0.7vw", md: "1.8vw", sm: "3vw" }}
                        >
                          :
                        </Text>
                      </HStack>
                    </Th>
                    <Td fontSize={{ lg: "0.9vw", sm: "2.5vw" }}>
                      {userData.dataLogin.PlayerGender?.Value || "-"}
                    </Td>
                  </Tr>
                  <Tr border={"2px solid #D7BFA4"}>
                    <Th borderRight={"2px solid #D7BFA4"} color={"#C5A27F"}>
                      <HStack width={{ lg: "150px", sm: "90px", md: "140px" }}>
                        <Text
                          fontSize={{ lg: "0.7vw", md: "1.8vw", sm: "2vw" }}
                        >
                          Institusi
                        </Text>
                        <Spacer />
                        <Text
                          fontSize={{ lg: "0.7vw", md: "1.8vw", sm: "3vw" }}
                        >
                          :
                        </Text>
                      </HStack>
                    </Th>
                    <Td fontSize={{ lg: "0.9vw", sm: "2.5vw" }}>
                      {userData.dataLogin.PlayerInstitution?.Value || "-"}
                    </Td>
                  </Tr>
                  <Tr border={"2px solid #D7BFA4"}>
                    <Th borderRight={"2px solid #D7BFA4"} color={"#C5A27F"}>
                      <HStack width={{ lg: "150px", sm: "90px", md: "140px" }}>
                        <Text
                          fontSize={{ lg: "0.7vw", md: "1.8vw", sm: "2vw" }}
                        >
                          Kota
                        </Text>
                        <Spacer />
                        <Text
                          fontSize={{ lg: "0.7vw", md: "1.8vw", sm: "3vw" }}
                        >
                          :
                        </Text>
                      </HStack>
                    </Th>
                    <Td fontSize={{ lg: "0.9vw", sm: "2.5vw" }}>
                      {userData.dataLogin.PlayerCity?.Value || "-"}
                    </Td>
                  </Tr>
                  <Tr border={"2px solid #D7BFA4"}>
                    <Th
                      borderRight={"2px solid #D7BFA4"}
                      width={{ lg: "200px", sm: "10px" }}
                      color={"#C5A27F"}
                    >
                      <HStack>
                        <Text
                          fontSize={{ lg: "0.7vw", md: "1.8vw", sm: "2vw" }}
                        >
                          NIP
                        </Text>
                        <Spacer />
                        <Text
                          fontSize={{ lg: "0.7vw", md: "1.8vw", sm: "3vw" }}
                        >
                          :
                        </Text>
                      </HStack>
                    </Th>
                    <Td fontSize={{ lg: "0.9vw", sm: "2.5vw" }}>
                      {userData.dataLogin.PlayerNip?.Value || "-"}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Center>
        </HStack>
        <HStack display={{ sm: "initial", md: "none" }} width={"full"}>
          <Button
            type={"submit"}
            onClick={handleSignOut}
            size={"sm"}
            marginTop={"10px"}
            bgColor={"#BE9770"}
            borderRadius={{ lg: "15px", sm: "10px" }}
            _hover={{ bgColor: "#E7D7C5" }}
            color={"white"}
            fontSize={"12px"}
            boxShadow={"0 3px 0 0 rgb(0 0 0 / 15%), 0 0 3px 0 rgb(0 0 0 / 14%)"}
          >
            Sign out
          </Button>
        </HStack>
      </Center>
    </GridItem>
  );
}

export default Profile;

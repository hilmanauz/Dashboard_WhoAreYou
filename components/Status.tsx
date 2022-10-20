import {
  GridItem,
  Box,
  Heading,
  Center,
  VStack,
  Grid,
  HStack,
  Spacer,
  Image,
  Text,
  Divider,
} from "@chakra-ui/react";
import React from "react";

function Status({
  userData,
}: {
  userData: {
    dataLogin: any;
    accountInfo: any;
  };
}) {
  return (
    <GridItem
      colSpan={2}
      rowSpan={{ lg: 14, sm: 13 }}
      bg="#F9F3EA"
      borderRadius={"10px"}
      boxShadow={"0 12px 0 0 rgb(0 0 0 / 15%), 0 0 12px 0 rgb(0 0 0 / 14%)"}
      outlineOffset={"-11px"}
      position={"relative"}
    >
      <Center height={"100%"} padding={"20px"}>
        <Box
          position={"absolute"}
          top={{ sm: -4, md: -5, lg: -8 }}
          left={0}
          right={0}
          textAlign={"center"}
        >
          <HStack
            width={{ lg: "70%", sm: "55%" }}
            height={{ lg: "auto", md: "40px", sm: "25px" }}
            justifyContent={"center"}
            marginLeft={"auto"}
            marginRight={"auto"}
            paddingY={"0.5vw"}
            borderRadius={{ lg: "16px", md: "12px", sm: "8px" }}
            bgColor={"#BE9770"}
            boxShadow={"0 5px 0 0 rgb(0 0 0 / 15%), 0 0 5px 0 rgb(0 0 0 / 14%)"}
          >
            <Text fontSize={{ lg: "1vw", sm: "2vw" }} color={"white"}>
              &#9670;
            </Text>
            <Heading
              color={"white"}
              paddingInline={"20px"}
              fontSize={{ lg: "1.8vw", sm: "3vw" }}
            >
              Status
            </Heading>
            <Text fontSize={{ lg: "1vw", sm: "2vw" }} color={"white"}>
              &#9670;
            </Text>
          </HStack>
        </Box>
        {userData.dataLogin.Stage1Grade.Value ? (
          <VStack
            width={{ lg: "80%", md: "85%" }}
            paddingTop={{ md: "20px" }}
            gap={4}
          >
            <Heading
              color={"#C5A17E"}
              marginBottom={"-5px"}
              fontSize={{ lg: "2vw", md: "3vw", sm: "3vw" }}
            >
              Personality Result
            </Heading>
            <HStack width={"100%"} gap={2} spacing={{ sm: 0, md: 2 }}>
              <VStack width={"25%"}>
                <Center flexDirection={"column"} width={"full"} height={"25vh"}>
                  <Center
                    height={"50%"}
                    bgColor={"#BE9771"}
                    width={"100%"}
                    borderTopRadius={"13px"}
                    color={"#E7D7C5"}
                    paddingTop={"20px"}
                  >
                    <Heading
                      fontSize={{ lg: "3.8vw", sm: "7vw" }}
                      lineHeight={"0"}
                      fontWeight={"extrabold"}
                    >
                      D
                    </Heading>
                  </Center>
                  <Center
                    height={"50%"}
                    bgColor={"#E7D7C5"}
                    width={"100%"}
                    borderBottomRadius={"13px"}
                  >
                    <Heading fontSize={{ lg: "2.8vw", sm: "4vw" }}>
                      {userData.dataLogin.DPercentage.Value}
                    </Heading>
                  </Center>
                </Center>
                <Text
                  fontWeight={"bold"}
                  color={"#5C4B44"}
                  fontSize={{ lg: "0.8vw", sm: "2vw" }}
                >
                  D-ominance
                </Text>
              </VStack>
              <VStack width={"25%"}>
                <Center flexDirection={"column"} width={"full"} height={"25vh"}>
                  <Center
                    height={"50%"}
                    bgColor={"#BE9771"}
                    width={"100%"}
                    borderTopRadius={"13px"}
                    color={"#E7D7C5"}
                    paddingTop={"20px"}
                  >
                    <Heading
                      fontSize={{ lg: "3.8vw", sm: "7vw" }}
                      lineHeight={"0"}
                      fontWeight={"extrabold"}
                    >
                      I
                    </Heading>
                  </Center>
                  <Center
                    height={"50%"}
                    bgColor={"#E7D7C5"}
                    width={"100%"}
                    borderBottomRadius={"13px"}
                  >
                    <Heading fontSize={{ lg: "2.8vw", sm: "4vw" }}>
                      {userData.dataLogin.IPercentage.Value}
                    </Heading>
                  </Center>
                </Center>
                <Text
                  fontWeight={"bold"}
                  color={"#5C4B44"}
                  fontSize={{ lg: "0.8vw", sm: "2vw" }}
                >
                  I-nfluence
                </Text>
              </VStack>
              <VStack width={"25%"}>
                <Center flexDirection={"column"} width={"full"} height={"25vh"}>
                  <Center
                    height={"50%"}
                    bgColor={"#BE9771"}
                    width={"100%"}
                    borderTopRadius={"13px"}
                    color={"#E7D7C5"}
                    paddingTop={"20px"}
                  >
                    <Heading
                      fontSize={{ lg: "3.8vw", sm: "7vw" }}
                      lineHeight={"0"}
                      fontWeight={"extrabold"}
                    >
                      S
                    </Heading>
                  </Center>
                  <Center
                    height={"50%"}
                    bgColor={"#E7D7C5"}
                    width={"100%"}
                    borderBottomRadius={"13px"}
                  >
                    <Heading fontSize={{ lg: "2.8vw", sm: "4vw" }}>
                      {userData.dataLogin.SPercentage.Value}
                    </Heading>
                  </Center>
                </Center>
                <Text
                  fontWeight={"bold"}
                  color={"#5C4B44"}
                  fontSize={{ lg: "0.8vw", sm: "2vw" }}
                >
                  S-teadiness
                </Text>
              </VStack>
              <VStack width={"25%"}>
                <Center flexDirection={"column"} width={"full"} height={"25vh"}>
                  <Center
                    height={"50%"}
                    bgColor={"#BE9771"}
                    width={"100%"}
                    borderTopRadius={"13px"}
                    color={"#E7D7C5"}
                    paddingTop={"20px"}
                  >
                    <Heading
                      fontSize={{ lg: "3.8vw", sm: "7vw" }}
                      lineHeight={"0"}
                      fontWeight={"extrabold"}
                    >
                      C
                    </Heading>
                  </Center>
                  <Center
                    height={"50%"}
                    bgColor={"#E7D7C5"}
                    width={"100%"}
                    borderBottomRadius={"13px"}
                  >
                    <Heading fontSize={{ lg: "2.8vw", sm: "4vw" }}>
                      {userData.dataLogin.CPercentage.Value}
                    </Heading>
                  </Center>
                </Center>
                <Text
                  fontWeight={"bold"}
                  color={"#5C4B44"}
                  fontSize={{ lg: "0.8vw", sm: "2vw" }}
                >
                  C-ompliance
                </Text>
              </VStack>
            </HStack>
            <Divider
              borderColor={"#BE9770"}
              borderBottomWidth={"3px"}
              width={"100%"}
            />
            <HStack>
              <Box width={"30%"}>
                <Image
                  src={`./${userData.dataLogin.Stage1Grade.Value}_dash.png`}
                  alt={"D_dash"}
                />
              </Box>
              <Spacer />
              <VStack width={"70%"} alignItems={"normal"}>
                <Text
                  color={"#C5A17E"}
                  fontWeight={"bold"}
                  letterSpacing={0.5}
                  fontSize={{ base: "0.5vw", lg: "1.2vw" }}
                >
                  Kamu adalah tipe
                </Text>
                <Text
                  letterSpacing={0.3}
                  fontSize={{ base: "2.5vw", md: "2.2vw", lg: "1vw" }}
                  color={"#5C4B44"}
                  lineHeight={{ base: "6", md: "tall", lg: "6" }}
                >
                  {userData.dataLogin.Stage1GradeInfo.Value}
                </Text>
              </VStack>
            </HStack>
          </VStack>
        ) : (
          <VStack>
            <Image src={"Attention.png"} alt={"attention"} />
            <Center flexDirection={"column"}>
              <Heading>Belum ada Result</Heading>
              <Text fontSize={"12px"} color={"#C5A27F"}>
                Ikuti test personality terlebih dahulu
              </Text>
            </Center>
          </VStack>
        )}
      </Center>
    </GridItem>
  );
}

export default Status;

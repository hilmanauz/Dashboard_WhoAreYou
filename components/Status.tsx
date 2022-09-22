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
import { css } from "@emotion/react";
import React from "react";

const percentageCount = (value: number) => Math.round((value / 24) * 100);
const gridRadius = "20px";

function Status({
  userData,
}: {
  userData: {
    dataLogin: any;
    accountInfo: any;
  };
}) {
  // const personalityLevelPercentage = React.useMemo(() => {
  //   if (!userData.dataLogin?.personalityData) return;
  //   const personality = userData.dataLogin.personalityData.Value.replace(
  //     /\[|\]/g,
  //     ""
  //   ).split(",");
  //   return Object.entries({
  //     D: {
  //       value: percentageCount(personality[0]),
  //       title: "Dominance",
  //       backgroundColor: "#F9AF1A",
  //       description:
  //         "Orang-orang dengan kepribadian Dominance memiliki kecenderungan karakter yang dominan, kuat, dengan ego yang tinggi. They are independent and risk taker. Mereka mudah merasa bosan dengan rutinitas, menyukai tantangan dan inovasi. Kepribadian DISC ini juga menyukai authority, responsibility, decision making, problem solving, multi tasking, maupun hal-hal lain yang membuatnya menjadi lebih dominan.",
  //     },
  //     I: {
  //       value: percentageCount(personality[1]),
  //       title: "Influence",
  //       backgroundColor: "#F90807",
  //       description:
  //         "Karakter DISC ini memiliki pengaruh yang besar bagi sekitarnya. Kepercayaan dirinya, antusiasmenya, selera humornya, dan optimismenya membawa semangat bagi lingkungannya. Sebagai negosiator yang handal, orang-orang dengan kepribadian Influence memiliki kemampuan persuasif yang bagus. Mereka menyukai popularitas, sehingga mereka sulit menerima penolakan dari orang lain.",
  //     },
  //     S: {
  //       value: percentageCount(personality[2]),
  //       title: "Steadiness",
  //       backgroundColor: "#1E75BB",
  //       description:
  //         "Konsisten, tenang, dan sabar adalah beberapa karakter yang menggambarkan kepribadian DISC yang satu ini. Sebaliknya, orang-orang dengan kepribadian Steadiness sulit menerima perubahan dan butuh waktu lama untuk menyesuaikan diri dengan lingkungan baru. Maka, mereka menyukai lingkungan yang memberi rasa aman tanpa perubahan yang mendadak.",
  //     },
  //     C: {
  //       value: percentageCount(personality[3]),
  //       title: "Compliance",
  //       backgroundColor: "#3DB508",
  //       description:
  //         "Orang-orang berkarakter Compliance biasanya tekun, sistematis, teliti, cermat, fokus pada ketepatan dan kualitas. Cenderung analitis dan kritis, sosok kepribadian DISC ini suka mengejar kualitas dengan standar yang tinggi dan mengerjakan tugas-tugas yang rinci. Karenanya, mereka menyukai batasan, prosedur, dan metode yang jelas.",
  //     },
  //   });
  // }, [userData.dataLogin]);
  // const scoreLevel2 = userData.dataLogin?.scoreData?.Value?.replace(
  //   /\[|\]/g,
  //   ""
  // )
  //   .split(",")
  //   .map((score: string) => parseInt(score));

  return (
    <GridItem
      colSpan={2}
      rowSpan={14}
      bg="#F9F3EA"
      borderRadius={"10px"}
      boxShadow={"0 12px 0 0 rgb(0 0 0 / 15%), 0 0 12px 0 rgb(0 0 0 / 14%)"}
      outlineOffset={"-11px"}
      position={"relative"}
    >
      <Center height={"100%"} padding={"20px"}>
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
            <span style={{ fontSize: "1vw", color: "white" }}>&#9670;</span>
            <Heading color={"white"} paddingInline={"20px"} fontSize={"1.8vw"}>
              Status
            </Heading>
            <span style={{ fontSize: "1vw", color: "white" }}>&#9670;</span>
          </HStack>
        </Box>
        {userData.dataLogin.Stage1Grade.Value ? (
          <VStack width={"80%"} gap={4}>
            <Heading color={"#C5A17E"} marginBottom={"-5px"} fontSize={"2vw"}>
              Personality Result
            </Heading>
            <HStack width={"100%"} gap={2}>
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
                      fontSize={"3.8vw"}
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
                    <Heading fontSize={"2.8vw"}>
                      {userData.dataLogin.DPercentage.Value}
                    </Heading>
                  </Center>
                </Center>
                <Text fontWeight={"bold"} color={"#5C4B44"} fontSize={"0.8vw"}>
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
                      fontSize={"3.8vw"}
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
                    <Heading fontSize={"2.8vw"}>
                      {userData.dataLogin.IPercentage.Value}
                    </Heading>
                  </Center>
                </Center>
                <Text fontWeight={"bold"} color={"#5C4B44"} fontSize={"0.8vw"}>
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
                      fontSize={"3.8vw"}
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
                    <Heading fontSize={"2.8vw"}>
                      {userData.dataLogin.SPercentage.Value}
                    </Heading>
                  </Center>
                </Center>
                <Text fontWeight={"bold"} color={"#5C4B44"} fontSize={"0.8vw"}>
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
                      fontSize={"3.8vw"}
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
                    <Heading fontSize={"2.8vw"}>
                      {userData.dataLogin.CPercentage.Value}
                    </Heading>
                  </Center>
                </Center>
                <Text fontWeight={"bold"} color={"#5C4B44"} fontSize={"0.8vw"}>
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
                  fontSize={{ base: "0.8vw", lg: "1vw" }}
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

import {
  GridItem,
  Center,
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  Image,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Tr,
  Thead,
  Divider,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import _ from "lodash";
import React from "react";

const percentageCount = (value: number) => Math.round((value / 24) * 100);

function NilaiAkhir({
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

  // const personalityResult = React.useMemo(() => {
  //   if (!personalityLevelPercentage) return;
  //   return _.sortBy(personalityLevelPercentage, [
  //     function ([key, value]) {
  //       return value.value;
  //     },
  //   ]).reverse()[0];
  // }, [personalityLevelPercentage]);

  return (
    <GridItem
      colSpan={2}
      rowSpan={7}
      bg="#F9F3EA"
      borderRadius={"10px"}
      boxShadow={"0 12px 0 0 rgb(0 0 0 / 15%), 0 0 12px 0 rgb(0 0 0 / 14%)"}
      outlineOffset={"-11px"}
      position={"relative"}
    >
      <Center height={"100%"} padding={"20px"} flexDirection={"column"}>
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
              Nilai Akhir
            </Heading>
            <span style={{ fontSize: "20px", color: "white" }}>&#9670;</span>
          </HStack>
        </Box>
        <br />
        <Center minWidth={"100%"}>
          {userData.dataLogin.Stage2Score?.Value ? (
            <HStack gap={4} width={"90%"}>
              <Center flexDirection={"column"} height={"27vh"} width={"30%"}>
                <Center
                  height={"30%"}
                  bgColor={"#BE9771"}
                  width={"100%"}
                  borderTopRadius={"10px"}
                  color={"#E7D7C5"}
                >
                  <Heading fontSize={"40px"}>Score</Heading>
                </Center>
                <Center
                  height={"70%"}
                  bgColor={"#E7D7C5"}
                  width={"100%"}
                  borderBottomRadius={"10px"}
                >
                  <Heading fontSize={"100px"}>
                    {userData.dataLogin.Stage2Score?.Value}
                  </Heading>
                </Center>
              </Center>
              <Center
                flexDirection={"column"}
                height={"27vh"}
                bgColor={"#E7D7C5"}
                width={"70%"}
                borderRadius={"10px"}
                position={"relative"}
              >
                <TableContainer width={"90%"} overflowX={"hidden"}>
                  <Table size="sm">
                    <Tbody>
                      <Tr color={"#BE9771"}>
                        <Td
                          textAlign={"center"}
                          borderRight={"3px solid #BE9771"}
                          fontSize={"25px"}
                          fontWeight={"bold"}
                        >
                          1
                        </Td>
                        <Td
                          textAlign={"center"}
                          border={"3px solid #BE9771"}
                          borderTop={"transparent"}
                          fontSize={"25px"}
                          fontWeight={"bold"}
                        >
                          2
                        </Td>
                        <Td
                          textAlign={"center"}
                          borderLeft={"3px solid #BE9771"}
                          fontSize={"25px"}
                          fontWeight={"bold"}
                        >
                          3
                        </Td>
                      </Tr>
                      <Tr height={"60px"}>
                        <Td
                          textAlign={"center"}
                          border={"3px solid #BE9771"}
                          borderLeft={"transparent"}
                          fontSize={"26px"}
                          fontWeight={"bold"}
                        >
                          22/22
                        </Td>
                        <Td
                          textAlign={"center"}
                          border={"3px solid #BE9771"}
                          fontSize={"26px"}
                          fontWeight={"bold"}
                        >
                          22/22
                        </Td>
                        <Td
                          textAlign={"center"}
                          border={"3px solid #BE9771"}
                          borderRight={"transparent"}
                          fontSize={"26px"}
                          fontWeight={"bold"}
                        >
                          22/22
                        </Td>
                      </Tr>
                      <Tr color={"#BE9771"}>
                        <Td
                          textAlign={"center"}
                          border={"3px solid #BE9771"}
                          borderLeft={"transparent"}
                          fontSize={"25px"}
                          fontWeight={"bold"}
                        >
                          4
                        </Td>
                        <Td
                          textAlign={"center"}
                          border={"3px solid #BE9771"}
                          fontSize={"25px"}
                          fontWeight={"bold"}
                        >
                          5
                        </Td>
                        <Td
                          textAlign={"center"}
                          border={"3px solid #BE9771"}
                          borderRight={"transparent"}
                          fontSize={"25px"}
                          fontWeight={"bold"}
                        >
                          6
                        </Td>
                      </Tr>
                      <Tr height={"60px"}>
                        <Td
                          textAlign={"center"}
                          borderColor={"transparent"}
                          borderRight={"3px solid #BE9771"}
                          fontSize={"26px"}
                          fontWeight={"bold"}
                        >
                          22/22
                        </Td>
                        <Td
                          textAlign={"center"}
                          borderColor={"transparent"}
                          fontSize={"26px"}
                          fontWeight={"bold"}
                        >
                          22/22
                        </Td>
                        <Td
                          textAlign={"center"}
                          borderColor={"transparent"}
                          borderLeft={"3px solid #BE9771"}
                          fontSize={"26px"}
                          fontWeight={"bold"}
                        >
                          22/22
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Center>
            </HStack>
          ) : (
            <VStack>
              <Image src={"Attention.png"} alt={"attention"} width={"10vw"} />
              <Center flexDirection={"column"}>
                <Heading>Belum ada Result</Heading>
                <Text fontSize={"12px"} color={"#C5A27F"}>
                  Ikuti test personality terlebih dahulu
                </Text>
              </Center>
            </VStack>
          )}
        </Center>
      </Center>
    </GridItem>
  );
}

export default NilaiAkhir;

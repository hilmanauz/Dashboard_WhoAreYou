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
            <span style={{ fontSize: "1vw", color: "white" }}>&#9670;</span>
            <Heading color={"white"} paddingInline={"20px"} fontSize={"1.8vw"}>
              Nilai Akhir
            </Heading>
            <span style={{ fontSize: "1vw", color: "white" }}>&#9670;</span>
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
                  <Heading fontSize={"2vw"}>Score</Heading>
                </Center>
                <Center
                  height={"70%"}
                  bgColor={"#E7D7C5"}
                  width={"100%"}
                  borderBottomRadius={"10px"}
                >
                  <Heading fontSize={"6vw"}>
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
                          fontSize={"1.2vw"}
                          fontWeight={"bold"}
                        >
                          1
                        </Td>
                        <Td
                          textAlign={"center"}
                          border={"3px solid #BE9771"}
                          borderTop={"transparent"}
                          fontSize={"1.2vw"}
                          fontWeight={"bold"}
                        >
                          2
                        </Td>
                        <Td
                          textAlign={"center"}
                          borderLeft={"3px solid #BE9771"}
                          fontSize={"1.2vw"}
                          fontWeight={"bold"}
                        >
                          3
                        </Td>
                      </Tr>
                      <Tr height={"7vh"}>
                        <Td
                          textAlign={"center"}
                          border={"3px solid #BE9771"}
                          borderLeft={"transparent"}
                          fontSize={"1.3vw"}
                          fontWeight={"bold"}
                        >
                          22/22
                        </Td>
                        <Td
                          textAlign={"center"}
                          border={"3px solid #BE9771"}
                          fontSize={"1.3vw"}
                          fontWeight={"bold"}
                        >
                          22/22
                        </Td>
                        <Td
                          textAlign={"center"}
                          border={"3px solid #BE9771"}
                          borderRight={"transparent"}
                          fontSize={"1.3vw"}
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
                          fontSize={"1.2vw"}
                          fontWeight={"bold"}
                        >
                          4
                        </Td>
                        <Td
                          textAlign={"center"}
                          border={"3px solid #BE9771"}
                          fontSize={"1.2vw"}
                          fontWeight={"bold"}
                        >
                          5
                        </Td>
                        <Td
                          textAlign={"center"}
                          border={"3px solid #BE9771"}
                          borderRight={"transparent"}
                          fontSize={"1.2vw"}
                          fontWeight={"bold"}
                        >
                          6
                        </Td>
                      </Tr>
                      <Tr height={"7vh"}>
                        <Td
                          textAlign={"center"}
                          borderColor={"transparent"}
                          borderRight={"3px solid #BE9771"}
                          fontSize={"1.3vw"}
                          fontWeight={"bold"}
                        >
                          22/22
                        </Td>
                        <Td
                          textAlign={"center"}
                          borderColor={"transparent"}
                          fontSize={"1.3vw"}
                          fontWeight={"bold"}
                        >
                          22/22
                        </Td>
                        <Td
                          textAlign={"center"}
                          borderColor={"transparent"}
                          borderLeft={"3px solid #BE9771"}
                          fontSize={"1.3vw"}
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

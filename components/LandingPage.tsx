import {
  VStack,
  Center,
  Container,
  Image,
  Box,
  Heading,
  HStack,
  Text,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Flex,
  Grid,
  GridItem,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Scrollbars from "rc-scrollbars";
import AutoSizer from "react-virtualized-auto-sizer";
import { BiMinus } from "react-icons/bi";
import SignModal from "./SignModal";
import Router from "next/router";
import { getCookie } from "cookies-next";
import useClient from "../engines/useClient";

function LandingPage() {
  const loginDisclosure = useDisclosure();
  const client = useClient();
  const dataLogin = client.getUserData();
  const validateToken = client.validateEntityToken();
  const EntityToken = getCookie("EntityToken");
  console.log(
    !!(
      (!validateToken.data?.data?.error &&
        EntityToken &&
        !loginDisclosure.isOpen) ||
      dataLogin.data
    )
  );
  return (
    <AutoSizer>
      {({ height, width }) => (
        <Scrollbars style={{ height, width }}>
          <Box h="full" w="full" position="relative">
            <SignModal modalDisclosure={loginDisclosure} />
            <VStack alignItems={"normal"}>
              <Center
                height={"100vh"}
                backgroundSize={"cover"}
                backgroundRepeat={"no-repeat"}
                backgroundPosition={"center"}
                position={"relative"}
                backgroundImage={"./background_title.png"}
                flexDirection={"column"}
              >
                <Box position={"absolute"} top={"30px"} right={"30px"}>
                  <Image
                    onClick={loginDisclosure.onOpen}
                    src={"Account_Button.png"}
                    alt={"Account_Button"}
                    cursor={"pointer"}
                    width={"125px"}
                  />
                </Box>
                <Box width={"750px"}>
                  <Image src={"./Logo.png"} alt={"logo"} objectFit={"cover"} />
                </Box>
                {!!(
                  (!validateToken.data?.data?.error &&
                    EntityToken &&
                    !loginDisclosure.isOpen) ||
                  dataLogin.data
                ) && (
                  <HStack marginTop={"50px"} spacing={"30px"}>
                    <Box
                      padding={"10px"}
                      bgColor={"#F9F3EA"}
                      borderRadius={"10px"}
                      boxShadow={
                        "0 5px 0 0 rgb(0 0 0 / 15%), 0 0 5px 0 rgb(0 0 0 / 14%)"
                      }
                    >
                      <Button
                        size={"lg"}
                        width={"full"}
                        bgColor={"#BE9770"}
                        paddingX={"80px"}
                        paddingY={"30px"}
                        _hover={{ opacity: "0.8" }}
                        onClick={() =>
                          Router.push(
                            "https://play.everidea.id/games/buildtest/demo/whoareyou/"
                          )
                        }
                        color={"white"}
                        fontSize={"22px"}
                        marginTop={"-4px"}
                        boxShadow={"0 4px #815230"}
                        _active={{
                          position: "relative",
                          top: "4px",
                          boxShadow: "none",
                        }}
                      >
                        <HStack spacing={"10px"}>
                          <Image src="./Desktop_Icon.png" alt="Desktop_Icon" />
                          <Heading
                            marginY={"auto !important"}
                            height={"full"}
                            lineHeight={"0"}
                          >
                            Desktop
                          </Heading>
                        </HStack>
                      </Button>
                    </Box>
                    <Box
                      padding={"10px"}
                      bgColor={"#F9F3EA"}
                      borderRadius={"10px"}
                      boxShadow={
                        "0 5px 0 0 rgb(0 0 0 / 15%), 0 0 5px 0 rgb(0 0 0 / 14%)"
                      }
                    >
                      <Button
                        size={"lg"}
                        width={"full"}
                        bgColor={"#BE9770"}
                        paddingX={"80px"}
                        paddingY={"30px"}
                        onClick={() =>
                          Router.push(
                            "https://play.everidea.id/games/buildtest/demo/mobile/whoareyou/"
                          )
                        }
                        _hover={{ opacity: "0.8" }}
                        color={"white"}
                        fontSize={"22px"}
                        marginTop={"-4px"}
                        boxShadow={"0 4px #815230"}
                        _active={{
                          position: "relative",
                          top: "4px",
                          boxShadow: "none",
                        }}
                      >
                        <HStack spacing={"10px"}>
                          <Image src="./Mobile_Icon.png" alt="Mobile_Icon" />
                          <Heading
                            marginY={"auto !important"}
                            height={"full"}
                            lineHeight={"0"}
                          >
                            Mobile
                          </Heading>
                        </HStack>
                      </Button>
                    </Box>
                    <Box
                      padding={"10px"}
                      bgColor={"#F9F3EA"}
                      borderRadius={"10px"}
                      boxShadow={
                        "0 5px 0 0 rgb(0 0 0 / 15%), 0 0 5px 0 rgb(0 0 0 / 14%)"
                      }
                    >
                      <Button
                        size={"lg"}
                        width={"full"}
                        bgColor={"#BE9770"}
                        paddingX={"80px"}
                        paddingY={"30px"}
                        onClick={() => Router.push("/dashboard")}
                        _hover={{ opacity: "0.8" }}
                        color={"white"}
                        fontSize={"22px"}
                        marginTop={"-4px"}
                        boxShadow={"0 4px #815230"}
                        _active={{
                          position: "relative",
                          top: "4px",
                          boxShadow: "none",
                        }}
                      >
                        <HStack spacing={"10px"}>
                          <Image
                            src="./Dashboard_Icon.png"
                            alt="Dashboard_Icon"
                          />
                          <Heading
                            marginY={"auto !important"}
                            height={"full"}
                            lineHeight={"0"}
                          >
                            Dashboard
                          </Heading>
                        </HStack>
                      </Button>
                    </Box>
                  </HStack>
                )}
              </Center>
              <VStack
                fontSize={"30px"}
                backgroundImage={"./Background.png"}
                backgroundSize={"contain"}
                position={"relative"}
                width={"full"}
                marginTop={"-20px !important"}
                paddingY={"300px"}
                spacing={"200px"}
                textAlign={"center"}
              >
                <Container maxW="80vw">
                  <Box
                    width={"full"}
                    height={"80vh"}
                    borderRadius={"30px"}
                    bgColor={"#f9f3ea"}
                    boxShadow={
                      "0 20px 0 0 rgb(0 0 0 / 15%), 0 0 20px 0 rgb(0 0 0 / 14%)"
                    }
                  ></Box>
                  <Box height={"100px"} />
                </Container>
                <Box
                  width={"full"}
                  bgColor={"#f9f3ea"}
                  boxShadow={
                    "0 20px 0 0 rgb(0 0 0 / 15%), 0 0 20px 0 rgb(0 0 0 / 14%)"
                  }
                  position={"relative"}
                  paddingY={"150px"}
                >
                  <Box
                    position={"absolute"}
                    top={{ md: -5, lg: -16 }}
                    left={0}
                    right={0}
                    textAlign={"center"}
                  >
                    <HStack
                      width={"fit-content"}
                      marginLeft={"auto"}
                      marginRight={"auto"}
                      borderRadius={"16px"}
                      paddingY={"30px"}
                      paddingX={"150px"}
                      bgColor={"#BE9770"}
                      boxShadow={
                        "0 8px 0 0 rgb(0 0 0 / 15%), 0 0 8px 0 rgb(0 0 0 / 14%)"
                      }
                    >
                      <span style={{ fontSize: "25px", color: "white" }}>
                        &#9670;
                      </span>
                      <Heading
                        color={"white"}
                        paddingInline={"2vw"}
                        fontSize={{ base: "1.5vw", md: "2.2vw", lg: "2.2vw" }}
                      >
                        About
                      </Heading>
                      <span style={{ fontSize: "25px", color: "white" }}>
                        &#9670;
                      </span>
                    </HStack>
                  </Box>
                  <Center width={"full"} alignSelf={"center"}>
                    <Container
                      maxW="75vw"
                      fontWeight={"extrabold"}
                      color={"#865A3A"}
                    >
                      <Text>
                        The first DISC assessment game and sensing perception
                        gap training in Indonesia
                      </Text>
                      <br />
                      <Text>
                        Who are you adalah permainan yang menggabungkan alat
                        penilaian serta penginderaan dan pelaksanaan pelatihan.
                        Who Are You akan menjadi pelatihan kepemimpinan praktis
                        bagi pemain yang menggabungkan konsep kepekaan
                        antarbudaya untuk menjembatani pengetahuan dengan
                        melatih soft-skill.
                      </Text>
                    </Container>
                  </Center>
                </Box>
                <Box
                  width={"full"}
                  bgColor={"#f9f3ea"}
                  boxShadow={
                    "0 20px 0 0 rgb(0 0 0 / 15%), 0 0 20px 0 rgb(0 0 0 / 14%)"
                  }
                  paddingY={"200px"}
                  position={"relative"}
                >
                  <Box
                    position={"absolute"}
                    top={{ md: -5, lg: -16 }}
                    left={0}
                    right={0}
                    textAlign={"center"}
                  >
                    <HStack
                      width={"fit-content"}
                      marginLeft={"auto"}
                      marginRight={"auto"}
                      borderRadius={"16px"}
                      paddingY={"30px"}
                      paddingX={"150px"}
                      bgColor={"#BE9770"}
                      boxShadow={
                        "0 8px 0 0 rgb(0 0 0 / 15%), 0 0 8px 0 rgb(0 0 0 / 14%)"
                      }
                    >
                      <span style={{ fontSize: "25px", color: "white" }}>
                        &#9670;
                      </span>
                      <Heading
                        color={"white"}
                        paddingInline={"2vw"}
                        fontSize={{ base: "1.5vw", md: "2.2vw", lg: "2.2vw" }}
                      >
                        What is DISC ?
                      </Heading>
                      <span style={{ fontSize: "25px", color: "white" }}>
                        &#9670;
                      </span>
                    </HStack>
                  </Box>
                  <Container maxW="75vw" fontSize={"30px"}>
                    <VStack gap={"50px"} alignItems={"normal"}>
                      <Grid templateColumns="repeat(3, 1fr)" gap={10}>
                        <GridItem colSpan={1}>
                          <Center height={"full"}>
                            <Image src="./D.png" alt="D" />
                          </Center>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <VStack alignItems={"flex-start"}>
                            <Text>
                              <b>(D)ominance</b> cenderung untuk:
                            </Text>
                            <List spacing={2} textAlign={"left"}>
                              <ListItem>
                                <ListIcon as={BiMinus} color="green.500" />
                                Mengambil keputusan dengan cepat, malah kadang
                                kecepetan
                              </ListItem>
                              <ListItem>
                                <ListIcon as={BiMinus} color="green.500" />
                                Senang mendapatkan tantangan, tapi keasikan
                                sendiri
                              </ListItem>
                              <ListItem>
                                <ListIcon as={BiMinus} color="green.500" />
                                Senang menunjukan kelebihan anda, sampe orang
                                lain bete
                              </ListItem>
                              <ListItem>
                                <ListIcon as={BiMinus} color="green.500" />
                                Jago debat, Gak ada kata kalah di kamus
                              </ListItem>
                            </List>
                          </VStack>
                        </GridItem>
                        <GridItem colSpan={1}>
                          <Center height={"full"}>
                            <Image src="./I.png" alt="I" />
                          </Center>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <VStack alignItems={"flex-start"}>
                            <Text>
                              <b>(i)nfluence</b> cenderung untuk:
                            </Text>
                            <List spacing={2} textAlign={"left"}>
                              <ListItem>
                                <ListIcon as={BiMinus} color="green.500" />
                                Terbuka akan segala kemungkinan
                              </ListItem>
                              <ListItem>
                                <ListIcon as={BiMinus} color="green.500" />
                                Kurang detail dalam mengerjakan sesuatu
                              </ListItem>
                              <ListItem>
                                <ListIcon as={BiMinus} color="green.500" />
                                Senang apabila bisa mempengaruhi orang lain
                              </ListItem>
                              <ListItem>
                                <ListIcon as={BiMinus} color="green.500" />
                                mudah kecewa apabila menerima penolakan
                              </ListItem>
                            </List>
                          </VStack>
                        </GridItem>
                        <GridItem colSpan={1}>
                          <Center height={"full"}>
                            <Image src="./S.png" alt="S" />
                          </Center>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <VStack alignItems={"flex-start"}>
                            <Text>
                              <b>(S)teadiness</b> cenderung untuk:
                            </Text>
                            <List spacing={2} textAlign={"left"}>
                              <ListItem>
                                <ListIcon as={BiMinus} color="green.500" />
                                Menjadi pendengar yang baik
                              </ListItem>
                              <ListItem>
                                <ListIcon as={BiMinus} color="green.500" />
                                Pekerja tim yang baik
                              </ListItem>
                              <ListItem>
                                <ListIcon as={BiMinus} color="green.500" />
                                Sensitif
                              </ListItem>
                              <ListItem>
                                <ListIcon as={BiMinus} color="green.500" />
                                Senang dengan kestabilan
                              </ListItem>
                            </List>
                          </VStack>
                        </GridItem>
                        <GridItem colSpan={1}>
                          <Center height={"full"}>
                            <Image src="./C.png" alt="C" />
                          </Center>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <VStack alignItems={"flex-start"}>
                            <Text>
                              <b>(C)onscientiousness</b> cenderung untuk:
                            </Text>
                            <List spacing={2} textAlign={"left"}>
                              <ListItem>
                                <ListIcon as={BiMinus} color="green.500" />
                                Senang dengan sesuatu yang terstruktur
                              </ListItem>
                              <ListItem>
                                <ListIcon as={BiMinus} color="green.500" />
                                terlihat pefeksionis
                              </ListItem>
                              <ListItem>
                                <ListIcon as={BiMinus} color="green.500" />
                                Tidak menyukai sesuatu yang tidak jelas
                              </ListItem>
                              <ListItem>
                                <ListIcon as={BiMinus} color="green.500" />
                                Mengerjakan segala sesuatu nya sendiri
                              </ListItem>
                            </List>
                          </VStack>
                        </GridItem>
                      </Grid>
                    </VStack>
                  </Container>
                </Box>
                <Box
                  width={"full"}
                  bgColor={"#f9f3ea"}
                  boxShadow={
                    "0 20px 0 0 rgb(0 0 0 / 15%), 0 0 20px 0 rgb(0 0 0 / 14%)"
                  }
                  position={"relative"}
                  paddingY={"150px"}
                >
                  <Box
                    position={"absolute"}
                    top={{ md: -5, lg: -16 }}
                    left={0}
                    right={0}
                    textAlign={"center"}
                  >
                    <HStack
                      width={"fit-content"}
                      marginLeft={"auto"}
                      marginRight={"auto"}
                      borderRadius={"16px"}
                      paddingY={"30px"}
                      paddingX={"150px"}
                      bgColor={"#BE9770"}
                      boxShadow={
                        "0 8px 0 0 rgb(0 0 0 / 15%), 0 0 8px 0 rgb(0 0 0 / 14%)"
                      }
                    >
                      <span style={{ fontSize: "25px", color: "white" }}>
                        &#9670;
                      </span>
                      <Heading
                        color={"white"}
                        paddingInline={"2vw"}
                        fontSize={{ base: "1.5vw", md: "2.2vw", lg: "2.2vw" }}
                      >
                        System Requirements
                      </Heading>
                      <span style={{ fontSize: "25px", color: "white" }}>
                        &#9670;
                      </span>
                    </HStack>
                  </Box>
                  <Container maxW="80vw">
                    <Center>
                      <VStack alignItems={"start"}>
                        <Text color={"transparent"}>_</Text>
                        <Text>CPU:</Text>
                        <Text>OS:</Text>
                        <Text>RAM:</Text>
                        <Text>Resolution:</Text>
                        <Text>Browser:</Text>
                        <Text>Network:</Text>
                      </VStack>
                      <VStack>
                        <Heading>Mobile</Heading>
                        <Text>Qualcomm® Snapdragon™ 662</Text>
                        <Text>Android 10</Text>
                        <Text>6 GB</Text>
                        <Text>1080x2340 {`(${6.53}")`}</Text>
                        <Text>Updated Browser</Text>
                        <Text>8 mbps</Text>
                      </VStack>
                      <Box width={"50px"}></Box>
                      <VStack>
                        <Heading>Desktop</Heading>
                        <Text>i3</Text>
                        <Text>Windows, linux, MacOS</Text>
                        <Text>6 GB</Text>
                        <Text>1280x1024</Text>
                        <Text>Updated Browser</Text>
                        <Text>8 mbps</Text>
                      </VStack>
                    </Center>
                  </Container>
                </Box>
              </VStack>
              <Center
                position={"relative"}
                marginTop={"-250px !important"}
                height={"70vh"}
                width={"full"}
                backgroundSize={"cover"}
                backgroundImage={"./footer.png"}
                color={"white"}
                paddingTop={"200px"}
                fontSize={"20px"}
              >
                <Container maxW="70vw">
                  <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    <GridItem w="100%">
                      <VStack alignItems={"flex-start"} spacing={"30px"}>
                        <VStack alignItems={"inherit"}>
                          <Heading>Say Hello</Heading>
                          <Text>Contact@everidea.id</Text>
                        </VStack>
                        <VStack alignItems={"inherit"}>
                          <Heading>Stop by</Heading>
                          <Text>
                            Jalan Karang Tinggal No.31 Bandung, Jawa Barat 40162
                          </Text>
                        </VStack>
                      </VStack>
                    </GridItem>
                    <GridItem w="100%">
                      <VStack>
                        <Heading>Get Social</Heading>
                        <Text>Instagram</Text>
                        <Text>Linkedin</Text>
                        <Text>Youtube</Text>
                        <Text>Medium</Text>
                      </VStack>
                    </GridItem>
                    <GridItem w="100%">
                      <VStack spacing={"20px"}>
                        <Image
                          width={"200px"}
                          src={"./Logo_EI.png"}
                          alt={"Logo_EI"}
                        />
                        <Image
                          width={"200px"}
                          src={"./Logo_Edu.png"}
                          alt={"Logo_Edu"}
                        />
                      </VStack>
                    </GridItem>
                  </Grid>
                </Container>
              </Center>
            </VStack>
          </Box>
        </Scrollbars>
      )}
    </AutoSizer>
  );
}

export default LandingPage;

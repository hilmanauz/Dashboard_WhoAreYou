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
  Stack,
  useMediaQuery,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
import React from "react";
import Scrollbars from "rc-scrollbars";
import AutoSizer from "react-virtualized-auto-sizer";
import { BiMinus } from "react-icons/bi";
import SignModal, { fontSize } from "./SignModal";
import Router from "next/router";
import { getCookie } from "cookies-next";
import useClient from "../engines/useClient";

const paddingContainer = { lg: "300px", md: "150px", sm: "100px" };

const widthContainer = { md: "2xl", lg: "80vw" };

export const size = { lg: "lg", md: "md", sm: "sm" };

const imageSize = { lg: "23px", md: "23px", sm: "23px", xs: "20px" };

const topTitle = { md: -14, lg: -16, sm: -12 };

const paddingTitle = { lg: "30px 150px", sm: "20px 30px", md: "30px 120px" };

const paddingContent = { lg: "150px", md: "100px", sm: "80px" };

function LandingPage() {
  const loginDisclosure = useDisclosure();
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const client = useClient();
  const dataLogin = client.getUserData();
  const validateToken = client.validateEntityToken();
  const EntityToken = getCookie("EntityToken");

  return (
    <AutoSizer>
      {({ height, width }) => (
        <Scrollbars style={{ height, width }}>
          <Box h="full" w="full" position="relative">
            <SignModal
              modalDisclosure={loginDisclosure}
              dataLogin={dataLogin}
            />
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
                <Box
                  position={"absolute"}
                  top={{ lg: "30px", md: "25px", sm: "20px" }}
                  right={{ lg: "30px", md: "25px", sm: "20px" }}
                  padding={"10px"}
                  bgColor={"#F9F3EA"}
                  borderRadius={"10px"}
                  boxShadow={
                    "0 5px 0 0 rgb(0 0 0 / 15%), 0 0 5px 0 rgb(0 0 0 / 14%)"
                  }
                >
                  <Button
                    size={fontSize}
                    width={"full"}
                    bgColor={"#BE9770"}
                    paddingX={{ md: "15px", sm: "20px" }}
                    paddingY={{ md: "25px", sm: "20px" }}
                    _hover={{ opacity: "0.8" }}
                    onClick={loginDisclosure.onOpen}
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
                        src="./icon.png"
                        alt="icon"
                        width={{ sm: "16px", md: "20px", lg: "22px" }}
                      />
                      <Text
                        size={size}
                        marginY={"auto !important"}
                        height={"full"}
                        lineHeight={"0"}
                      >
                        {!dataLogin.data?.data?.error ? "Sign out" : "Sign in"}
                      </Text>
                    </HStack>
                  </Button>
                </Box>
                <Box width={{ lg: "600px", md: "70vw", sm: "350px" }}>
                  <Image src={"./Logo.png"} alt={"logo"} objectFit={"cover"} />
                </Box>
                {!validateToken.data?.data?.error &&
                  !dataLogin.data?.data?.error &&
                  EntityToken &&
                  !loginDisclosure.isOpen && (
                    <Flex
                      marginTop={"50px"}
                      gap={"20px"}
                      flexDirection={{ sm: "column", md: "row" }}
                    >
                      <FormControl width={"auto"}>
                        <Flex
                          gap={"30px"}
                          flexDirection={{ sm: "column", md: "row" }}
                        >
                          <Box
                            padding={"10px"}
                            bgColor={"#F9F3EA"}
                            borderRadius={"10px"}
                            boxShadow={
                              "0 5px 0 0 rgb(0 0 0 / 15%), 0 0 5px 0 rgb(0 0 0 / 14%)"
                            }
                          >
                            <Button
                              size={fontSize}
                              width={"full"}
                              bgColor={"#BE9770"}
                              paddingX={"80px"}
                              paddingY={"30px"}
                              disabled
                              _hover={{ opacity: "0.8" }}
                              onClick={() =>
                                Router.push(
                                  "https://play.everidea.id/games/buildtest/thinkhalf/whoareyou/"
                                )
                              }
                              color={"white"}
                              fontSize={"22px"}
                              // marginTop={"-4px"}
                              boxShadow={"0 4px #815230"}
                              // _active={{
                              //   position: "relative",
                              //   top: "4px",
                              //   boxShadow: "none",
                              // }}
                            >
                              <HStack spacing={"10px"}>
                                <Image
                                  src="./Desktop_Icon.png"
                                  alt="Desktop_Icon"
                                />
                                <Heading
                                  size={fontSize}
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
                              size={fontSize}
                              width={"full"}
                              bgColor={"#BE9770"}
                              paddingX={"80px"}
                              paddingY={"30px"}
                              disabled
                              onClick={() =>
                                Router.push(
                                  "https://play.everidea.id/games/buildtest/thinkhalf/mobile/whoareyou/"
                                )
                              }
                              _hover={{ opacity: "0.8" }}
                              color={"white"}
                              fontSize={"22px"}
                              // marginTop={"-4px"}
                              boxShadow={"0 4px #815230"}
                              // _active={{
                              //   position: "relative",
                              //   top: "4px",
                              //   boxShadow: "none",
                              // }}
                            >
                              <HStack spacing={"10px"}>
                                <Image
                                  src="./Mobile_Icon.png"
                                  alt="Mobile_Icon"
                                />
                                <Heading
                                  size={fontSize}
                                  marginY={"auto !important"}
                                  height={"full"}
                                  lineHeight={"0"}
                                >
                                  Mobile
                                </Heading>
                              </HStack>
                            </Button>
                          </Box>
                        </Flex>
                        <FormHelperText
                          textAlign={"center"}
                          color={"white"}
                          fontSize={"md"}
                          fontWeight={"extrabold"}
                        >
                          <span style={{ fontSize: "25px" }}>&#9757;</span>{" "}
                          Under Maintenance
                        </FormHelperText>
                      </FormControl>
                      <Box
                        padding={"10px"}
                        height={"min-content"}
                        bgColor={"#F9F3EA"}
                        borderRadius={"10px"}
                        boxShadow={
                          "0 5px 0 0 rgb(0 0 0 / 15%), 0 0 5px 0 rgb(0 0 0 / 14%)"
                        }
                      >
                        <Button
                          size={size}
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
                              size={fontSize}
                              marginY={"auto !important"}
                              height={"full"}
                              lineHeight={"0"}
                            >
                              Dashboard
                            </Heading>
                          </HStack>
                        </Button>
                      </Box>
                    </Flex>
                  )}
              </Center>
              <VStack
                backgroundImage={"./Background.png"}
                backgroundSize={"contain"}
                position={"relative"}
                width={"full"}
                marginTop={"-20px !important"}
                paddingY={paddingContainer}
                spacing={{ lg: "200px", md: "150px", sm: "100px" }}
                textAlign={"center"}
              >
                <Container maxW={widthContainer}>
                  <Center
                    width={"full"}
                    height={{ lg: "80vh", md: "45vh", sm: "40vh" }}
                    borderRadius={"30px"}
                    bgColor={"#f9f3ea"}
                    boxShadow={
                      "0 20px 0 0 rgb(0 0 0 / 15%), 0 0 20px 0 rgb(0 0 0 / 14%)"
                    }
                    position={"relative"}
                  >
                    <iframe
                      style={{
                        height: "90%",
                        width: "95%",
                        position: "absolute",
                      }}
                      allow="autoplay; encrypted-media"
                      src={`https://www.youtube.com/embed/sD_Z5Go175c?controls=0&rel=0`}
                      allowFullScreen
                    />
                  </Center>
                </Container>
                <Box
                  width={"full"}
                  bgColor={"#f9f3ea"}
                  boxShadow={
                    "0 20px 0 0 rgb(0 0 0 / 15%), 0 0 20px 0 rgb(0 0 0 / 14%)"
                  }
                  position={"relative"}
                  paddingY={paddingContent}
                >
                  <Box
                    position={"absolute"}
                    top={topTitle}
                    left={0}
                    right={0}
                    textAlign={"center"}
                  >
                    <HStack
                      width={"fit-content"}
                      marginLeft={"auto"}
                      marginRight={"auto"}
                      borderRadius={"16px"}
                      padding={{ ...paddingTitle, sm: "20px 70px" }}
                      bgColor={"#BE9770"}
                      boxShadow={
                        "0 8px 0 0 rgb(0 0 0 / 15%), 0 0 8px 0 rgb(0 0 0 / 14%)"
                      }
                    >
                      <Text size={size} color={"white"}>
                        &#9670;
                      </Text>
                      <Heading
                        color={"white"}
                        paddingInline={"2vw"}
                        size={size}
                      >
                        About
                      </Heading>
                      <Text size={size} color={"white"}>
                        &#9670;
                      </Text>
                    </HStack>
                  </Box>
                  <Center width={"full"} alignSelf={"center"}>
                    <Container
                      maxW={widthContainer}
                      fontWeight={"extrabold"}
                      color={"#865A3A"}
                    >
                      <Text size={size}>
                        The first DISC assessment game and sensing perception
                        gap training in Indonesia
                      </Text>
                      <br />
                      <Text size={size}>
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
                  paddingY={paddingContent}
                  position={"relative"}
                >
                  <Box
                    position={"absolute"}
                    top={topTitle}
                    left={0}
                    right={0}
                    textAlign={"center"}
                  >
                    <HStack
                      width={"fit-content"}
                      marginLeft={"auto"}
                      marginRight={"auto"}
                      borderRadius={"16px"}
                      padding={paddingTitle}
                      bgColor={"#BE9770"}
                      boxShadow={
                        "0 8px 0 0 rgb(0 0 0 / 15%), 0 0 8px 0 rgb(0 0 0 / 14%)"
                      }
                    >
                      <Text size={size} color={"white"}>
                        &#9670;
                      </Text>
                      <Heading
                        color={"white"}
                        paddingInline={"2vw"}
                        size={size}
                      >
                        What is DISC ?
                      </Heading>
                      <Text size={size} color={"white"}>
                        &#9670;
                      </Text>
                    </HStack>
                  </Box>
                  <Container maxW={widthContainer}>
                    <VStack gap={"50px"} alignItems={"normal"}>
                      <Grid templateColumns="repeat(3, 1fr)" gap={10}>
                        <GridItem colSpan={1}>
                          <Center height={"full"}>
                            <Image src="./D.png" alt="D" />
                          </Center>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <VStack alignItems={"flex-start"}>
                            <Text size={size}>
                              <b>(D)ominance</b> cenderung untuk:
                            </Text>
                            <List spacing={2} textAlign={"left"}>
                              <ListItem>
                                <HStack>
                                  <ListIcon as={BiMinus} color="green.500" />
                                  <Text size={size}>
                                    Mengambil keputusan dengan cepat, malah
                                    kadang kecepetan
                                  </Text>
                                </HStack>
                              </ListItem>
                              <ListItem>
                                <HStack>
                                  <ListIcon as={BiMinus} color="green.500" />
                                  <Text size={size}>
                                    Senang mendapatkan tantangan, tapi keasikan
                                    sendiri
                                  </Text>
                                </HStack>
                              </ListItem>
                              <ListItem>
                                <HStack>
                                  <ListIcon as={BiMinus} color="green.500" />
                                  <Text size={size}>
                                    Senang menunjukan kelebihan anda, sampe
                                    orang lain bete
                                  </Text>
                                </HStack>
                              </ListItem>
                              <ListItem>
                                <HStack>
                                  <ListIcon as={BiMinus} color="green.500" />
                                  <Text size={size}>
                                    Jago debat, Gak ada kata kalah di kamus
                                  </Text>
                                </HStack>
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
                            <Text size={size}>
                              <b>(i)nfluence</b> cenderung untuk:
                            </Text>
                            <List spacing={2} textAlign={"left"}>
                              <ListItem>
                                <HStack>
                                  <ListIcon as={BiMinus} color="green.500" />
                                  <Text size={size}>
                                    Terbuka akan segala kemungkinan
                                  </Text>
                                </HStack>
                              </ListItem>
                              <ListItem>
                                <HStack>
                                  <ListIcon as={BiMinus} color="green.500" />
                                  <Text size={size}>
                                    Kurang detail dalam mengerjakan sesuatu
                                  </Text>
                                </HStack>
                              </ListItem>
                              <ListItem>
                                <HStack>
                                  <ListIcon as={BiMinus} color="green.500" />
                                  <Text size={size}>
                                    Senang apabila bisa mempengaruhi orang lain
                                  </Text>
                                </HStack>
                              </ListItem>
                              <ListItem>
                                <HStack>
                                  <ListIcon as={BiMinus} color="green.500" />
                                  <Text size={size}>
                                    mudah kecewa apabila menerima penolakan
                                  </Text>
                                </HStack>
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
                            <Text size={size}>
                              <b>(S)teadiness</b> cenderung untuk:
                            </Text>
                            <List spacing={2} textAlign={"left"}>
                              <ListItem>
                                <HStack>
                                  <ListIcon as={BiMinus} color="green.500" />
                                  <Text size={size}>
                                    Menjadi pendengar yang baik
                                  </Text>
                                </HStack>
                              </ListItem>
                              <ListItem>
                                <HStack>
                                  <ListIcon as={BiMinus} color="green.500" />
                                  <Text size={size}>Pekerja tim yang baik</Text>
                                </HStack>
                              </ListItem>
                              <ListItem>
                                <HStack>
                                  <ListIcon as={BiMinus} color="green.500" />
                                  <Text size={size}>Sensitif</Text>
                                </HStack>
                              </ListItem>
                              <ListItem>
                                <HStack>
                                  <ListIcon as={BiMinus} color="green.500" />
                                  <Text size={size}>
                                    Senang dengan kestabilan
                                  </Text>
                                </HStack>
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
                            <Text size={size}>
                              <b>(C)onscientiousness</b> cenderung untuk:
                            </Text>
                            <List spacing={2} textAlign={"left"}>
                              <ListItem>
                                <HStack>
                                  <ListIcon as={BiMinus} color="green.500" />
                                  <Text size={size}>
                                    Senang dengan sesuatu yang terstruktur
                                  </Text>
                                </HStack>
                              </ListItem>
                              <ListItem>
                                <HStack>
                                  <ListIcon as={BiMinus} color="green.500" />
                                  <Text size={size}>terlihat pefeksionis</Text>
                                </HStack>
                              </ListItem>
                              <ListItem>
                                <HStack>
                                  <ListIcon as={BiMinus} color="green.500" />
                                  <Text size={size}>
                                    Tidak menyukai sesuatu yang tidak jelas
                                  </Text>
                                </HStack>
                              </ListItem>
                              <ListItem>
                                <HStack>
                                  <ListIcon as={BiMinus} color="green.500" />
                                  <Text size={size}>
                                    Mengerjakan segala sesuatu nya sendiri
                                  </Text>
                                </HStack>
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
                  paddingY={{ lg: "150px", md: "100px", sm: "80px" }}
                >
                  <Box
                    position={"absolute"}
                    top={topTitle}
                    left={0}
                    right={0}
                    textAlign={"center"}
                  >
                    <HStack
                      width={"fit-content"}
                      marginLeft={"auto"}
                      marginRight={"auto"}
                      borderRadius={"16px"}
                      padding={paddingTitle}
                      bgColor={"#BE9770"}
                      boxShadow={
                        "0 8px 0 0 rgb(0 0 0 / 15%), 0 0 8px 0 rgb(0 0 0 / 14%)"
                      }
                    >
                      <Text size={size} color={"white"}>
                        &#9670;
                      </Text>
                      <Heading
                        color={"white"}
                        paddingInline={"2vw"}
                        size={size}
                      >
                        System Requirements
                      </Heading>
                      <Text size={size} color={"white"}>
                        &#9670;
                      </Text>
                    </HStack>
                  </Box>
                  <Container maxW={widthContainer}>
                    <Center>
                      <VStack width={"full"}>
                        <HStack width={"full"}>
                          <Box width={"30%"} />
                          <Heading size={{ ...size, sm: "xs" }} width={"35%"}>
                            Mobile
                          </Heading>
                          <Heading size={{ ...size, sm: "xs" }} width={"35%"}>
                            Desktop
                          </Heading>
                        </HStack>
                        <HStack width={"full"}>
                          <Text size={size} width={"30%"}>
                            CPU:
                          </Text>
                          <Text size={size} width={"35%"}>
                            Qualcomm® Snapdragon™ 662
                          </Text>
                          <Text size={size} width={"35%"}>
                            i3
                          </Text>
                        </HStack>
                        <HStack width={"full"}>
                          <Text size={size} width={"30%"}>
                            OS:
                          </Text>
                          <Text size={size} width={"35%"}>
                            Android 10
                          </Text>
                          <Text size={size} width={"35%"}>
                            Windows, linux, MacOS
                          </Text>
                        </HStack>
                        <HStack width={"full"}>
                          <Text size={size} width={"30%"}>
                            RAM:
                          </Text>
                          <Text size={size} width={"35%"}>
                            6 GB
                          </Text>
                          <Text size={size} width={"35%"}>
                            6 GB
                          </Text>
                        </HStack>
                        <HStack width={"full"}>
                          <Text size={size} width={"30%"}>
                            Resolution:
                          </Text>
                          <Text size={size} width={"35%"}>
                            1080x2340 {`(${6.53}")`}
                          </Text>
                          <Text size={size} width={"35%"}>
                            1280x1024
                          </Text>
                        </HStack>
                        <HStack width={"full"}>
                          <Text size={size} width={"30%"}>
                            Browser:
                          </Text>
                          <Text size={size} width={"35%"}>
                            Updated Browser
                          </Text>
                          <Text size={size} width={"35%"}>
                            Updated Browser
                          </Text>
                        </HStack>
                        <HStack width={"full"}>
                          <Text size={size} width={"30%"}>
                            Network:
                          </Text>
                          <Text size={size} width={"35%"}>
                            8 mbps
                          </Text>
                          <Text size={size} width={"35%"}>
                            8 mbps
                          </Text>
                        </HStack>
                      </VStack>
                    </Center>
                  </Container>
                </Box>
                <Box height={{ lg: "400px", sm: "400px", md: "550px" }} />
                <Center
                  position={"absolute"}
                  bottom={0}
                  height={{ lg: "800px", md: "650px", sm: "500px" }}
                  width={"full"}
                  backgroundSize={"cover"}
                  backgroundImage={"./footer.png"}
                  color={"white"}
                  paddingTop={{ lg: "200px", md: "150px", sm: "100px" }}
                >
                  <Container maxW={widthContainer} height={"full"}>
                    <VStack
                      height={"full"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                    >
                      <Grid
                        templateColumns={{
                          md: "repeat(3, 1fr)",
                          sm: "repeat(2, 1fr)",
                        }}
                        templateRows={{
                          md: "repeat(1, 1fr)",
                          sm: "repeat(2, 1fr)",
                        }}
                        gap={6}
                      >
                        <GridItem
                          w="100%"
                          rowSpan={{ md: 1, sm: 2 }}
                          colSpan={1}
                        >
                          <VStack
                            alignItems={"flex-start"}
                            textAlign={"start"}
                            spacing={"30px"}
                          >
                            <VStack alignItems={"inherit"}>
                              <Heading size={size}>Say Hello</Heading>
                              <Text size={size}>Contact@everidea.id</Text>
                            </VStack>
                            <VStack alignItems={"inherit"}>
                              <Heading size={size}>Stop by</Heading>
                              <Text size={size}>
                                Jalan Karang Tinggal No.31 Bandung, Jawa Barat
                                40162
                              </Text>
                            </VStack>
                          </VStack>
                        </GridItem>
                        <GridItem rowSpan={{ sm: 1, md: 2 }}>
                          <VStack>
                            <Heading size={size}>Get Social</Heading>
                            <Grid
                              templateColumns={{
                                md: "repeat(1, 1fr)",
                                sm: "repeat(2, 1fr)",
                              }}
                              templateRows={{
                                md: "repeat(4, 1fr)",
                                sm: "repeat(2, 1fr)",
                              }}
                              gap={2}
                            >
                              <GridItem w="100%">
                                <Text size={size}>Instagram</Text>
                              </GridItem>
                              <GridItem w="100%">
                                <Text size={size}>Linkedin</Text>
                              </GridItem>
                              <GridItem w="100%">
                                <Text size={size}>Youtube</Text>
                              </GridItem>
                              <GridItem w="100%">
                                <Text size={size}>Medium</Text>
                              </GridItem>
                            </Grid>
                          </VStack>
                        </GridItem>
                        <GridItem rowSpan={{ sm: 1, md: 2 }}>
                          <VStack spacing={"20px"}>
                            <Image
                              width={{ md: "200px", sm: "100px" }}
                              src={"./Logo_EI.png"}
                              alt={"Logo_EI"}
                            />
                            <Image
                              width={{ md: "200px", sm: "100px" }}
                              src={"./Logo_Edu.png"}
                              alt={"Logo_Edu"}
                            />
                          </VStack>
                        </GridItem>
                      </Grid>
                      <Center
                        height={{ lg: "75px", md: "50px", sm: "50px" }}
                        position={"absolute"}
                        bottom={0}
                      >
                        <Heading
                          fontSize={{ lg: "20px", md: "15px", sm: "15px" }}
                          textAlign={"center"}
                        >
                          &copy; Everidea All Right Reserved
                        </Heading>
                      </Center>
                    </VStack>
                  </Container>
                </Center>
              </VStack>
            </VStack>
          </Box>
        </Scrollbars>
      )}
    </AutoSizer>
  );
}

export default LandingPage;

import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  UseDisclosureReturn,
  VStack,
  Text,
  Link,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { deleteCookie, setCookie } from "cookies-next";
import Router from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { SWRResponse } from "swr";
import useClient from "../engines/useClient";
import ForgotPage from "./ForgotPage";
import { size } from "./LandingPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
export type LoginForm = {
  email: string;
  password: string;
};
export type RegisterForm = {
  nama: string;
  umur: number | null;
  jenis_kelamin: "laki-laki" | "perempuan";
  institusi: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const fontSize = { lg: "md", md: "sm", sm: "xs" };

function LoginModal({
  modalDisclosure,
  dataLogin,
}: {
  modalDisclosure: UseDisclosureReturn;
  dataLogin: SWRResponse<any, any>;
}) {
  const signUpDisclosure = useDisclosure();
  const forgotDisclosure = useDisclosure();
  const handleSignOut = React.useCallback(() => {
    deleteCookie("EntityId");
    deleteCookie("SessionTicket");
    deleteCookie("EntityToken");
    deleteCookie("PlayFabId");
    modalDisclosure.onClose();
  }, []);
  return (
    <Modal
      isOpen={modalDisclosure.isOpen}
      onClose={() => {
        modalDisclosure.onClose();
        signUpDisclosure.onClose();
        forgotDisclosure.onClose();
      }}
      isCentered
      size={"xl"}
    >
      <ModalOverlay />
      <ModalContent
        bgColor={"#F9F3EA !important"}
        boxShadow={"0 15px 0 0 rgb(0 0 0 / 15%), 0 0 15px 0 rgb(0 0 0 / 14%)"}
        position={"relative"}
        borderRadius={"12px"}
      >
        <Box
          position={"absolute"}
          top={{ md: -5, lg: "-25px", sm: -5 }}
          left={0}
          right={0}
          textAlign={"center"}
        >
          <HStack
            width={"fit-content"}
            marginLeft={"auto"}
            marginRight={"auto"}
            borderRadius={"10px"}
            paddingY={"10px"}
            paddingX={forgotDisclosure.isOpen ? "20px" : "90px"}
            bgColor={"#BE9770"}
            boxShadow={"0 8px 0 0 rgb(0 0 0 / 15%), 0 0 8px 0 rgb(0 0 0 / 14%)"}
          >
            <Text size={fontSize} style={{ color: "white" }}>
              &#9670;
            </Text>
            <Heading color={"white"} paddingInline={"2vw"} size={fontSize}>
              {signUpDisclosure.isOpen
                ? "Register"
                : forgotDisclosure.isOpen
                ? "Forgot Password ?"
                : !dataLogin.data?.data?.error
                ? "Sign out"
                : "Sign in"}
            </Heading>
            <Text size={fontSize} style={{ color: "white" }}>
              &#9670;
            </Text>
          </HStack>
        </Box>
        <ModalBody
          paddingX={{ lg: "70px", md: "60px", sm: "40px" }}
          paddingTop={"70px"}
          paddingBottom={"50px"}
        >
          {!dataLogin.data?.data?.error ? (
            <VStack gap={6}>
              <Text size={size} fontWeight={"bold"} color={"#815230"}>
                Sign out from your account?
              </Text>
              <HStack width={"full"} gap={4}>
                <Button
                  size={size}
                  width={"full"}
                  bgColor={"#BE9770"}
                  _hover={{ bgColor: "#E7D7C5" }}
                  onClick={modalDisclosure.onClose}
                  color={"white"}
                  fontSize={"22px"}
                  boxShadow={
                    "0 5px 0 0 rgb(0 0 0 / 15%), 0 0 5px 0 rgb(0 0 0 / 14%)"
                  }
                >
                  Cancel
                </Button>
                <Button
                  size={size}
                  width={"full"}
                  bgColor={"#BE9770"}
                  _hover={{ bgColor: "#E7D7C5" }}
                  onClick={handleSignOut}
                  color={"white"}
                  fontSize={"22px"}
                  boxShadow={
                    "0 5px 0 0 rgb(0 0 0 / 15%), 0 0 5px 0 rgb(0 0 0 / 14%)"
                  }
                >
                  Sign out
                </Button>
              </HStack>
            </VStack>
          ) : forgotDisclosure.isOpen ? (
            <ForgotPage forgotDisclosure={forgotDisclosure} />
          ) : (
            <>
              {signUpDisclosure.isOpen ? (
                <RegisterPage registerDisclosure={signUpDisclosure} />
              ) : (
                <LoginPage
                  modalDisclosure={modalDisclosure}
                  signUpDisclosure={signUpDisclosure}
                  forgotDisclosure={forgotDisclosure}
                />
              )}
            </>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;

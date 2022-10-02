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
import React from "react";
import { useForm } from "react-hook-form";
import useClient from "../engines/useClient";
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
}: {
  modalDisclosure: UseDisclosureReturn;
}) {
  const signUpDisclosure = useDisclosure();
  return (
    <Modal
      isOpen={modalDisclosure.isOpen}
      onClose={() => {
        modalDisclosure.onClose();
        signUpDisclosure.onClose();
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
            paddingX={"90px"}
            bgColor={"#BE9770"}
            boxShadow={"0 8px 0 0 rgb(0 0 0 / 15%), 0 0 8px 0 rgb(0 0 0 / 14%)"}
          >
            <Text size={fontSize} style={{ color: "white" }}>
              &#9670;
            </Text>
            <Heading color={"white"} paddingInline={"2vw"} size={fontSize}>
              {signUpDisclosure.isOpen ? "Register" : "Sign in"}
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
          {signUpDisclosure.isOpen ? (
            <RegisterPage registerDisclosure={signUpDisclosure} />
          ) : (
            <LoginPage
              modalDisclosure={modalDisclosure}
              signUpDisclosure={signUpDisclosure}
            />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;

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
  username: string;
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
          top={{ md: -5, lg: "-25px" }}
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
            <span style={{ color: "white" }}>&#9670;</span>
            <Heading color={"white"} paddingInline={"2vw"}>
              {signUpDisclosure.isOpen ? "Register" : "Sign in"}
            </Heading>
            <span style={{ color: "white" }}>&#9670;</span>
          </HStack>
        </Box>
        <ModalBody paddingX={"70px"} paddingTop={"70px"} paddingBottom={"50px"}>
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

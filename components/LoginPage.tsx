import {
  VStack,
  Input,
  Button,
  useToast,
  Text,
  UseDisclosureReturn,
  Link,
  SlideFade,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { deleteCookie, setCookie } from "cookies-next";
import React from "react";
import { useForm } from "react-hook-form";
import useClient from "../engines/useClient";
import { size } from "./LandingPage";
import { fontSize, LoginForm } from "./SignModal";

function LoginPage({
  modalDisclosure,
  signUpDisclosure,
  forgotDisclosure,
}: {
  modalDisclosure: UseDisclosureReturn;
  forgotDisclosure: UseDisclosureReturn;
  signUpDisclosure: UseDisclosureReturn;
}) {
  const formRef = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const errors = formRef.formState.errors;
  const [isLoading, setIsLoading] = React.useState(false);
  const client = useClient();
  const toast = useToast();
  const handleMoveToRegisterPage = React.useCallback(() => {
    signUpDisclosure.onOpen();
  }, [signUpDisclosure]);

  const onSubmit = React.useCallback(
    async (data: LoginForm) => {
      setIsLoading(true);
      try {
        const dataLogin = await client.login(data);
        if (dataLogin.data) {
          const entityToken = await client.getEntityToken();
          modalDisclosure.onClose();
          deleteCookie("PlayFabId");
          deleteCookie("SessionTicket");
          setCookie("EntityToken", entityToken.data.EntityToken);
          setCookie("SessionTicket", dataLogin.data.SessionTicket);
          setCookie("PlayFabId", dataLogin.data.PlayFabId);
          setCookie("EntityId", dataLogin.data.EntityToken.Entity.Id);
        }
        toast({
          title: "Login successfull",
          status: "success",
          duration: 2000,
        });
      } catch (error: any) {
        toast.closeAll();
        setIsLoading(false);
        toast({
          title: error?.response.data?.errorMessage,
          status: "error",
          duration: 1000,
        });
      }
    },
    [client, toast, modalDisclosure]
  );
  return (
    <SlideFade in={true} offsetX="20px" offsetY={0}>
      <VStack spacing={"30px"} alignItems={"normal"}>
        <form onSubmit={formRef.handleSubmit(onSubmit)}>
          <VStack spacing={"30px"}>
            <Input
              {...formRef.register("email", {
                required: "E-mail is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              backgroundColor={"#E7D7C5"}
              _focusVisible={{
                borderColor: "#969382",
                boxShadow: "0 0 0 1px #969382",
              }}
              color={"#815230"}
              placeholder={"E-mail"}
              size={"lg"}
            />
            {errors.email && (
              <Text
                fontSize={"0.875rem"}
                marginTop={"0.5rem"}
                lineHeight={"normal"}
                color={"red"}
              >
                {errors.email.message}
              </Text>
            )}
            <Input
              {...formRef.register("password")}
              backgroundColor={"#E7D7C5"}
              type={"password"}
              _focusVisible={{
                borderColor: "#969382",
                boxShadow: "0 0 0 1px #969382",
              }}
              placeholder={"Password"}
              color={"#815230"}
              size={"lg"}
            />
            <VStack width={"full"} gap={2}>
              <Button
                type={"submit"}
                size={"lg"}
                width={"full"}
                bgColor={"#BE9770"}
                _hover={{ bgColor: "#E7D7C5" }}
                color={"white"}
                fontSize={"22px"}
                isLoading={isLoading}
                boxShadow={
                  "0 5px 0 0 rgb(0 0 0 / 15%), 0 0 5px 0 rgb(0 0 0 / 14%)"
                }
              >
                Sign in
              </Button>
              <HStack width={"100%"}>
                <Divider
                  width={"100%"}
                  borderBottomWidth={"3px"}
                  borderColor={"#BE9770"}
                />
                <Text size={size} color={"#815230"}>
                  Or
                </Text>
                <Divider
                  width={"100%"}
                  borderBottomWidth={"3px"}
                  borderColor={"#BE9770"}
                />
              </HStack>
              <Button
                size={"lg"}
                width={"full"}
                bgColor={"#BE9770"}
                _hover={{ bgColor: "#E7D7C5" }}
                color={"white"}
                fontSize={"22px"}
                onClick={forgotDisclosure.onOpen}
                boxShadow={
                  "0 5px 0 0 rgb(0 0 0 / 15%), 0 0 5px 0 rgb(0 0 0 / 14%)"
                }
              >
                Forgot Password
              </Button>
            </VStack>
          </VStack>
        </form>
        <Text color={"#815230"} letterSpacing={"0.4px"} size={fontSize}>
          By signing up, you are agree to our communication and usage terms.{" "}
          {`Don't`} have accounts?{" "}
          <Link onClick={handleMoveToRegisterPage} color={"green.500"}>
            Register here
          </Link>
        </Text>
      </VStack>
    </SlideFade>
  );
}

export default LoginPage;

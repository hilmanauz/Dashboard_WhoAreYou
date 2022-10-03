import {
  Image,
  UseDisclosureReturn,
  VStack,
  Text,
  Button,
  Input,
  Center,
  Stack,
  Flex,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import useClient from "../engines/useClient";
import { fontSize } from "./SignModal";

function ForgotPage({
  forgotDisclosure,
}: {
  forgotDisclosure: UseDisclosureReturn;
}) {
  const formRef = useForm({
    defaultValues: {
      email: "",
    },
  });
  const client = useClient();
  const toast = useToast();
  const errors = formRef.formState.errors;
  const [isLoading, setIsLoading] = React.useState(false);
  const onSubmit = React.useCallback(async (data: { email: string }) => {
    setIsLoading(true);
    try {
      await client.forgot(data.email);
      forgotDisclosure.onClose();
      toast({
        title:
          "An account recovery email has been sent to the player's email address.",
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
  }, []);
  return (
    <form onSubmit={formRef.handleSubmit(onSubmit)}>
      <VStack width={"full"} alignItems={"normal"} gap={2}>
        <Center>
          <Image src={"./forgot.png"} alt={"forgot"} />
        </Center>
        <Flex direction={"column"}>
          <Text size={"md"} fontWeight={"bold"} color={"#815230"}>
            Confirm your e-mail
          </Text>
          <Text size={"sm"} fontWeight={"normal"} color={"#815230"}>
            Please enter the e-mail address associated with your account. We
            will send you an e-mail with a link to reset your password.
          </Text>
        </Flex>
        <Input
          {...formRef.register("email", {
            required: "E-mail is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          backgroundColor={"#E7D7C5"}
          type={"email"}
          _focusVisible={{
            borderColor: "#969382",
            boxShadow: "0 0 0 1px #969382",
          }}
          placeholder={"E-mail"}
          color={"#815230"}
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
        <Button
          type={"submit"}
          size={"lg"}
          width={"full"}
          isLoading={isLoading}
          bgColor={"#BE9770"}
          _hover={{ bgColor: "#E7D7C5" }}
          color={"white"}
          fontSize={"22px"}
          boxShadow={"0 5px 0 0 rgb(0 0 0 / 15%), 0 0 5px 0 rgb(0 0 0 / 14%)"}
        >
          Send
        </Button>
      </VStack>
    </form>
  );
}

export default ForgotPage;

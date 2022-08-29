import {
  Center,
  SlideFade,
  VStack,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Button,
  useToast,
  Box,
  FormErrorMessage,
  Text,
  Link,
  UseDisclosureReturn,
} from "@chakra-ui/react";
import { getCookie, deleteCookie } from "cookies-next";
import _ from "lodash";
import Router from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import useClient from "../engines/useClient";
import CustomSelect, { SelectOption } from "./CustomSelect";

export type FormDefinition = {
  umur: number | null;
  jenis_kelamin: "laki-laki" | "perempuan";
  NIP: number | null;
  nama: string;
  institusi: string;
  kota: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
  if (
    (evt.which != 8 && evt.which != 0 && evt.which < 37) ||
    (evt.which > 40 && evt.which < 48) ||
    evt.which > 57
  ) {
    evt.preventDefault();
  }
};

function RegisterPage({
  registerDisclosure,
}: {
  registerDisclosure: UseDisclosureReturn;
}) {
  const formRef = useForm<FormDefinition>({
    defaultValues: {
      umur: null,
      jenis_kelamin: "laki-laki",
      NIP: null,
      nama: "",
      institusi: "",
      kota: "",
      username: "",
      password: "",
      email: "",
      confirmPassword: "",
    },
  });
  const errors = formRef.formState.errors;
  const [isLoading, setIsLoading] = React.useState(false);
  const client = useClient();
  const toast = useToast();
  const SessionTicket = getCookie("SessionTicket") as string;
  const PlayFabId = getCookie("PlayFabId");
  const formData = formRef.watch();
  const handleToLogin = React.useCallback(() => {
    registerDisclosure.onClose();
  }, [registerDisclosure]);
  const handleChangeGender = React.useCallback(
    (data: SelectOption) => {
      formRef.setValue("jenis_kelamin", data.value);
    },
    [formRef]
  );
  const onSubmit = React.useCallback(
    async (data: FormDefinition) => {
      setIsLoading(true);
      try {
        const dataRegister = await client.register({
          email: data.email,
          password: data.password,
          username: data.username,
        });
        await client.updatePlayerData(
          {
            PlayFabId: dataRegister.data.PlayFabId,
            Data: {
              DPercentage: "",
              IPercentage: "",
              SPercentage: "",
              CPercentage: "",
              Stage1Grade: "",
              Stage1GradeInfo: "",
            },
            Permission: "Private",
          },
          dataRegister.data.SessionTicket || ""
        );
        await client.updatePlayerData(
          {
            PlayFabId: PlayFabId,
            Data: {
              PlayerName: data.nama,
              PlayerAge: data.umur,
              PlayerGender: data.jenis_kelamin,
              PlayerInstitution: data.institusi,
              PlayerCity: data.kota,
              PlayerNip: data.NIP,
            },
            Permission: "Private",
          },
          dataRegister.data.SessionTicket || ""
        );
        toast({
          title: "Your information data has been updated successfully",
          status: "success",
          duration: 2000,
        });
        registerDisclosure.onClose();
        formRef.reset({});
      } catch (error: any) {
        toast.closeAll();
        setIsLoading(false);
        toast({
          title: error.response.data.errorMessage,
          status: "error",
          duration: 1000,
        });
      }
    },
    [client, PlayFabId, toast, registerDisclosure, formRef]
  );
  return (
    <VStack spacing={"30px"} alignItems={"normal"}>
      <form onSubmit={formRef.handleSubmit(onSubmit)}>
        <SlideFade in={true} offsetX="20px" offsetY={0}>
          <VStack width={"inherit"} spacing={7}>
            <FormControl>
              <Input
                placeholder="Nama Lengkap"
                flex={1}
                backgroundColor={"#E7D7C5"}
                _focusVisible={{
                  borderColor: "#969382",
                  boxShadow: "0 0 0 1px #969382",
                }}
                color={"#8C603D"}
                size={"lg"}
                {...formRef.register("nama")}
              />
            </FormControl>
            <HStack width={"full"}>
              <FormControl width={"50%"}>
                <Input
                  placeholder="Umur"
                  flex={1}
                  backgroundColor={"#E7D7C5"}
                  _focusVisible={{
                    borderColor: "#969382",
                    boxShadow: "0 0 0 1px #969382",
                  }}
                  color={"#8C603D"}
                  size={"lg"}
                  type={"number"}
                  onKeyDown={handleKeyDown}
                  {...formRef.register("umur")}
                />
              </FormControl>
              <FormControl width={"50%"}>
                <CustomSelect
                  placeholder="Jenis Kelamin"
                  options={[
                    { label: "Laki-laki", value: "laki-laki" },
                    { label: "Perempuan", value: "perempuan" },
                  ]}
                  value={{
                    label: _.upperFirst(formData.jenis_kelamin),
                    value: formData.jenis_kelamin,
                  }}
                  onChange={handleChangeGender}
                  style={{ flex: 1 }}
                />
              </FormControl>
            </HStack>
            <FormControl>
              <Input
                flex={1}
                placeholder={"Institusi"}
                backgroundColor={"#E7D7C5"}
                _focusVisible={{
                  borderColor: "#969382",
                  boxShadow: "0 0 0 1px #969382",
                }}
                color={"#8C603D"}
                size={"lg"}
                {...formRef.register("institusi")}
              />
            </FormControl>
            <FormControl>
              <Input
                flex={1}
                placeholder={"Username"}
                backgroundColor={"#E7D7C5"}
                _focusVisible={{
                  borderColor: "#969382",
                  boxShadow: "0 0 0 1px #969382",
                }}
                color={"#8C603D"}
                size={"lg"}
                {...formRef.register("username", {
                  required: "Username is required",
                })}
              />
              {errors.username && (
                <Text
                  fontSize={"0.875rem"}
                  marginTop={"0.5rem"}
                  lineHeight={"normal"}
                  color={"red"}
                >
                  {errors.username.message}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <Input
                flex={1}
                placeholder={"E-mail"}
                backgroundColor={"#E7D7C5"}
                _focusVisible={{
                  borderColor: "#969382",
                  boxShadow: "0 0 0 1px #969382",
                }}
                color={"#8C603D"}
                size={"lg"}
                {...formRef.register("email", {
                  required: "E-mail is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
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
            </FormControl>
            <FormControl>
              <Input
                flex={1}
                placeholder={"Password"}
                backgroundColor={"#E7D7C5"}
                _focusVisible={{
                  borderColor: "#969382",
                  boxShadow: "0 0 0 1px #969382",
                }}
                color={"#8C603D"}
                size={"lg"}
                {...formRef.register("password", {
                  required: "You must specify a password",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },
                })}
                type={"password"}
              />
              {errors.password && (
                <Text
                  fontSize={"0.875rem"}
                  marginTop={"0.5rem"}
                  lineHeight={"normal"}
                  color={"red"}
                >
                  {errors.password.message}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <Input
                flex={1}
                placeholder={"Confirm Password"}
                backgroundColor={"#E7D7C5"}
                _focusVisible={{
                  borderColor: "#969382",
                  boxShadow: "0 0 0 1px #969382",
                }}
                color={"#8C603D"}
                size={"lg"}
                {...formRef.register("confirmPassword", {
                  validate: (value) =>
                    value === formData.password || "The passwords do not match",
                })}
                type={"password"}
              />
              {errors.confirmPassword?.message && (
                <Text
                  fontSize={"0.875rem"}
                  marginTop={"0.5rem"}
                  lineHeight={"normal"}
                  color={"red"}
                >
                  {errors.confirmPassword?.message}
                </Text>
              )}
            </FormControl>
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
              Register
            </Button>
          </VStack>
        </SlideFade>
      </form>
      <Text color={"#815230"} letterSpacing={"0.4px"}>
        Already have account?{" "}
        <Link onClick={handleToLogin} color={"green.500"}>
          Click here to sign in
        </Link>
      </Text>
    </VStack>
  );
}

export default RegisterPage;

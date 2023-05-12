import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCookies } from "react-cookie";

import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

import LogoImage from "@/components/CMS/LogoImage";
import RequiredInput from "@/components/CMS/Form/RequiredInput";
import AlertStatus from "@/components/CMS/AlertStatus";

type LoginProps = {
  email: string;
  password: string;
};

export default function Login() {
  const [apiError, setApiError] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const [cookies, setCookie] = useCookies(["token"]);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginProps>();

  useEffect(() => {
    if (cookies.token) {
      setIsAuth(true);
      setTimeout(() => {
        router.push("/admin");
      }, 200);
    }
  }, []);

  function login(data: LoginProps) {
    fetch(process.env.NEXT_PUBLIC_JWT_URL || "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: data.email, password: data.password }),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((response) =>
            setCookie("token", response.token, {
              path: "/",
              sameSite: true,
            })
          );
          setAuthError(false);
          setTimeout(() => router.push("/admin"), 100);
        } else {
          setAuthError(true);
        }
      })
      .catch(() => setApiError(true));
  }

  const onSubmit: SubmitHandler<LoginProps> = (data) => {
    setApiError(false);
    login(data);
  };

  return (
    <Box background="green.900" h="100vh">
      <Center h="80vh" flexDirection="column" gap="6">
        <LogoImage pathRedirect="" />
        <Heading color="#FFF" size="md">
          Kianda
        </Heading>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            background: "#FFF",
            padding: "2rem",
            border: "1px solid #1A240F",
            borderRadius: "6px",
            maxWidth: "400px",
          }}
        >
          <Flex flexDir="column" gap="4" mb="5" alignItems="center">
            {apiError ? (
              <AlertStatus
                type="error"
                title="Ocorreu um erro!"
                description="Entre em contato com o suporte."
              />
            ) : null}
            {authError ? (
              <AlertStatus
                type="error"
                description="Email ou senha incorretos"
              />
            ) : null}
            <FormControl isInvalid={!!errors.email}>
              <FormLabel htmlFor="email">
                Email <RequiredInput />
              </FormLabel>

              <Input
                id="email"
                type="text"
                disabled={isAuth}
                {...register("email", {
                  required: "Esse Campo é obrigatório",
                })}
                focusBorderColor="green.900"
              />

              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password}>
              <FormLabel htmlFor="password">
                Senha <RequiredInput />
              </FormLabel>

              <Input
                id="password"
                type="password"
                disabled={isAuth}
                {...register("password", {
                  required: "Esse Campo é obrigatório",
                })}
                focusBorderColor="green.800"
              />

              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex flexDir="column" gap="3">
            <Button
              colorScheme="green"
              variant="solid"
              type="submit"
              isLoading={isSubmitting || isAuth}
              width="100%"
            >
              Entrar
            </Button>
            <Button
              colorScheme="green"
              variant="outline"
              type="submit"
              width="100%"
              onClick={() => router.push("/register")}
            >
              Registra-se
            </Button>
          </Flex>
        </form>
      </Center>
    </Box>
  );
}

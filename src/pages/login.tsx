import {
  Avatar,
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
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCookies } from "react-cookie";

type LoginProps = {
  email: string;
  password: string;
};

export default function Login() {
  const [, setCookie] = useCookies(["token"]);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

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
          response
            .json()
            .then((response) => setCookie("token", response.token));
          router.push("/admin");
        }
      })
      .catch((error) => console.log(error));
  }

  const onSubmit: SubmitHandler<LoginProps> = (data) => {
    login(data);
  };

  return (
    <Box background="green.900" h="100vh">
      <Center h="80vh" flexDirection="column" gap="6">
        <Avatar size="xl" name="Tornar-se Negro" src="/img/logo.png" />
        <Heading color="#FFF" size="md">
          Torna-se Negro - Entrar
        </Heading>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            background: "#FFF",
            padding: "2rem",
            border: "1px solid #1A240F",
            borderRadius: "6px",
          }}
        >
          <Flex flexDir="column" gap="4" mb="5" alignItems="center">
            <FormControl isInvalid={!!errors.email} isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>

              <Input
                id="email"
                type="text"
                {...register("email", {
                  required: "Esse Campo é obrigatório",
                })}
                focusBorderColor="green.900"
              />

              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password} isRequired>
              <FormLabel htmlFor="password">Senha</FormLabel>

              <Input
                id="password"
                type="password"
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
              width="100%"
            >
              Entrar
            </Button>
            <Button
              colorScheme="green"
              variant="outline"
              type="submit"
              width="100%"
            >
              Registra-se
            </Button>
          </Flex>
        </form>
      </Center>
    </Box>
  );
}

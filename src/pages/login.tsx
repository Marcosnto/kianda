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

type LoginProps = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const onSubmit: SubmitHandler<LoginProps> = (data) => {
    console.log(data);
    router.push("/admin");
  };

  return (
    <Box background="orange.900" h="100vh">
      <Center h="80vh" flexDirection="column" gap="6">
        <Avatar size="xl" name="Tornar-se Negro" src="/img/logo.png" />
        <Heading color="#FFFF" size="md">
          Torna-se Negro - Entrar
        </Heading>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            background: "#FCEEE9",
            padding: "2rem",
            border: "1px solid #863613",
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
              />

              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
          <Button
            colorScheme="teal"
            variant="outline"
            type="submit"
            width="100%"
          >
            Entrar
          </Button>
        </form>
      </Center>
    </Box>
  );
}

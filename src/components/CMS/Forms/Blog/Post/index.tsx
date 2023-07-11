import { useForm, SubmitHandler } from "react-hook-form";

import ComponentTitle from "@/components/CMS/Title";
import { Article } from "@/helpers/CMS/types/blog";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";

export default function Post() {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Article>();

  function post(data: Article) {
    console.log(data.image[0]);
    fetch(process.env.NEXT_PUBLIC_BASE_URL + "/article" || "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        author: data.author,
        description: data.description,
        content: data.content,
        slug: data.slug,
        files: data.image[0],
        imageDescription: data.imageDescription,
        imageSub: data.imageSub,
      }),
    }).then((response) => {
      console.log(response);
      if (response.ok) {
        toast({
          title: `Artigo publicado com sucesso!`,
          position: "top",
          status: "success",
          isClosable: true,
        });
        reset();
      } else {
        toast({
          title: `Ocorreu um erro no servidor`,
          position: "top",
          status: "error",
          isClosable: true,
        });
      }
    });
  }

  const onSubmit: SubmitHandler<Article> = (data) => post(data);

  return (
    <>
      <ComponentTitle title="Novo Artigo" type="h1" size="lg" />
      <form typeof="form" onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" gap="8">
          <Stack spacing={8} direction="row">
            <FormControl isInvalid={!!errors.title} isRequired>
              <FormLabel htmlFor="title">Título</FormLabel>

              <Input
                id="title"
                type="text"
                {...register("title", {
                  required: "Esse Campo é obrigatório",
                })}
                focusBorderColor="green.800"
              />

              <FormErrorMessage>
                {errors.title && errors.title.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.author} isRequired>
              <FormLabel htmlFor="author">Author</FormLabel>

              <Input
                id="author"
                type="text"
                {...register("author", {
                  required: "Esse Campo é obrigatório",
                })}
                focusBorderColor="green.800"
              />

              <FormErrorMessage>
                {errors.author && errors.author.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>

          <Stack spacing={8} direction="row">
            <FormControl isInvalid={!!errors.description} isRequired>
              <FormLabel htmlFor="description">Resumo</FormLabel>

              <Input
                id="description"
                type="text"
                {...register("description", {
                  required: "Esse Campo é obrigatório",
                })}
                focusBorderColor="green.800"
              />

              <FormErrorMessage>
                {errors.description && errors.description.message}
              </FormErrorMessage>
            </FormControl>

            {/* <FormControl isInvalid={!!errors.slug}>
              <FormLabel htmlFor="slug">Slug</FormLabel>

              <Input
                id="slug"
                type="text"
                isDisabled
                {...register("slug")}
                focusBorderColor="green.800"
              />

              <FormErrorMessage>
                {errors.slug && errors.slug.message}
              </FormErrorMessage>
            </FormControl> */}
          </Stack>

          <FormControl isInvalid={!!errors.image}>
            <FormLabel htmlFor="image">Imagem</FormLabel>

            <Input
              id="image"
              type="file"
              {...register("image")}
              variant="flushed"
              focusBorderColor="green.800"
            />

            <FormErrorMessage>
              {errors.image && errors.image.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.imageDescription} isRequired>
            <FormLabel htmlFor="imageDescription">
              Descrição da Imagem
            </FormLabel>

            <Input
              id="imageDescription"
              type="text"
              {...register("imageDescription")}
              focusBorderColor="green.800"
            />

            <FormErrorMessage>
              {errors.imageDescription && errors.imageDescription.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.imageSub} isRequired>
            <FormLabel htmlFor="imageSub">Legenda da Imagem</FormLabel>

            <Input
              id="imageSub"
              type="text"
              {...register("imageSub")}
              focusBorderColor="green.800"
            />

            <FormErrorMessage>
              {errors.imageSub && errors.imageSub.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.content} isRequired>
            <FormLabel htmlFor="content">Conteúdo</FormLabel>

            <Textarea
              id="content"
              size="lg"
              {...register("content", {
                required: "Esse Campo é obrigatório",
              })}
              focusBorderColor="green.800"
            />

            <FormErrorMessage>
              {errors.content && errors.content.message}
            </FormErrorMessage>
          </FormControl>

          <Stack
            direction="row"
            spacing={4}
            align="center"
            justifyContent="space-around"
            mt="6"
            mb="8"
          >
            <Button colorScheme="green" variant="outline" type="reset">
              Cancelar
            </Button>
            <Button colorScheme="green" variant="solid" type="submit">
              Salvar
            </Button>
          </Stack>
        </Box>
      </form>
    </>
  );
}

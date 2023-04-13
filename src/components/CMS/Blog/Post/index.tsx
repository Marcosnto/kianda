import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

type Article = {
  title: string;
  author: string;
  description: string;
  content: string;
  slug: string;
  image: string;
  imageDescription: string;
  imageSub: string;
};

export default function Post() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Article>();

  const onSubmit: SubmitHandler<Article> = (data) => console.log(data);

  return (
    <>
      <Heading textAlign="center" mb="10" as="h1" size="xl">
        Novo Artigo
      </Heading>

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
              />

              <FormErrorMessage>
                {errors.author && errors.author.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>

          <Stack spacing={8} direction="row">
            <FormControl isInvalid={!!errors.description} isRequired>
              <FormLabel htmlFor="description">Descrição</FormLabel>

              <Input
                id="description"
                type="text"
                {...register("description", {
                  required: "Esse Campo é obrigatório",
                })}
              />

              <FormErrorMessage>
                {errors.description && errors.description.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.slug}>
              <FormLabel htmlFor="slug">Slug</FormLabel>

              <Input id="slug" type="text" isDisabled {...register("slug")} />

              <FormErrorMessage>
                {errors.slug && errors.slug.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>

          <FormControl isInvalid={!!errors.image}>
            <FormLabel htmlFor="image">Imagem</FormLabel>

            <Input
              id="image"
              type="file"
              {...register("image")}
              variant="flushed"
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
            />

            <FormErrorMessage>
              {errors.imageDescription && errors.imageDescription.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.imageSub} isRequired>
            <FormLabel htmlFor="imageSub">Legenda da Imagem</FormLabel>

            <Input id="imageSub" type="text" {...register("imageSub")} />

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
            <Button colorScheme="teal" variant="solid" type="reset">
              Cancelar
            </Button>
            <Button colorScheme="teal" variant="outline" type="submit">
              Salvar
            </Button>
          </Stack>
        </Box>
      </form>
    </>
  );
}

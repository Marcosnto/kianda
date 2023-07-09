import { ComponentTitleProps } from "@/helpers/CMS/types/components";
import { Center, Divider, Heading } from "@chakra-ui/react";

export default function ComponentTitle({
  title,
  type,
  size = "lg",
}: ComponentTitleProps) {
  return (
    <>
      <Center mt="5" mb="10" flexDirection="column" gap="4">
        <Heading as={type} size={size}>
          {title}
        </Heading>
        <Divider mb="5" />
      </Center>
    </>
  );
}

import { Skeleton, Stack } from "@chakra-ui/react";

export default function ArticleSkeleton() {
  return (
    <Stack>
      <Skeleton height="15px" />
      <Skeleton height="15px" />
      <Skeleton height="15px" />
      <Skeleton height="15px" />
      <Skeleton height="15px" />
    </Stack>
  );
}

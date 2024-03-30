import { Box, ScrollArea, Skeleton, Text, Title } from "@mantine/core";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Merva | App" },
    { name: "description", content: "Merva" },
  ];
};


export default function Index() {
  return (
    <Box>
      <Title>App</Title>
      <Text>
        This is the app shell.
      </Text>
    </Box>
  );
}
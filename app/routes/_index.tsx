import { Box, Button, Text, Title } from "@mantine/core";
import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Merva" },
    { name: "description", content: "Merva" },
  ];
};

export default function Index() {
  return (
    <Box>
      <Title>Merva, Remix Variant</Title>
      <Text>
        This is a Remix variant of Merva.
      </Text>

      <Button component={NavLink} to="/app/">App</Button>
    </Box>
  );
}

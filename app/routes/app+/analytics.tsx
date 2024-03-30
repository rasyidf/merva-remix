import { AppShell, Box, Burger, Group, ScrollArea, Skeleton, Text, Title } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import type { MetaFunction } from "@remix-run/node";
import { MainNavbar } from "~/components/groups/navbar/navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "Merva | App" },
    { name: "description", content: "Merva" },
  ];
};

export default function Index() { 
  return (
    <>
      Analytics
    </>
  );
}

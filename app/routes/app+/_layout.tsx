import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from "@remix-run/react";
import { MainNavbar } from "~/components/groups/navbar/navbar";


export default function Layout() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 80, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
      layout="alt"
    >
      <AppShell.Header style={{
        borderBottom: 'none'
      }}>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <MainNavbar />

      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

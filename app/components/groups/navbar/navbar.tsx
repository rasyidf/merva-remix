import { ReactNode, useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem, AppShellSection, AppShell } from '@mantine/core';

import classes from './navbar.module.css';
import { Link, NavLink } from '@remix-run/react';

interface NavbarLinkProps {
  icon: ReactNode;
  label: string;
  link: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, link, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton component={Link} to={link} className={classes.link} data-active={active || undefined}>
        {/* <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} /> */}
        {Icon}
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: "🏠", link: '/app/', label: 'Home' },
  { icon: "📦", link: '/app/dashboard', label: 'Dashboard' },
  { icon: "📊", link: '/app/analytics', label: 'Analytics' },
];

export function MainNavbar() {
  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={false}
    />
  ));

  return (
    < >
      <AppShell.Section>
        <Center>
          <img src="/favicon.svg" alt="Merva" style={{ width: rem(40), height: rem(40) }} />
        </Center>
      </AppShell.Section>
      <AppShell.Section grow className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </AppShell.Section>

      <AppShell.Section>
        <Stack justify="center" gap={0}>
          <NavbarLink icon={"⚙️"} label="Security" link={''} />
        </Stack>

      </AppShell.Section>
    </ >
  );
}
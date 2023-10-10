import { useState } from 'react';
import { LogoDabena, LogoDabenaTextoBlanco, LogoDabenaTextoAzul } from '../../assets';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

import {
  AppShell,
  Burger,
  Group,
  UnstyledButton,
  useMantineColorScheme,
  rem,
  Image,
} from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';

import classes from './MobileNavbar.module.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [opened, { toggle }] = useDisclosure();
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const navigate = useNavigate();

  const [modeToggle, setModeToggle] = useState<boolean>();

  const setLightMode = () => {
    setModeToggle((prev) => !prev);
    setColorScheme('light');
  };

  const setDarkMode = () => {
    setModeToggle((prev) => !prev);
    setColorScheme('dark');
  };

  const decideMode = () => {
    console.log("antes", colorScheme);
    if (modeToggle) {
      setLightMode();
    } else {
      setDarkMode();
    }
    console.log("despues", colorScheme);
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding={{ default: 'md', sm: 'xs' }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

          <Group justify="space-between" style={{ flex: 1 }}>
            <Image
              src={LogoDabena}
              visibleFrom="sm"
              height={45}
              style={{
                cursor: 'pointer',
              }}
              onClick={() => {
                navigate('/');
              }}
            />
            {colorScheme === 'light' ? (
              <Image
                src={LogoDabenaTextoAzul}
                hiddenFrom="sm"
                height={45}
                ml={'auto'}
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => {
                  navigate('/');
                }}
              />
            ) : (
              <Image
                src={LogoDabenaTextoBlanco}
                hiddenFrom="sm"
                height={45}
                ml={'auto'}
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => {
                  navigate('/');
                }}
              />
            )}

            <Group ml="xl" gap={0} visibleFrom="sm" justify="center" align="center">
              <UnstyledButton className={classes.control}>Inicio</UnstyledButton>
              <UnstyledButton className={classes.control}>Blog</UnstyledButton>
              <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
              <UnstyledButton className={classes.control}>Support</UnstyledButton>
              <UnstyledButton className={classes.control} onClick={decideMode}>
                {modeToggle ? (
                  <IconSun style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
                  ) : (
                  <IconMoonStars style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                )}
              </UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton className={classes.control}>Home</UnstyledButton>
        <UnstyledButton className={classes.control}>Blog</UnstyledButton>
        <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
        <UnstyledButton className={classes.control}>Support</UnstyledButton>
        <UnstyledButton className={classes.control} onClick={decideMode}>
          {modeToggle ? (
            <IconMoonStars style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          ) : (
            <IconSun style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
          )}
        </UnstyledButton>
      </AppShell.Navbar>
    </AppShell>
  );
}

export default Navbar;

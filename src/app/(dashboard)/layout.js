"use client";

import {
  AppShell,
  Burger,
  Group,
  TextInput,
  Text,
  ScrollArea,
  Avatar,
  UnstyledButton,
  Flex,
  Menu,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  TbBell,
  TbChevronDownFilled,
  TbCopyright,
  TbLogout,
  TbMoon,
  TbSettings,
  TbUser,
} from "react-icons/tb";
import { PiSignOutBold } from "react-icons/pi";
// import { IconSearch, IconChevronRight } from "@tabler/icons-react";
import { SidebarNavigation } from "../components/SidebarNavigation";

export default function DashboardLayout({ children }) {
  // mobile broser mode
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  // desktop browser mode
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      layout="alt"
      header={{ height: 70 }}
      navbar={{
        width: 260,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
      styles={{
        main: { backgroundColor: "#f8f9fa" },
        header: { borderBottom: "1px solid #e9ecef" },
        navbar: {
          borderRight: "1px solid #e9ecef",
          // Adds a smooth transition animation when expanding/collapsing
          transition: "width 200ms ease, min-width 200ms ease",
        },
      }}
    >
      {/* Top Header Navbar */}
      <AppShell.Header>
        <Group h="100%" px="md" position="apart" justify="space-between">
          <Group h="100%" px="md" justify="flex-start">
            <Group>
              {/* Mobile Burger Menu opens drawer style */}
              <Burger opened={mobileOpened} onClick={toggleMobile} size="sm" />

              {/* Desktop Burger Menu expands/collapses sidebar */}
              {/* <Burger opened={desktopOpened} onClick={toggleDesktop} size="sm" /> */}
            </Group>

            <TextInput
              placeholder="Search products, customers, invoices..."
              // leftSection={<IconSearch size={16} stroke={1.5} />}
              w={400}
              radius="md"
              visibleFrom="xs"
            />
            <Group visibleFrom="sm" />
          </Group>
          <Group h="100%" px="md" justify="flex-end">
            <TbMoon size={18} />
            <TbBell size={18} />
            <Avatar src={null} alt="John Smith" color="green" radius="xl">
              JS
            </Avatar>
            <Flex direction="column" align="flex-start" justify="center">
              <Text fw={500} c="dimmed" size="sm">
                John Smith
              </Text>
              <Text fw={500} c="dimmed" size="sm">
                Admin
              </Text>
            </Flex>

            <Menu
              shadow="md"
              width={200}
              transitionProps={{
                transition: "slide-down",
                duration: 400,
                timingFunction: "ease",
              }}
              className="m-0 p-0"
            >
              <Menu.Target>
                <Button variant="transparent" color="gray">
                  <TbChevronDownFilled size={18} />
                </Button>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item>
                  <Flex direction="column" align="flex-start" justify="center">
                    <Text fw={500} c="dimmed" size="sm">
                      John Smith
                    </Text>
                    <Text fw={500} c="dimmed" size="sm">
                      john@seysallure.com
                    </Text>
                  </Flex>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item leftSection={<TbUser size={14} />}>
                  My Profile
                </Menu.Item>
                <Menu.Item leftSection={<TbSettings size={14} />}>
                  Settings
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item leftSection={<TbLogout size={14} />}>
                  Sign Out
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>

      {/* Left Navigation Sidebar */}
      <AppShell.Navbar p="md">
        <AppShell.Section grow component={ScrollArea}>
          <SidebarNavigation />
        </AppShell.Section>

        {/* Profile Element Footer */}
        <AppShell.Section
          style={{ borderTop: "1px solid #e9ecef", paddingTop: "12px" }}
        >
          <UnstyledButton style={{ width: "100%" }}>
            <Group>
              <Avatar src={null} alt="John Smith" color="green" radius="xl">
                JS
              </Avatar>
              <div style={{ flex: 1 }}>
                <Text size="sm" fw={500}>
                  John Smith
                </Text>
                <Text size="xs" c="dimmed">
                  Administrator
                </Text>
              </div>
              {/* <IconChevronRight size={14} stroke={1.5} /> */}
            </Group>
          </UnstyledButton>
        </AppShell.Section>
      </AppShell.Navbar>

      {/* Dynamic Subpage Render Viewport */}
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer>
        <div className="w-full">
          <p>
            Copyright <TbCopyright size="12" /> 2026 Invenza All rights
            reserved.
          </p>
        </div>
      </AppShell.Footer>
    </AppShell>
  );
}

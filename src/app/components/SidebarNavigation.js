"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Divider, Flex, Image, NavLink, Text } from "@mantine/core";
import {
  TbAlignBoxBottomCenter,
  TbBuildingStore,
  TbChartBar,
  TbCreditCard,
  TbCube,
  TbCurrencyDollar,
  TbFileInvoice,
  TbPlus,
  TbSettings,
  TbShoppingCart,
  TbTruck,
  TbUser,
  TbUsers,
  TbWallet,
} from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";

export function SidebarNavigation() {
  const pathname = usePathname();

  return (
    <Box>
      <Flex justify="center" align="center" direction="row" mih={30}>
        {/* <Image src="./seys-allure.png" alt="Sey's Allure" /> */}
        <Text fw={700} size="lg" c="green.7">
          Sey&apos;s Allure
        </Text>
      </Flex>
      <Divider my="md" />
      <Text size="xs" fw={700} c="dimmed" mb={8} px="xs">
        MAIN
      </Text>
      <NavLink
        component={Link}
        href="/"
        label="Dashboard"
        leftSection={<RxDashboard size={18} />}
        active={pathname === "/"}
        color="green"
        variant="light"
        radius="lg"
      />

      <Text size="xs" fw={700} c="dimmed" my={12} px="xs">
        INVENTORY
      </Text>
      <NavLink
        component={Link}
        href="/inventory"
        label="Inventory"
        leftSection={<TbCube size={18} />}
        rightSection={<TbPlus size={18} />}
        active={pathname.startsWith("/inventory")}
        color="green"
        variant="light"
        radius="md"
      />
      <NavLink
        component={Link}
        href="/purchases"
        label="Purchases"
        leftSection={<TbShoppingCart size={18} />}
        rightSection={<TbPlus size={18} />}
        active={pathname.startsWith("/purchases")}
        color="green"
        variant="light"
        radius="md"
        className="mb-2 font-light"
      />
      <NavLink
        component={Link}
        href="/sales"
        label="Sales"
        leftSection={<TbCurrencyDollar size={18} />}
        rightSection={<TbPlus size={18} />}
        active={pathname.startsWith("/sales")}
        color="green"
        variant="light"
        radius="md"
        className="mb-2 font-light text-gray-500"
      />
      <NavLink
        component={Link}
        href="/invoices"
        label="Invoices"
        leftSection={<TbFileInvoice size={18} />}
        active={pathname.startsWith("/invoices")}
        color="green"
        variant="light"
        radius="md"
      />

      <Text size="xs" fw={700} c="dimmed" my={12} px="xs">
        CRM
      </Text>
      <NavLink
        component={Link}
        href="/customers"
        label="Customers"
        leftSection={<TbUsers size={18} />}
        active={pathname.startsWith("/customers")}
        color="green"
        variant="light"
        radius="md"
      />
      <NavLink
        component={Link}
        href="/suppliers"
        label="Suppliers"
        leftSection={<TbTruck size={18} />}
        active={pathname.startsWith("/suppliers")}
        color="green"
        variant="light"
        radius="md"
      />
      <NavLink
        component={Link}
        href="/expenses"
        label="Expenses"
        leftSection={<TbCreditCard size={18} />}
        active={pathname.startsWith("/expenses")}
        color="green"
        variant="light"
        radius="md"
      />

      <Text size="xs" fw={700} c="dimmed" my={12} px="xs">
        ANALYTICS
      </Text>
      <NavLink
        component={Link}
        href="/reports"
        label="Reports"
        leftSection={<TbChartBar size={18} />}
        rightSection={<TbPlus size={18} />}
        active={pathname.startsWith("/reports")}
        color="green"
        variant="light"
        radius="md"
      />
      <Text size="xs" fw={700} c="dimmed" my={12} px="xs">
        ADMIN
      </Text>
      <NavLink
        component={Link}
        href="/users"
        label="Users"
        leftSection={<TbUser size={18} />}
        rightSection={<TbPlus size={18} />}
        active={pathname.startsWith("/users")}
        color="green"
        variant="light"
        radius="md"
      />
      <NavLink
        component={Link}
        href="/settings"
        label="Settings"
        leftSection={<TbSettings size={18} />}
        rightSection={<TbPlus size={18} />}
        active={pathname.startsWith("/settings")}
        color="green"
        variant="light"
        radius="md"
      />
    </Box>
  );
}

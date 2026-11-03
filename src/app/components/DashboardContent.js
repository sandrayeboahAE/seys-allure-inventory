"use client";
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Group,
  Image,
  NavLink,
  Progress,
  Text,
} from "@mantine/core";
import { LineChart } from "@mantine/charts";
import {
  TbArrowNarrowUp,
  TbCalendar,
  TbCurrencyDollar,
  TbDownload,
  TbHome2,
  TbWaveSawTool,
} from "react-icons/tb";

export default function DashboardContent() {
  const icon = <TbArrowNarrowUp size={12} />;

  const data = [
    { month: "January", amount: 35000 },
    { month: "February", amount: 42000 },
    { month: "March", amount: 38500 },
    { month: "April", amount: 48000 },
    { month: "May", amount: 45000 },
    { month: "June", amount: 55000 },
    { month: "July", amount: 51000 },
    { month: "August", amount: 62000 },
    { month: "September", amount: 58000 },
    { month: "October", amount: 68000 },
    { month: "November", amount: 64000 },
    { month: "December", amount: 75000 },
  ];

  return (
    <Box width="100%" p="md" className="w-10/12 dashboard-content">
      <Flex
        justify="space-between"
        align="center"
        className="w-full h-40 bg-linear-to-r from-green-500 from-10% via-green-700 via-30% to-green-800 to-90% border-0 rounded-2xl shadow-2xl p-6 mb-6"
      >
        <Flex
          justify="flex-start"
          align="center"
          gap="md"
          className="welcome-banner-content"
        >
          <div className="border-gray-300 border rounded-md p-1 flex items-center justify-center">
            <TbHome2 size={28} color="white" />
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold">
              Welcome back, John!
            </h1>
            <p className="text-white text-md">
              Here&apos;s what&apos;s happening with your inventory today. You
              have{" "}
              <Badge color="green" size="md" radius="sm">
                5 items
              </Badge>
              <br /> running low on stock.
            </p>
          </div>
        </Flex>
        <Group
          spacing="md"
          justify="flex-end"
          className="welcome-banner-actions"
        >
          <Button
            leftSection={<TbCalendar size={14} />}
            variant="outline"
            color="white"
            className=" text-green-700 hover:bg-green-100"
          >
            Month to Date
          </Button>
          <Button
            leftSection={<TbWaveSawTool size={14} />}
            variant="outline"
            color="white"
            className=" text-green-700 hover:bg-green-100"
          >
            Year to Date
          </Button>
          <Button
            leftSection={<TbDownload size={14} />}
            variant="default"
            className="bg-white text-green-700 hover:bg-green-100"
          >
            Export
          </Button>
        </Group>
      </Flex>

      {/* data cards */}
      <Flex
        justify="space-between"
        align="center"
        gap="md"
        className="w-full h-48"
      >
        <Flex
          direction="column"
          align="flex-start"
          justify="center"
          className="w-1/4 h-44 bg-white border-0 rounded-2xl shadow-2xl p-6 mb-6"
        >
          <div className="flex justify-between align-middle">
            <div>
              <Badge color="green" size="lg" radius="md">
                <TbCurrencyDollar size={18} />
              </Badge>
            </div>
            <div>
              <Badge color="green" size="lg" radius="md" leftSection={icon}>
                82%
              </Badge>
            </div>
          </div>
          <div>
            <p>786</p>
            <p>TOTAL SALES</p>
          </div>
          <div>
            <Progress color="green" value={50} striped animated />
          </div>
        </Flex>
        <Flex
          direction="column"
          align="flex-start"
          justify="center"
          className="w-1/4 h-44 bg-white border-0 rounded-2xl shadow-2xl p-6 mb-6"
        >
          <div className="flex justify-between align-middle">
            <div>
              <Badge color="green" size="lg" radius="md">
                <TbCurrencyDollar size={18} />
              </Badge>
            </div>
            <div>
              <Badge color="green" size="lg" radius="md" leftSection={icon}>
                82%
              </Badge>
            </div>
          </div>
          <div>
            <p>786</p>
            <p>TOTAL SALES</p>
          </div>
          <div>
            <Progress color="green" value={50} striped animated />
          </div>
        </Flex>

        <Flex
          direction="column"
          align="flex-start"
          justify="center"
          className="w-1/4 h-44 bg-white border-0 rounded-2xl shadow-2xl p-6 mb-6"
        >
          <div className="flex justify-between align-middle">
            <div>
              <Badge color="green" size="lg" radius="md">
                <TbCurrencyDollar size={18} />
              </Badge>
            </div>
            <div>
              <Badge color="green" size="lg" radius="md" leftSection={icon}>
                82%
              </Badge>
            </div>
          </div>
          <div>
            <p>786</p>
            <p>TOTAL SALES</p>
          </div>
          <div>
            <Progress color="green" value={50} striped animated />
          </div>
        </Flex>

        <Flex
          direction="column"
          align="flex-start"
          justify="center"
          className="w-1/4 h-44 bg-white border-0 rounded-2xl shadow-2xl p-6 mb-6"
        >
          <div className="flex justify-between align-middle">
            <div>
              <Badge color="green" size="lg" radius="md">
                <TbCurrencyDollar size={18} />
              </Badge>
            </div>
            <div>
              <Badge color="green" size="lg" radius="md" leftSection={icon}>
                82%
              </Badge>
            </div>
          </div>
          <div>
            <p>786</p>
            <p>TOTAL SALES</p>
          </div>
          <div>
            <Progress color="green" value={50} striped animated />
          </div>
        </Flex>
      </Flex>

      <Flex
        justify="space-between"
        align="center"
        className="w-full  my-5"
        gap="lg"
      >
        <div className="w-3/5 h-96 border border-gray-300 p-5 shadow-xl rounded-xl">
          <LineChart
            h={350}
            data={data}
            series={[{ name: "amount", label: "monthly amount" }]}
            dataKey="date"
            type="gradient"
            gradientStops={[
              { offset: 0, color: "red.6" },
              { offset: 20, color: "orange.6" },
              { offset: 40, color: "yellow.5" },
              { offset: 70, color: "lime.5" },
              { offset: 80, color: "cyan.5" },
              { offset: 100, color: "blue.5" },
            ]}
            strokeWidth={5}
            curveType="natural"
            yAxisProps={{ domain: [37000, 75000] }}
            valueFormatter={(value) => `${value}$`}
          />
        </div>
        <div className="w-2/5 h-96 border border-gray-300 p-5 shadow-xl rounded-xl"></div>
      </Flex>
      <Flex
        justify="space-between"
        align="center"
        className="w-full  my-5"
        gap="lg"
      >
        <div className="w-1/3 h-64 border border-gray-300 p-5 shadow-xl rounded-xl"></div>
        <div className="w-1/3 h-64 border border-gray-300 p-5 shadow-xl rounded-xl"></div>
        <div className="w-1/3 h-64 border border-gray-300 p-5 shadow-xl rounded-xl"></div>
      </Flex>
      <Flex
        ustify="space-between"
        align="center"
        className="w-full  my-5"
        gap="lg"
      >
        <div className="w-3/5 h-96 border border-gray-300 p-5 shadow-xl rounded-xl"></div>
        <div className="w-2/5 h-96 border border-gray-300 p-5 shadow-xl rounded-xl"></div>
      </Flex>
      <div className="w-full h-96 border border-gray-300 p-5 shadow-xl rounded-xl my-5"></div>
      <div className="w-full h-96 border border-gray-300 p-5 shadow-xl rounded-xl my-5"></div>
    </Box>
  );
}

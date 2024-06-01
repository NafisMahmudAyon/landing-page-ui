'use client'

import {
  Block,
  Icon,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TabsPanel,
  Tabs,
  TabsNav,
  Text,
  Badge
} from "@/app/src";
import RightSideBar from "@/components/RightSideBar";
import CodeSnippet from "@/components/CodeSnippet";

const PageClient = () => {
  const defaultBadgeContent = `
import { Badge } from "landing-page-ui"

const App = () => {
  return (
    <Badge />
  );
}

export default App;
	`;
  const badgeWithMaxContent = `
import { Badge, Icon } from "landing-page-ui"

const App = () => {
  return (
    <Badge badgeValue={30} maxCount={20} >
		<Icon
			icon="fa-cart-shopping"
			iconLibrary="font-awesome"
			iconStyles="text-2xl"
		/>
	</Badge>
  );
}

export default App;
	`;
  const badgeInDifferentPosition = `
import { Badge, Block, Icon } from "landing-page-ui"

const App = () => {
  return (
    <Block styles="flex gap-8">
		<Badge badgeValue={5} position="top right">
			<Icon
				icon="fa-cart-shopping"
				iconLibrary="font-awesome"
				iconStyles="text-2xl"
			/>
		</Badge>
		<Badge badgeValue={5} position="top left">
			<Icon
				icon="fa-cart-shopping"
				iconLibrary="font-awesome"
				iconStyles="text-2xl"
			/>
		</Badge>
		<Badge badgeValue={5} position="bottom right">
			<Icon
				icon="fa-cart-shopping"
				iconLibrary="font-awesome"
				iconStyles="text-2xl"
			/>
		</Badge>
		<Badge badgeValue={5} position="bottom left">
			<Icon
				icon="fa-cart-shopping"
				iconLibrary="font-awesome"
				iconStyles="text-2xl"
			/>
		</Badge>
	</Block>
  );
}

export default App;
	`;

  const avatarProps = [
    {
      name: "badgeValue",
      type: "number",
      description: "The badgeValue rendered within the badge.",
      defaultValue: "0",
    },
    {
      name: "maxCount",
      type: "number",
      description: "Max count to show.",
      defaultValue: "-",
    },
    {
      name: "position",
      type: "string",
      description: "Where to show the Badge.",
      defaultValue: "top right",
    },
    {
      name: "children",
      type: "node",
      description: "Child components and badgeValue to be placed within it.",
      defaultValue: "-",
    },
    {
      name: "style",
      type: "string",
      description: "Any CSS className to style the Badge.",
      defaultValue: "-",
    },
    {
      name: "badgeStyle",
      type: "string",
      description: "Any CSS className to style the Badge badgeValue.",
      defaultValue: "-",
    },
  ];
  return (
    <Block tagName={"div"} styles="scroll-smooth md:w-[65%] lg:w-[73%] pb-10">
      <Block>
        <Text tagName={"h2"} styles=" text-3xl mb-2 font-medium ">
          Badge
        </Text>
        <Text tagName={"p"} styles="">
          The{" "}
          <Text tagName={"span"} styles="code  ">
            Badge
          </Text>{" "}
          component shows a small badge on its child.
        </Text>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="default-badge"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center ">
            Default Badge
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#default-badge"
              iconStyles="mx-3 hidden dark:bg-gray-800 group-hover:inline-block p-1 rounded-md shadow-md text-sm bg-gray-200"
            />
          </Text>
          <Tabs
            active={1}
            orientation="horizontal"
            navWrapStyles="text-sm"
            panelWrapStyles=" mt-2 shadow-md rounded-md  "
            styles="w-full">
            <TabsNav
              showButton={false}
              styles=" flex justify-between font-semibold text-gray-800/50 dark:text-gray-200/50  py-1 px-1"
              tabAreaStyles="flex gap-3"
              activeTabStyles="bg-gray-800 !text-gray-200 dark:bg-gray-200 dark:!text-gray-200 shadow-md">
              <Tab
                value={1}
                styles=" px-4 py-1 bg-gray-200 rounded-sm dark:bg-gray-800 ">
                Preview
              </Tab>
              <Tab
                value={2}
                styles=" px-4 py-1 bg-gray-200 rounded-sm dark:bg-gray-800">
                Code
              </Tab>
            </TabsNav>
            <TabsPanel
              value={1}
              styles="px-4 py-2 bg-gray-200 dark:bg-gray-800 border-[1px] border-white/50 rounded-lg">
              <Block styles="flex gap-4 my-4">
                <Badge />
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={defaultBadgeContent}
              />
            </TabsPanel>
          </Tabs>
        </Block>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="badge-with-max-count"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center ">
            Badge with Max Count
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#badge-with-max-count"
              iconStyles="mx-3 hidden dark:bg-gray-800 group-hover:inline-block p-1 rounded-md shadow-md text-sm bg-gray-200"
            />
          </Text>
          <Tabs
            active={1}
            orientation="horizontal"
            navWrapStyles="text-sm"
            panelWrapStyles=" mt-2 shadow-md rounded-md  "
            styles="w-full">
            <TabsNav
              showButton={false}
              styles=" flex justify-between font-semibold text-gray-800/50 dark:text-gray-200/50  py-1 px-1"
              tabAreaStyles="flex gap-3"
              activeTabStyles="bg-gray-800 !text-gray-200 dark:bg-gray-200 dark:!text-gray-200 shadow-md">
              <Tab
                value={1}
                styles=" px-4 py-1 bg-gray-200 rounded-sm dark:bg-gray-800 ">
                Preview
              </Tab>
              <Tab
                value={2}
                styles=" px-4 py-1 bg-gray-200 rounded-sm dark:bg-gray-800">
                Code
              </Tab>
            </TabsNav>
            <TabsPanel
              value={1}
              styles="px-4 py-2 bg-gray-200 dark:bg-gray-800 border-[1px] border-white/50 rounded-lg">
              <Block styles="flex gap-4 my-4">
                <Badge badgeValue={30} maxCount={20}>
                  <Icon
                    icon="fa-cart-shopping"
                    iconLibrary="font-awesome"
                    iconStyles="text-2xl"
                  />
                </Badge>
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={badgeWithMaxContent}
              />
            </TabsPanel>
          </Tabs>
        </Block>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="badge-in-different-position"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center ">
            Badge in Different Position
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#badge-in-different-position"
              iconStyles="mx-3 hidden dark:bg-gray-800 group-hover:inline-block p-1 rounded-md shadow-md text-sm bg-gray-200"
            />
          </Text>
          <Tabs
            active={1}
            orientation="horizontal"
            navWrapStyles="text-sm"
            panelWrapStyles=" mt-2 shadow-md rounded-md  "
            styles="w-full">
            <TabsNav
              showButton={false}
              styles=" flex justify-between font-semibold text-gray-800/50 dark:text-gray-200/50  py-1 px-1"
              tabAreaStyles="flex gap-3"
              activeTabStyles="bg-gray-800 !text-gray-200 dark:bg-gray-200 dark:!text-gray-200 shadow-md">
              <Tab
                value={1}
                styles=" px-4 py-1 bg-gray-200 rounded-sm dark:bg-gray-800 ">
                Preview
              </Tab>
              <Tab
                value={2}
                styles=" px-4 py-1 bg-gray-200 rounded-sm dark:bg-gray-800">
                Code
              </Tab>
            </TabsNav>
            <TabsPanel
              value={1}
              styles="px-4 py-2 bg-gray-200 dark:bg-gray-800 border-[1px] border-white/50 rounded-lg">
              <Block styles="flex gap-4 my-4">
                <Block styles="flex gap-8">
                  <Badge badgeValue={5} position="top right">
                    <Icon
                      icon="fa-cart-shopping"
                      iconLibrary="font-awesome"
                      iconStyles="text-2xl"
                    />
                  </Badge>
                  <Badge badgeValue={5} position="top left">
                    <Icon
                      icon="fa-cart-shopping"
                      iconLibrary="font-awesome"
                      iconStyles="text-2xl"
                    />
                  </Badge>
                  <Badge badgeValue={5} position="bottom right">
                    <Icon
                      icon="fa-cart-shopping"
                      iconLibrary="font-awesome"
                      iconStyles="text-2xl"
                    />
                  </Badge>
                  <Badge badgeValue={5} position="bottom left">
                    <Icon
                      icon="fa-cart-shopping"
                      iconLibrary="font-awesome"
                      iconStyles="text-2xl"
                    />
                  </Badge>
                </Block>
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={badgeInDifferentPosition}
              />
            </TabsPanel>
          </Tabs>
        </Block>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="props"
            styles="text-2xl pt-[62px] !font-medium group flex items-center ">
            Props
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#props"
              iconStyles="mx-3 hidden dark:bg-gray-800 group-hover:inline-block p-1 rounded-md shadow-md text-sm bg-gray-200"
            />
          </Text>
          <Block styles="my-6">
            <Text tagName="p" styles="mb-5">
              Explore the available props for the{" "}
              <span className="code">Badge</span> component
            </Text>
            <Block styles="overflow-x-auto">
              <Table variant={1}>
                <TableHead variant={1}>
                  <TableRow styles="!bg-gray-800" variant={false}>
                    <TableCell
                      header={true}
                      variant={1}
                      styles="dark:text-gray-200">
                      Prop
                    </TableCell>
                    <TableCell
                      header={true}
                      variant={1}
                      styles="dark:text-gray-200">
                      Type
                    </TableCell>
                    <TableCell
                      header={true}
                      variant={1}
                      styles="dark:text-gray-200">
                      Default
                    </TableCell>
                    <TableCell
                      header={true}
                      variant={1}
                      styles="dark:text-gray-200">
                      Description
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody variant={1}>
                  {avatarProps.map((props, index) => {
                    return (
                      <TableRow
                        key={index}
                        variant={1}
                        styles="odd:dark:bg-gray-700 even:dark:bg-gray-800">
                        <TableCell
                          variant={1}
                          header={true}
                          styles="dark:!text-gray-200">
                          {props.name}
                        </TableCell>
                        <TableCell variant={1} styles="dark:text-gray-200">
                          {props.type}
                        </TableCell>
                        <TableCell variant={1} styles="dark:text-gray-200">
                          {props.defaultValue}
                        </TableCell>
                        <TableCell variant={1} styles="dark:text-gray-200">
                          {props.description}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Block>
          </Block>
        </Block>
        <RightSideBar
          data={
            [
              {
                id: "#default-badge",
                title: "Default Badge"
              },
              {
                id: "#badge-with-max-count",
                title: "Badge with Max Count"
              },
              {
                id: "#badge-in-different-position",
                title: "Badge in Different Position"
              },
              {
                id: "#props",
                title: "Props"
              }
            ]
          } />
      </Block>
    </Block>
  );
};

export default PageClient;
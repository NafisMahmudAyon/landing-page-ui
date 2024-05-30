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
  Tabs,
  TabsNav,
  TabsPanel,
  Text,
  Flex, 
  FlexItem
} from "@/app/src";
import RightSideBar from "@/components/RightSideBar";
import CodeSnippet from "@/components/CodeSnippet";

const page = () => {
  // const getRandomColor = () => {
  // 	const letters = "0123456789ABCDEF";
  // 	let color = "#";
  // 	for (let i = 0; i < 6; i++) {
  // 		color += letters[Math.floor(Math.random() * 16)];
  // 	}
  // 	return color;
  // };
  const flexContent = Array.from({ length: 5 }, (_, index) => ({
    id: `${index + 1}`,
  }));
  const defaultFlexContent = `
import { Flex, FlexItem } from "landing-page-ui"

const App = () => {
	const flexContent = Array.from({ length: 5 }, (_, index) => ({
		id: \`\${index+1}\`,
	}));
  return (
    <Flex styles="w-full">
      {flexContent.map((item, index) => (
        <FlexItem
          key={index}
          styles="min-h-36 flex flex-1 items-center justify-center border border-gray-600">
          {item.id}
        </FlexItem>
      ))}
    </Flex>
  );
}

export default App;
	`;
  const defaultFlexWithLinkContent = `
import { Flex, FlexItem } from "landing-page-ui"

const App = () => {
	const flexContent = Array.from({ length: 5 }, (_, index) => ({
		id: \`\${index+1}\`,
	}));
  return (
    <Flex styles="w-full">
      {flexContent.map((item, index) => (
        <FlexItem
          key={index}
          styles="min-h-36 flex flex-1 items-center justify-center border border-gray-600"
          isLink={true}
          linkTo="#flex-item-with-link"
          target="_self">
          {item.id}
        </FlexItem>
      ))}
    </Flex>
  );
}

export default App;
	`;
  const flexProps = [
    {
      name: "tagName",
      type: "string",
      description: "HTML tag name.",
      defaultValue: "div",
    },
    {
      name: "style",
      type: "string",
      description: "Any CSS className to style the Flex.",
      defaultValue: "-",
    },
    {
      name: "children",
      type: "node",
      description: "Child components and content to be placed within it.",
      defaultValue: "-",
    },
    // {
    // 	name: "variant",
    // 	type: "number",
    // 	description: "Variant of the accordion",
    // 	defaultValue: '"1"',
    // },
  ];
  const flexItemProps = [
    {
      name: "tagName",
      type: "string",
      description: "HTML tag name.",
      defaultValue: "div",
    },
    {
      name: "isLink",
      type: "boolean",
      description: "Is the text linkable?",
      defaultValue: "-",
    },
    {
      name: "linkTo",
      type: "string",
      description: "URL or link.",
      defaultValue: "-",
    },
    {
      name: "target",
      type: "string",
      description:
        "Specifies where to open the linked document when the link is clicked.",
      defaultValue: "_self",
    },
    {
      name: "style",
      type: "string",
      description: "Any CSS className to style the Flex.",
      defaultValue: "-",
    },
    {
      name: "children",
      type: "node",
      description: "Child components and content to be placed within it.",
      defaultValue: "-",
    },
    // {
    // 	name: "variant",
    // 	type: "number",
    // 	description: "Variant of the accordion",
    // 	defaultValue: '"1"',
    // },
  ];
  return (
    <Block tagName={"div"} styles="scroll-smooth md:w-[65%] lg:w-[73%] pb-10">
      <Block>
        <Text tagName={"h2"} styles=" text-3xl mb-2 font-medium ">
          Flex
        </Text>
        <Text tagName={"p"} styles="">
          The{" "}
          <Text tagName={"span"} styles="code  ">
            Flex
          </Text>{" "}
          component enables you to display content in a flex format.
        </Text>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="default-flex"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center capitalize ">
            Default Flex
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#default-flex"
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
                <Flex styles="w-full">
                  {flexContent.map((item, index) => (
                    <FlexItem
                      key={index}
                      styles={`min-h-36 flex-1 flex items-center justify-center border border-gray-600`}>
                      {item.id}
                    </FlexItem>
                  ))}
                </Flex>
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={defaultFlexContent}
              />
            </TabsPanel>
          </Tabs>
        </Block>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="flex-item-with-link"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center ">
            Flex Item With link
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#flex-item-with-link"
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
                <Flex styles="w-full">
                  {flexContent.map((item, index) => (
                    <FlexItem
                      key={index}
                      styles={`min-h-36 flex flex-1 items-center justify-center border border-gray-600`}
                      isLink={true}
                      linkTo="#"
                      target="_self">
                      {item.id}
                    </FlexItem>
                  ))}
                </Flex>
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={defaultFlexWithLinkContent}
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
              <span className="code">Flex</span> component
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
                  {flexProps.map((props, index) => {
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
            <Text tagName="p" styles="my-5">
              Explore the available props for the{" "}
              <span className="code">FlexItem</span> component
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
                  {flexItemProps.map((props, index) => {
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
      </Block>
      <RightSideBar data={
        [
          {
            id: "#default-flex",
            title: "Default Flex",
          },
          {
            id: "#flex-item-with-link",
            title: "Flex Item With Link",
          },
          {
            id: "#props",
            title: "Props",
          }
        ]
      } />
    </Block>
  );
};

export default page;

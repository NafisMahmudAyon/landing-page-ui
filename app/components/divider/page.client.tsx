'use client'

import {
  Block,
  Divider,
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
} from "@/app/src";
import RightSideBar from "@/components/RightSideBar";
import CodeSnippet from "@/components/CodeSnippet";

const pageClient = () => {
  const defaultDividerContent = `
import { Block, Text, Divider } from "landing-page-ui"

const App = () => {
  return (
    <Block>
      <Text styles="text-2xl font-medium">Heading</Text>
      <Divider />
      <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel voluptates illo quaerat inventore possimus iste. Dolorem amet quasi illum quaerat sed reprehenderit consequuntur quo optio omnis blanditiis, molestias perspiciatis. Nam.</Text>
    </Block>
  );
}

export default App;
	`;
  const progressBarOnVisibleContent = `
import { CircularProgressBar } from "landing-page-ui"

const App = () => {
  return (
    <Block styles="w-full">
		<Divider position="left">Left</Divider>
		<Divider position="center">Center</Divider>
		<Divider position="right">Right</Divider>
	</Block>
  );
}

export default App;
	`;

  const dividerProps = [
    {
      name: "position",
      type: "string",
      description: `Content Position.</br><span class="code">left</span> <span class="code">center</span> <span class="code">right</span>`,
      defaultValue: `<span class="code">center</span>`,
    },
    {
      name: "style",
      type: "string",
      description: "Any CSS className to style the Divider.",
      defaultValue: "-",
    },
    {
      name: "contentStyle",
      type: "string",
      description: "Any CSS className to style the Divider content.",
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
          Divider
        </Text>
        <Text tagName={"p"} styles="">
          The{" "}
          <Text tagName={"span"} styles="code  ">
            Divider
          </Text>{" "}
          component visually separates sections or elements within a layout to
          enhance readability and organize content.
        </Text>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="default-divider"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center capitalize ">
            default Divider
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#default-divider"
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
              <Block styles="flex w-full gap-4 my-4">
                <Block>
                  <Text styles="text-2xl font-medium">Heading</Text>
                  <Divider />
                  <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Vel voluptates illo quaerat inventore possimus iste. Dolorem
                    amet quasi illum quaerat sed reprehenderit consequuntur quo
                    optio omnis blanditiis, molestias perspiciatis. Nam.
                  </Text>
                </Block>
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={defaultDividerContent}
              />
            </TabsPanel>
          </Tabs>
        </Block>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="divider-with-position"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center capitalize ">
            Divider with position
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#divider-with-position"
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
              <Block styles="flex w-full gap-4 my-4">
                <Block styles="w-full">
                  <Divider position="left">Left</Divider>
                  <Divider position="center">Center</Divider>
                  <Divider position="right">Right</Divider>
                </Block>
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={progressBarOnVisibleContent}
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
              <span className="code">Divider</span> component
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
                  {dividerProps.map((props, index) => {
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
                          <span
                            dangerouslySetInnerHTML={{
                              __html: props.defaultValue,
                            }}
                          />
                        </TableCell>
                        <TableCell variant={1} styles="dark:text-gray-200">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: props.description,
                            }}
                          />
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
            id: "#default-divider",
            title: "Default Divider"
          },
          {
            id: "#divider-with-position",
            title: "Divider With Position"
          },
          {
            id: "#props",
            title: "Props"
          }
        ]
      }>
        <Text styles="text-lg !font-bold pt-3 pl-3 pb-4 ">ON THIS PAGE</Text>
        <Block styles="">
          <Text
            styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
            isLink={true}
            linkTo="#default-divider">
            Default Divider
          </Text>
          <Text
            styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
            isLink={true}
            linkTo="#divider-with-position">
            Divider With Position
          </Text>
          <Text
            styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
            isLink={true}
            linkTo="#props">
            Props
          </Text>
        </Block>
      </RightSideBar>
    </Block>
  );
};

export default pageClient;

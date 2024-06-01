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
} from "@/app/src";
import RightSideBar from "@/components/RightSideBar";
import CodeSnippet from "@/components/CodeSnippet";

const TextPage = () => {
  const defaultTextContent = `
import { Text } from "landing-page-ui"

const App = () => {
  return (
	<>
		<Text tagName="h1" styles="font-bold text-3xl ">
			Heading Text "H1".
		</Text>
		<Text tagName="h2" styles="font-bold text-2xl ">
			Heading Text "H2".
		</Text>
		<Text tagName="h3" styles="font-bold text-xl ">
			Heading Text "H3".
		</Text>
		<Text tagName="h4" styles="font-bold text-lg ">
			Heading Text "H4".
		</Text>
		<Text tagName="h5" styles="font-bold text-md ">
			Heading Text "H5".
		</Text>
		<Text tagName="h6" styles="font-bold text-sm ">
			Heading Text "H6".
		</Text>
		<Text tagName="p">
			This is Paragraph.
		</Text>
	</>
  );
}

export default App;
	`;
  const linkableTextContent = `
import { Text } from "landing-page-ui"

const App = () => {
  return (
    <Text isLink={true} linkTo="#linkable-text" target="_self" >
      This is linkable text.
    </Text>
  );
}

export default App;
	`;
  const textProps = [
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
      name: "children",
      type: "node",
      description: "Child components and content to be placed within it.",
      defaultValue: "-",
    },
    // {
    // 	name: "variant",
    // 	type: "number",
    // 	description: "Variant of the accordion",
    // 	defaultValue: '{1}',
    // },
  ];
  return (
    <Block tagName={"div"} styles="scroll-smooth md:w-[65%] lg:w-[73%] pb-10">
      <Block>
        <Text tagName={"h2"} styles=" text-3xl mb-2 font-medium ">
          Text
        </Text>
        <Text tagName={"p"} styles="">
          The{" "}
          <Text tagName={"span"} styles="code  ">
            Text
          </Text>{" "}
          component allows you to display text.
        </Text>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="default-text"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center ">
            Default Text
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#default-text"
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
              <Block styles="flex gap-4 my-4 flex-col">
                <Text tagName="h1" styles="font-bold text-3xl ">
                  Heading Text &quot;H1&quot;.
                </Text>
                <Text tagName="h2" styles="font-bold text-2xl ">
                  Heading Text &quot;H2&quot;.
                </Text>
                <Text tagName="h3" styles="font-bold text-xl ">
                  Heading Text &quot;H3&quot;.
                </Text>
                <Text tagName="h4" styles="font-bold text-lg ">
                  Heading Text &quot;H4&quot;.
                </Text>
                <Text tagName="h5" styles="font-bold text-md ">
                  Heading Text &quot;H5&quot;.
                </Text>
                <Text tagName="h6" styles="font-bold text-sm ">
                  Heading Text &quot;H6&quot;.
                </Text>
                <Text tagName="p">This is Paragraph.</Text>
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={defaultTextContent}
              />
            </TabsPanel>
          </Tabs>
        </Block>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="linkable-text"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center ">
            Linkable Text
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#linkable-text"
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
              <Block styles="flex gap-4 my-4 flex-col">
                <Text isLink={true} linkTo="#linkable-text" target="_self">
                  This is linkable text.
                </Text>
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={linkableTextContent}
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
            <Text tagName="p" styles="my-5">
              Explore the available props for the{" "}
              <span className="code">Text</span> component
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
                  {textProps.map((props, index) => {
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
      <RightSideBar data={[
        {
          id: "#default-text",
          title: "Default Text",
        }, {
          id: "#linkable-text",
          title: "Linkable Text",
        }, {
          id: "#props",
          title: "Props",
        }
      ]} />
    </Block>
  );
};

export default TextPage;

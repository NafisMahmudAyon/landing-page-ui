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
  IconButton,
} from "@/app/src";
import RightSideBar from "@/components/RightSideBar";
import CodeSnippet from "@/components/CodeSnippet";

const page = () => {
  const basicButtonContent = `
import { IconButton } from "landing-page-ui"

const App = () => {
  return (
    <IconButton styles="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px]  rounded-xl  active:scale-95 flex items-center gap-2 px-8 py-3 bg-[#B931FC] text-[#f1d5fe]  bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
		User
	</IconButton>
  );
}

export default App;
	`;
  const buttonWithIconContent = `
import { IconButton } from "landing-page-ui"

const App = () => {
  return (
    <IconButton 
		styles="cursor-pointer group relative flex gap-3 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md" 
		icon="fa-download" 
		iconLibrary="font-awesome">
		Download
	</IconButton>
  );
}

export default App;
	`;
  const buttonWithLinkContent = `
import { IconButton } from "landing-page-ui"

const App = () => {
  return (
    <IconButton
		styles="cursor-pointer group relative flex gap-3 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
		icon="fa-download"
		iconLibrary="font-awesome"
		isLink={true}
		linkTo="#">
		Download
	</IconButton>
  );
}

export default App;
	`;
  const buttonWithIconPositionContent = `
import { IconButton } from "landing-page-ui"

const App = () => {
  return (
		<>
			<IconButton
			styles="cursor-pointer group relative flex gap-3 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
			icon="fa-download"
			iconLibrary="font-awesome"
			iconPosition="before"
			isLink={true}
			linkTo="#">
			Download
		</IconButton>
			<IconButton
			styles="cursor-pointer group relative flex gap-3 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
			icon="fa-download"
			iconLibrary="font-awesome"
			iconPosition="after"
			isLink={true}
			linkTo="#">
			Download
		</IconButton>
	</>
  );
}

export default App;
	`;

  const iconButtonProps = [
    {
      name: "tagName",
      type: "string",
      description: "HTML Tag name.",
      defaultValue: "button",
    },
    {
      name: "icon",
      type: "string",
      description: "Icon name for IconButton.",
      defaultValue: "fa-user",
    },
    {
      name: "iconLibrary",
      type: "string",
      description: `Icon library name.</br> <span class="code my-1">font-awesome</span> <span class="code my-1">bootstrap-icons</span> <span class="code my-1">icon-font</span> `,
      defaultValue: "font-awesome",
    },
    {
      name: "iconPosition",
      type: "string",
      description: `Icon position value.</br> <span class="code my-1">before</span> <span class="code my-1">after</span> `,
      defaultValue: `<span class="code my-1">before</span>`,
    },
    {
      name: "text",
      type: "string",
      description: `Text will show if there is no <span class="code my-1">children</span>.`,
      defaultValue: "-",
    },
    {
      name: "isLink",
      type: "boolean",
      description:
        "To determines whether the button behaves as a link or a standard button.",
      defaultValue: "false",
    },
    {
      name: "target",
      type: "string",
      description:
        "Specifies where to open the linked document when the button is clicked.",
      defaultValue: "_self",
    },
    {
      name: "linkTo",
      type: "string",
      description: "Link for the button.",
      defaultValue: "-",
    },
    {
      name: "style",
      type: "string",
      description: "Any CSS className to style the button.",
      defaultValue: "-",
    },
    {
      name: "textStyle",
      type: "string",
      description: "Any CSS className to style the text or children.",
      defaultValue: "-",
    },
    {
      name: "iconStyle",
      type: "string",
      description: "Any CSS className to style the icon.",
      defaultValue: "-",
    },
    {
      name: "variant",
      type: "number",
      description: "Variant of the IconButton.",
      defaultValue: '"1"',
    },
    {
      name: "onClick",
      type: "javascript Event",
      description: "onClick event for the IconButton.",
      defaultValue: "-",
    },
  ];
  return (
    <Block tagName={"div"} styles="scroll-smooth md:w-[65%] lg:w-[73%] pb-10">
      <Block>
        <Text tagName={"h2"} styles=" text-3xl mb-2 font-medium ">
          Icon Button
        </Text>
        <Text tagName={"p"} styles="">
          The{" "}
          <Text tagName={"span"} styles="code  ">
            IconButton
          </Text>{" "}
          allow users to take actions, and make choices, with a single tap.
        </Text>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="basic-button"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center ">
            Basic Icon Button
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#basic-button"
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
                <IconButton styles="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px]  rounded-xl  active:scale-95 flex items-center gap-2 px-8 py-3 bg-[#B931FC] text-[#f1d5fe]  bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                  User
                </IconButton>
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={basicButtonContent}
              />
            </TabsPanel>
          </Tabs>
        </Block>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="button-with-icon"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center ">
            Button With Icon
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#button-with-icon"
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
                <IconButton
                  styles="cursor-pointer group relative flex gap-3 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
                  icon="fa-download"
                  iconLibrary="font-awesome">
                  Download
                </IconButton>
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={buttonWithIconContent}
              />
            </TabsPanel>
          </Tabs>
        </Block>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="button-with-link"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center ">
            Button With Link
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#button-with-link"
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
                <IconButton
                  styles="cursor-pointer group relative flex gap-3 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
                  icon="fa-download"
                  iconLibrary="font-awesome"
                  isLink={true}
                  linkTo="#button-with-link">
                  Download
                </IconButton>
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={buttonWithLinkContent}
              />
            </TabsPanel>
          </Tabs>
        </Block>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="button-with-icon-position"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center ">
            Button With Icon Position
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#button-with-icon-position"
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
                <IconButton
                  styles="cursor-pointer group relative flex gap-3 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
                  icon="fa-download"
                  iconLibrary="font-awesome"
                  isLink={true}
                  linkTo="#button-with-icon-position"
                  iconPosition="before">
                  Download
                </IconButton>
                <IconButton
                  styles="cursor-pointer group relative flex gap-3 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
                  icon="fa-download"
                  iconLibrary="font-awesome"
                  isLink={true}
                  linkTo="#button-with-icon-position"
                  iconPosition="after">
                  Download
                </IconButton>
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={buttonWithIconPositionContent}
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
              <span className="code">IconButton</span> component
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
                  {iconButtonProps.map((props, index) => {
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
                          {/* {props.defaultValue} */}
                          <span
                            dangerouslySetInnerHTML={{
                              __html: props.defaultValue,
                            }}
                          />
                        </TableCell>
                        <TableCell variant={1} styles="dark:text-gray-200">
                          {/* {props.description} */}
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
            id: "#basic-button",
            title: "Basic Icon Button",
          },
          {
            id: "#button-with-icon",
            title: "Button With Icon",
          },
          {
            id: "#button-with-link",
            title: "Button With Link",
          },
          {
            id: "#button-with-icon-position",
            title: "Button With Icon Position",
          },
          {
            id: "#props",
            title: "Props",
          },
        ]
      }>
        <Text styles="text-lg !font-bold pt-3 pl-3 pb-4 ">ON THIS PAGE</Text>
        <Block styles="">
          <Text
            styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
            isLink={true}
            linkTo="#basic-button">
            Basic Icon Button
          </Text>
          <Text
            styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
            isLink={true}
            linkTo="#button-with-icon">
            Button With Icon
          </Text>
          <Text
            styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
            isLink={true}
            linkTo="#button-with-link">
            Button With Link
          </Text>
          <Text
            styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
            isLink={true}
            linkTo="#button-with-icon-position">
            Button With Icon Position
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

export default page;

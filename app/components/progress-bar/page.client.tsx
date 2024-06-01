'use client'

import {
  Block,
  Icon,
  ProgressBar,
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
  const defaultProgressBarContent = `
import { ProgressBar } from "landing-page-ui"

const App = () => {
  return (
    <ProgressBar value={60} duration={3} />
  );
}

export default App;
	`;
  const progressBarOnVisibleContent = `
import { ProgressBar } from "landing-page-ui"

const App = () => {
  return (
    <ProgressBar
      value={85}
      animateOnVisible
      duration={3}
    />
  );
}

export default App;
	`;

  const progressBarProps = [
    {
      name: "value",
      type: "number",
      description: "ProgressBar value.",
      defaultValue: "-",
    },
    {
      name: "contentPosition",
      type: "string",
      description: `Content position of the progress bar. <br> <span class="code">right</span> <span class="code">left</span>`,
      defaultValue: `<span class="code">right</span>`,
    },
    {
      name: "duration",
      type: "number",
      description: "Animation duration in second.",
      defaultValue: 2,
    },
    {
      name: "animateOnLoad",
      type: "boolean",
      description: "Animate progress-bar onLoad.",
      defaultValue: "true",
    },
    {
      name: "animateOnVisible",
      type: "boolean",
      description: "Animate progress-bar onVisible.",
      defaultValue: "false",
    },
    {
      name: "style",
      type: "string",
      description: "Any CSS className to style the ProgressBar.",
      defaultValue: "-",
    },
    {
      name: "containerStyle",
      type: "string",
      description: "Any CSS className to style the ProgressBar container.",
      defaultValue: "-",
    },
    {
      name: "fillStyle",
      type: "string",
      description: "Any CSS className to style the ProgressBar fillStyle.",
      defaultValue: "-",
    },
    {
      name: "contentStyle",
      type: "string",
      description: "Any CSS className to style the ProgressBar content.",
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
          Progress Bar
        </Text>
        <Text tagName={"p"} styles="">
          The{" "}
          <Text tagName={"span"} styles="code  ">
            ProgressBar
          </Text>{" "}
          visually indicates the completion status of a task or process.
        </Text>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="default-progress-bar"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center capitalize ">
            default progressBar
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#default-progress-bar"
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
                <ProgressBar value={60} duration={3} />
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={defaultProgressBarContent}
              />
            </TabsPanel>
          </Tabs>
        </Block>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="progress-bar-on-visible"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center capitalize ">
            progressBar on visible
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#progress-bar-on-visible"
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
                <ProgressBar value={85} animateOnVisible duration={3} />
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
              <span className="code">ProgressBar</span> component
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
                  {progressBarProps.map((props, index) => {
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
      <RightSideBar data={[
        {
          id: "#default-progress-bar",
          title: "Default Progress Bar",
        }, {
          id: "#progress-bar-on-visible",
          title: "ProgressBar On Visible",
        }, {
          id: "#props",
          title: "Props",
        }
      ]} />
    </Block>
  );
};

export default pageClient;

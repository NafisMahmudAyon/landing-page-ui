'use client'

import {
  Block,
  // CodeSnippet,
  Icon,
  // Input,
  Label,
  Tab,
  Tabs,
  TabsNav,
  TabsPanel,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Text,
  TextArea,
} from "@/app/src";
import RightSideBar from "@/components/RightSideBar";
import CodeSnippet from "@/components/CodeSnippet";
import { ChangeEvent, useState } from "react";

const PageClient = () => {
  const defaultTextareaContent = `
import { TextArea, Label } from "landing-page-ui"

const App = () => {
  return (
    <Label styles=" my-2 text-base  block font-medium text-gray-500 ">
      Default Textarea
    </Label>
    <TextArea />
  );
}

export default App;
	`;

  const disabledTextareaContent = `
import { TextArea, Label } from "landing-page-ui"

const App = () => {
  return (
    <Label styles=" my-2 text-base  block font-medium text-gray-500 ">
      Default Textarea
    </Label>
    <TextArea disabled={true} />
  );
}

export default App;
	`;
  const defaultInputWithErrorContent = `
import { Block, Input } from "landing-page-ui"

const App = () => {
	const [value, setValue] = useState("");
  const handleChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(ev.target.value);
  };
	const validateField = (content) => {
		if (content.length < 30) {
			return false;
		} else {
			return true;
		}
	};
	const isValid = validateField(value);
	return (
      <TextArea
        placeholder="Minimum 30 characters."
        error={isValid}
        helperText="Minimum 30 characters."
        value={value}
        onChange={handleChange}
      />
  );
}

export default App;
	`;

  const textareaProps = [
    {
      name: "value",
      type: "string",
      description: "The value of TextArea component.",
      defaultValue: "-",
    },
    {
      name: "placeholder",
      type: "string",
      description: "Placeholder text.",
      defaultValue: "-",
    },
    {
      name: "error",
      type: "boolean",
      description: "Is the error message enable.",
      defaultValue: "true",
    },
    {
      name: "helperText",
      type: "string",
      description: "Error text.",
      defaultValue: "Incorrect Value",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Is the input field disabled.",
      defaultValue: "-",
    },
    {
      name: "required",
      type: "boolean",
      description: "Is the input field required.",
      defaultValue: "-",
    },
    {
      name: "autoComplete",
      type: "string",
      description: "autoComplete value.",
      defaultValue: "on",
    },
    {
      name: "style",
      type: "string",
      description: "Any CSS className to style the TextArea component.",
      defaultValue: "-",
    },
    {
      name: "inputStyle",
      type: "string",
      description: "Any CSS className to style the textarea field.",
      defaultValue: "-",
    },
    {
      name: "errorStyle",
      type: "string",
      description: "Any CSS className to style the error message.",
      defaultValue: "-",
    },
    {
      name: "disabledStyle",
      type: "string",
      description: "Any CSS className to style the disabled field.",
      defaultValue: "-",
    },
    {
      name: "requiredStyle",
      type: "string",
      description: "Any CSS className to style the required field.",
      defaultValue: "-",
    },
    // {
    // 	name: "children",
    // 	type: "node",
    // 	description: "Child components and content to be placed within it.",
    // 	defaultValue: "-",
    // },
    // {
    // 	name: "variant",
    // 	type: "number",
    // 	description: "Variant of the accordion",
    // 	defaultValue: '"1"',
    // },
  ];
  const [value, setValue] = useState("");
  const validateField = (content: string) => {
    if (content.length < 30) {
      return false;
    } else {
      return true;
    }
  };
  const isValid = validateField(value);

  const handleChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(ev.target.value);
  };
  return (
    <Block tagName={"div"} styles="scroll-smooth md:w-[65%] lg:w-[73%] pb-10">
      <Block>
        <Text tagName={"h2"} styles=" text-3xl mb-2 font-medium ">
          TextArea
        </Text>
        <Text tagName={"p"} styles="">
          The{" "}
          <Text tagName={"span"} styles="code  ">
            TextArea
          </Text>{" "}
          component collects and displays multi-line text input from users.
        </Text>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="default-textarea"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center capitalize ">
            default textArea
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#default-textarea"
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
              <Block styles="w-full my-4">
                <Label styles=" my-2 text-base  block font-medium text-gray-500 ">
                  Default Textarea
                </Label>
                <TextArea />
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={defaultTextareaContent}
              />
            </TabsPanel>
          </Tabs>
        </Block>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="disabled-textarea"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center capitalize ">
            Disabled TextArea
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#disabled-textarea"
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
              <Block styles="w-full my-4">
                <Label styles=" my-2 text-base  block font-medium text-gray-500 ">
                  Default Textarea
                </Label>
                <TextArea disabled={true} />
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={disabledTextareaContent}
              />
            </TabsPanel>
          </Tabs>
        </Block>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="error-handle-with-textarea-field"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center capitalize ">
            error handle with TextArea field
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#error-handle-with-textarea-field"
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
              <Block styles="w-full my-4">
                <TextArea
                  placeholder="Minimum 30 characters."
                  error={isValid}
                  helperText="Minimum 30 characters."
                  value={value}
                  onChange={handleChange}
                />
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={defaultInputWithErrorContent}
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
              <span className="code">Input</span> component
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
                  {textareaProps.map((props, index) => {
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
          id: "#default-textarea",
          title: "Default Textarea",
        }, {
          id: "#disabled-textarea",
          title: "Disabled TextArea",
        }, {
          id: "#error-handle-with-textarea-field",
          title: "Error Handle With TextArea field",
        }, {
          id: "#props",
          title: "Props",
        }
      ]} />
    </Block>
  );
};

export default PageClient;

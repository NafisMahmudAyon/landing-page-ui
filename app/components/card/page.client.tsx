'use client'

import {
  Block,
  Card,
  CardAction,
  CardContent,
  CardMedia,
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
import React from "react";
import RightSideBar from "@/components/RightSideBar";
import CodeSnippet from "@/components/CodeSnippet";

const PageClient = () => {
  const defaultCardContent = `
import { Card, CardMedia, CardContent, Text } from "landing-page-ui"

const App = () => {
  return (
    <Card>
		<CardMedia
			mediaStyles="h-40 w-full "
			badge="Nature"
			src="https://source.unsplash.com/random/800x600?nature"
			badgePosition="bottom left"
		/>
		<CardContent>
			<Text tagName="h3" styles="text-2xl  ">
				Nature
			</Text>
			<Text tagName="p" styles="text-sm text-pretty  ">
				Nature is the embodiment of the Earth's beauty,
				encompassing everything from lush forests and towering
				mountains to serene lakes and vibrant ecosystems.
			</Text>
		</CardContent>
	</Card>
  );
}

export default App;
	`;
  const cardWithActionContent = `
import { Card, CardMedia, CardContent, CardAction, Text } from "landing-page-ui"

const App = () => {
  return (
    <Card>
		<CardAction link="#">
			<CardMedia
				mediaStyles="h-40 w-full "
				badge="Nature"
				src="https://source.unsplash.com/random/800x600?nature"
				badgePosition="bottom left"
			/>
			<CardContent>
				<Text tagName="h3" styles="text-2xl">
					Nature
				</Text>
				<Text tagName="p" styles="text-sm text-pretty">
					Nature is the embodiment of the Earth's beauty,
					encompassing everything from lush forests and towering
					mountains to serene lakes and vibrant ecosystems.
				</Text>
			</CardContent>
		</CardAction>
	</Card>
  );
}

export default App;
	`;

  const cardProps = [
    {
      name: "style",
      type: "string",
      description: "Any CSS className to style the Card.",
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
  const cardMediaProps = [
    {
      name: "src",
      type: "string",
      description: "Image src or link.",
      defaultValue: "-",
    },
    {
      name: "badge",
      type: "string",
      description: "Badge content.",
      defaultValue: "-",
    },
    {
      name: "badgePosition",
      type: "string",
      description: "Position of the badge.",
      defaultValue: "-",
    },
    {
      name: "style",
      type: "string",
      description: "Any CSS className to style the Avatar.",
      defaultValue: "-",
    },
    {
      name: "mediaStyle",
      type: "string",
      description: "Any CSS className to style the media.",
      defaultValue: "-",
    },
    {
      name: "badgeStyle",
      type: "string",
      description: "Any CSS className to style the badge.",
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
  const cardContentProps = [
    {
      name: "style",
      type: "string",
      description: "Any CSS className to style the Card.",
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
  const cardActionProps = [
    {
      name: "link",
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
      description: "Any CSS className to style the CardAction.",
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
        <Text tagName={"h2"} styles=" text-3xl mb-2 font-medium capitalize ">
          card
        </Text>
        <Text tagName={"p"} styles="">
          The{" "}
          <Text tagName={"span"} styles="code  ">
            Card
          </Text>{" "}
          component is a versatile UI element used for structured content
          presentation in web development, featuring a container with
          customizable layout, content area, and interactive elements.
        </Text>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="default-card"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center capitalize ">
            Default Card
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#default-card"
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
              <Block styles="flex gap-4 my-4 resize-x">
                <Card>
                  {/* <CardAction link="/components/accordion"> */}
                  <CardMedia
                    mediaStyles="h-40 w-full "
                    badge="Nature"
                    src="https://source.unsplash.com/random/800x600?nature"
                    badgePosition="bottom left"
                  />
                  <CardContent>
                    <Text tagName="h3" styles="text-2xl  ">
                      Nature
                    </Text>
                    <Text tagName="p" styles="text-sm text-pretty  ">
                      Nature is the embodiment of the Earth&apos;s beauty,
                      encompassing everything from lush forests and towering
                      mountains to serene lakes and vibrant ecosystems.
                    </Text>
                  </CardContent>
                  {/* </CardAction> */}
                </Card>
                <Card styles="hidden md:block">
                  {/* <CardAction link="/components/accordion"> */}
                  <CardMedia
                    mediaStyles="h-40 w-full "
                    badge="Nature"
                    src="https://source.unsplash.com/random/800x600?nature"
                    badgePosition="bottom left"
                  />
                  <CardContent>
                    <Text tagName="h3" styles="text-2xl  ">
                      Nature
                    </Text>
                    <Text tagName="p" styles="text-sm text-pretty  ">
                      Nature is the embodiment of the Earth&apos;s beauty,
                      encompassing everything from lush forests and towering
                      mountains to serene lakes and vibrant ecosystems.
                    </Text>
                  </CardContent>
                  {/* </CardAction> */}
                </Card>
                <Card styles="hidden lg:block">
                  {/* <CardAction link="/components/accordion"> */}
                  <CardMedia
                    mediaStyles="h-40 w-full "
                    badge="Nature"
                    src="https://source.unsplash.com/random/800x600?nature"
                    badgePosition="bottom left"
                  />
                  <CardContent>
                    <Text tagName="h3" styles="text-2xl  ">
                      Nature
                    </Text>
                    <Text tagName="p" styles="text-sm text-pretty  ">
                      Nature is the embodiment of the Earth&apos;s beauty,
                      encompassing everything from lush forests and towering
                      mountains to serene lakes and vibrant ecosystems.
                    </Text>
                  </CardContent>
                  {/* </CardAction> */}
                </Card>
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={defaultCardContent}
              />
            </TabsPanel>
          </Tabs>
        </Block>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="card-with-action"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center capitalize ">
            Card with action
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#card-with-action"
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
                <Card>
                  <CardAction link="#">
                    <CardMedia
                      mediaStyles="h-40 w-full "
                      badge="Nature"
                      src="https://source.unsplash.com/random/800x600?nature"
                      badgePosition="bottom left"
                    />
                    <CardContent>
                      <Text tagName="h3" styles="text-2xl  ">
                        Nature
                      </Text>
                      <Text tagName="p" styles="text-sm text-pretty  ">
                        Nature is the embodiment of the Earth&apos;s beauty,
                        encompassing everything from lush forests and towering
                        mountains to serene lakes and vibrant ecosystems.
                      </Text>
                    </CardContent>
                  </CardAction>
                </Card>
                <Card styles="hidden md:block">
                  <CardAction link="#">
                    <CardMedia
                      mediaStyles="h-40 w-full "
                      badge="Nature"
                      src="https://source.unsplash.com/random/800x600?nature"
                      badgePosition="bottom left"
                    />
                    <CardContent>
                      <Text tagName="h3" styles="text-2xl  ">
                        Nature
                      </Text>
                      <Text tagName="p" styles="text-sm text-pretty  ">
                        Nature is the embodiment of the Earth&apos;s beauty,
                        encompassing everything from lush forests and towering
                        mountains to serene lakes and vibrant ecosystems.
                      </Text>
                    </CardContent>
                  </CardAction>
                </Card>
                <Card styles="hidden lg:block ">
                  <CardAction link="#">
                    <CardMedia
                      mediaStyles="h-40 w-full "
                      badge="Nature"
                      src="https://source.unsplash.com/random/800x600?nature"
                      badgePosition="bottom left"
                    />
                    <CardContent>
                      <Text tagName="h3" styles="text-2xl  ">
                        Nature
                      </Text>
                      <Text tagName="p" styles="text-sm text-pretty  ">
                        Nature is the embodiment of the Earth&apos;s beauty,
                        encompassing everything from lush forests and towering
                        mountains to serene lakes and vibrant ecosystems.
                      </Text>
                    </CardContent>
                  </CardAction>
                </Card>
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={cardWithActionContent}
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
              <span className="code">Card</span> component
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
                  {cardProps.map((props, index) => {
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
              <span className="code">CardMedia</span> component
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
                  {cardMediaProps.map((props, index) => {
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
              <span className="code">CardContent</span> component
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
                  {cardContentProps.map((props, index) => {
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
              <span className="code">CardAction</span> component
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
                  {cardActionProps.map((props, index) => {
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
            id: "#default-card",
            title: "Default Card",
          },
          {
            id: "#card-with-action",
            title: "Card with Action",
          },
          {
            id: "#props",
            title: "Props"
          }
        ]
      } />
    </Block>
  );
};

export default PageClient;

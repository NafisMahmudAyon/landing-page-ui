'use client'
import {
  Avatar,
  AvatarGroup,
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
} from "@/app/src";
import RightSideBar from "@/components/RightSideBar";
import CodeSnippet from "@/components/CodeSnippet";

const Page = () => {
  const imageAvatarContent = `
import { Avatar, Block } from "landing-page-ui"

const App = () => {
  return (
    <Block styles="flex gap-4">
      <Avatar src="https://source.unsplash.com/random/600x600?face=1" altText="Avatar 1"  styles="border" />
      <Avatar src="https://source.unsplash.com/random/600x600?face=2" altText="Avatar 2"  styles="border" />
      <Avatar src="https://source.unsplash.com/random/600x600?face=3" altText="Avatar 3"  styles="border" />
    </Block>
  );
}

export default App;
	`;
  const nameAvatarContent = `
import { Avatar, Block } from "landing-page-ui"

const App = () => {
  return (
    <Block styles="flex gap-4 my-4">
		<Avatar name="Michael Brown" />
		<Avatar name="Emily Johnson" />
		<Avatar name="John" />
	</Block>
  );
}

export default App;
	`;
  const groupAvatarContent = `
import { Avatar, AvatarGroup } from "landing-page-ui"

const App = () => {
  return (
    <AvatarGroup>
		<Avatar src="https://source.unsplash.com/random/600x600?face=1" altText="Avatar 1"  styles="border" />
		<Avatar src="https://source.unsplash.com/random/600x600?face=2" altText="Avatar 2" styles="border"  />
		<Avatar src="https://source.unsplash.com/random/600x600?face=3" altText="Avatar 3" styles="border"  />
	</AvatarGroup>
  );
}

export default App;
	`;
  const avatarProps = [
    {
      name: "src",
      type: "string",
      description: "Image src or link.",
      defaultValue: "-",
    },
    {
      name: "altText",
      type: "string",
      description: "Alternative text for Avatar.",
      defaultValue: "-",
    },
    {
      name: "name",
      type: "string",
      description: "Name of the profile or avatar.",
      defaultValue: "-",
    },
    {
      name: "style",
      type: "string",
      description: "Any CSS className to style the Avatar.",
      defaultValue: "-",
    },
    {
      name: "imageStyle",
      type: "string",
      description: "Any CSS className to style the image.",
      defaultValue: "-",
    },
    {
      name: "variant",
      type: "number",
      description: "Variant of the accordion",
      defaultValue: '"1"',
    },
    {
      name: "onClick",
      type: "javascript Event",
      description: "onClick event for the Avatar",
      defaultValue: "-",
    },
  ];
  const avatarGroupProps = [
    {
      name: "children",
      type: "node",
      description: "Child components and content to be placed within it.",
      defaultValue: "-",
    },

    {
      name: "style",
      type: "string",
      description: "Any CSS className to style the Avatar.",
      defaultValue: "-",
    },
  ];
  return (
    <Block tagName={"div"} styles="scroll-smooth md:w-[65%] lg:w-[73%] pb-10">
      <Block>
        <Text tagName={"h2"} styles=" text-3xl mb-2 font-medium ">
          Avatar
        </Text>
        <Text tagName={"p"} styles="">
          The{" "}
          <Text tagName={"span"} styles="code  ">
            Avatar
          </Text>{" "}
          allows you to display user avatars or profile images in a consistent
          and visually appealing manner.
        </Text>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="image-avatar"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center ">
            Image Avatar
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#image-avatar"
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
                <Avatar
                  src="https://source.unsplash.com/random/600x600?face=1"
                  altText="Avatar 1"
                  styles="border"
                />
                <Avatar
                  src="https://source.unsplash.com/random/600x600?face=2"
                  altText="Avatar 2"
                  styles="border"
                />
                <Avatar
                  src="https://source.unsplash.com/random/600x600?face=3"
                  altText="Avatar 3"
                  styles="border"
                />
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={imageAvatarContent}
              />
            </TabsPanel>
          </Tabs>
        </Block>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="name-avatar"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center ">
            Name Avatar
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#name-avatar"
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
                <Avatar styles="bg-gray-500" name="Michael Brown" />
                <Avatar styles="bg-gray-500" name="Emily Johnson" />
                <Avatar styles="bg-gray-500" name="John" />
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={nameAvatarContent}
              />
            </TabsPanel>
          </Tabs>
        </Block>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="group-avatar"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center ">
            Group Avatar
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#group-avatar"
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
              <AvatarGroup>
                <Avatar
                  src="https://source.unsplash.com/random/600x600?face=1"
                  altText="Avatar 1"
                  styles="border"
                />
                <Avatar
                  src="https://source.unsplash.com/random/600x600?face=2"
                  altText="Avatar 2"
                  styles="border"
                />
                <Avatar
                  src="https://source.unsplash.com/random/600x600?face=3"
                  altText="Avatar 3"
                  styles="border"
                />
              </AvatarGroup>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={groupAvatarContent}
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
              <span className="code font-code"  >Avatar</span> component
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
            <Text tagName="p" styles="my-5">
              Explore the available props for the{" "}
              <span className="code font-code"  >AvatarGroup</span> component
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
                  {avatarGroupProps.map((props, index) => {
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
            id: "#image-avatar",
            title: "Image Avatar"
          },
          {
            id: "#name-avatar",
            title: "Name Avatar"
          },
          {
            id: "#group-avatar",
            title: "Group Avatar"
          }
        ]
      }>
      </RightSideBar>
    </Block>
  );
};

export default Page;

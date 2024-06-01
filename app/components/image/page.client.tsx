'use client'

import {
  Block,
  Icon,
  Image,
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
  const defaultImageContent = `
import { Image } from "landing-page-ui"

const App = () => {
  return (
    <Image src="/image.jpg" />
  );
}

export default App;
	`;
  const defaultImageWithLightBoxContent = `
import { Image } from "landing-page-ui"

const App = () => {
  return (
    <Image src="/image.jpg" lightBox={true} />
  );
}

export default App;
	`;
  const defaultImageWithCaption = `
import { Image } from "landing-page-ui"

const App = () => {
  return (
    <Image
		src="/image-1.jpg"
		captionEnabled={true}
		imageCaption="This is Image Caption."
	/>
  );
}

export default App;
	`;

  const imageProps = [
    {
      name: "src",
      type: "string",
      description: "Source of image.",
      defaultValue: "div",
    },
    {
      name: "altText",
      type: "string",
      description: "Alternative Text of image.",
      defaultValue: "div",
    },
    {
      name: "imageCaption",
      type: "string",
      description: "Caption for image.",
      defaultValue: "div",
    },
    {
      name: "captionEnabled",
      type: "boolean",
      description: "Is caption enable.",
      defaultValue: "div",
    },
    {
      name: "isLink",
      type: "boolean",
      description: "Is the image linkable?",
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
      name: "lightBox",
      type: "boolean",
      description: "Is lightBox enable?",
      defaultValue: "-",
    },
    {
      name: "lightBoxImageSrc",
      type: "string",
      description: "Source for lightBox image.",
      defaultValue: `<span class="code">src</span> value`,
    },
    {
      name: "lightBoxCaptionEnabled",
      type: "boolean",
      description: "Is lightBox caption enable?",
      defaultValue: "-",
    },
    {
      name: "lightBoxCaption",
      type: "string",
      description: "Caption for lightbox image.",
      defaultValue: "-",
    },
    {
      name: "style",
      type: "string",
      description: "Any CSS className to style the image wrapper.",
      defaultValue: "-",
    },
    {
      name: "imageStyle",
      type: "string",
      description: "Any CSS className to style the image.",
      defaultValue: "-",
    },
    {
      name: "captionStyle",
      type: "string",
      description: "Any CSS className to style the image caption.",
      defaultValue: "-",
    },
    {
      name: "lightBoxStyle",
      type: "string",
      description: "Any CSS className to style the lightbox.",
      defaultValue: "-",
    },
    {
      name: "lightBoxImageStyle",
      type: "string",
      description: "Any CSS className to style the lightbox image.",
      defaultValue: "-",
    },
    {
      name: "lightBoxCaptionStyle",
      type: "string",
      description: "Any CSS className to style the lightbox image caption.",
      defaultValue: "-",
    },
    {
      name: "closeButtonStyle",
      type: "string",
      description: "Any CSS className to style the lightbox close button.",
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
    // 	defaultValue: '{1}',
    // },
  ];
  return (
    <Block tagName={"div"} styles="scroll-smooth md:w-[65%] lg:w-[73%] pb-10">
      <Block>
        <Text tagName={"h2"} styles=" text-3xl mb-2 font-medium ">
          Image
        </Text>
        <Text tagName={"p"} styles="">
          The{" "}
          <Text tagName={"span"} styles="code  ">
            Image
          </Text>{" "}
          component allows user to display image.
        </Text>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="default-image"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center ">
            Default Image
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#default-image"
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
                <Image src="https://source.unsplash.com/random/600x400?nature=1" alt="Default Image" />
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={defaultImageContent}
              />
            </TabsPanel>
          </Tabs>
        </Block>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="image-with-lightbox"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center ">
            Image With LightBox
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#image-with-lightbox"
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
                <Image src="https://source.unsplash.com/random/600x400?nature=1" alt="Image With LightBox" lightBox={true} />
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={defaultImageWithLightBoxContent}
              />
            </TabsPanel>
          </Tabs>
        </Block>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="image-with-caption"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center ">
            Image With Caption
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#image-with-caption"
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
                <Image
                  src="https://source.unsplash.com/random/600x400?nature=1"
                  alt="Image With Caption"
                  captionEnabled={true}
                  imageCaption="This is Image Caption."
                />
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={defaultImageWithCaption}
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
              <span className="code">Image</span> component
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
                  {imageProps.map((props, index) => {
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
          id: "#default-image",
          title: "Default Image",
        },
        {
          id: "#image-with-lightbox",
          title: "Image with lightbox",
        }, {
          id: "#image-with-caption",
          title: "Image with caption",
        },
        {
          id: "#props",
          title: "Props",
        }
      ]}>
        <Text styles="text-lg !font-bold pt-3 pl-3 pb-4 ">ON THIS PAGE</Text>
        <Block styles="">
          <Text
            styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
            isLink={true}
            linkTo="#default-image">
            Default Image
          </Text>
          <Text
            styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 capitalize "
            isLink={true}
            linkTo="#image-with-lightbox">
            Image with lightbox
          </Text>
          <Text
            styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 capitalize "
            isLink={true}
            linkTo="#image-with-caption">
            Image with caption
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

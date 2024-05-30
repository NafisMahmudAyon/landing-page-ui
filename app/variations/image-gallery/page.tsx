'use client'

import {
  Block,
  Icon,
  Image,
  ImageGallery,
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

const page = () => {
  const gallery = Array.from({ length: 9 }, (_, index) => ({
    src: `https://source.unsplash.com/random/800x600?nature=${index}`,
    imageCaption: `Nature ${index + 1}`,
  }));
  const defaultGalleryContent = `
import { Image, ImageGallery } from "landing-page-ui"

const App = () => {
	const gallery = Array.from({ length: 9 }, (_, index) => ({
		src: \`https://source.unsplash.com/random/800x600?nature=\${index}\`,
		imageCaption: \`Nature \${index + 1}\`,
	}));
  return (
    <ImageGallery styles="grid grid-cols-3 gap-2">
		{gallery.map((item, index) => (
			<Image
				key={index}
				src={item.src}
        alt={item.imageCaption}
			/>
		))}
	</ImageGallery>
  );
}

export default App;
	`;

  const galleryWithCaptionContent = `
import { Image, ImageGallery } from "landing-page-ui"

const App = () => {
	const gallery = Array.from({ length: 9 }, (_, index) => ({
		src: \`https://source.unsplash.com/random/800x600?nature=\${index}\`,
		imageCaption: \`Nature \${index + 1}\`,
	}));
  return (
    <ImageGallery captionEnabled={true} styles="grid grid-cols-3 gap-2">
		{gallery.map((item, index) => (
			<Image
				key={index}
				src={item.src}
        alt={item.imageCaption}
				imageCaption={item.imageCaption}
			/>
		))}
	</ImageGallery>
  );
}

export default App;
	`;
  const galleryWithLightboxContent = `
import { Image, ImageGallery } from "landing-page-ui"

const App = () => {
	const gallery = Array.from({ length: 9 }, (_, index) => ({
		src: \`https://source.unsplash.com/random/600x400?nature=\${index}\`,
		imageCaption: \`Nature \${index + 1}\`,
	}));
  return (
    <ImageGallery captionEnabled={true} lightBox={true} styles="grid grid-cols-3 gap-2">
		{gallery.map((item, index) => (
			<Image
				key={index}
				src={item.src}
        alt={item.imageCaption}
				imageCaption={item.imageCaption}
			/>
		))}
	</ImageGallery>
  );
}

export default App;
	`;

  const imageGalleryProps = [
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
      name: "lightBox",
      type: "boolean",
      description: "Is lightBox enable?",
      defaultValue: "-",
    },
    {
      name: "lightBoxCaptionEnabled",
      type: "boolean",
      description: "Is lightBox caption enable?",
      defaultValue: "-",
    },
    {
      name: "style",
      type: "string",
      description: "Any CSS className to style the gallery wrapper.",
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
    {
      name: "children",
      type: "node",
      description: "Child components and content to be placed within it.",
      defaultValue: "-",
    },
  ];
  return (
    <Block tagName={"div"} styles="scroll-smooth md:w-[65%] lg:w-[73%] pb-10">
      <Block>
        <Text tagName={"h2"} styles=" text-3xl mb-2 font-medium capitalize ">
          Image Gallery
        </Text>
        <Text tagName={"p"} styles="">
          The{" "}
          <Text tagName={"span"} styles="code  ">
            ImageGallery
          </Text>{" "}
          component enables you to display multiple images in a gallery format.
        </Text>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="default-gallery"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center capitalize ">
            default gallery
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#default-gallery"
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
                <ImageGallery styles="grid grid-cols-3 gap-2">
                  {gallery.map((item, index) => (
                    <Image
                      key={index}
                      src={item.src}
                      alt={item.imageCaption}
                      imageCaption={item.imageCaption}
                    />
                  ))}
                </ImageGallery>
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={defaultGalleryContent}
              />
            </TabsPanel>
          </Tabs>
        </Block>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="gallery-with-caption"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center capitalize ">
            gallery with caption
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#gallery-with-caption"
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
                <ImageGallery
                  captionEnabled={true}
                  styles="grid grid-cols-3 gap-2">
                  {gallery.map((item, index) => (
                    <Image
                      key={index}
                      src={item.src}
                      alt={item.imageCaption}
                      imageCaption={item.imageCaption}
                    />
                  ))}
                </ImageGallery>
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={galleryWithCaptionContent}
              />
            </TabsPanel>
          </Tabs>
        </Block>
        <Block styles="mb-10">
          <Text
            tagName={"h3"}
            id="gallery-with-lightbox"
            styles="text-2xl pt-[62px] mb-2 !font-medium group flex items-center capitalize ">
            gallery with lightbox
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#gallery-with-lightbox"
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
                <ImageGallery
                  captionEnabled={true}
                  lightBox={true}
                  styles="grid grid-cols-3 gap-2">
                  {gallery.map((item, index) => (
                    <Image
                      key={index}
                      src={item.src}
                      alt={item.imageCaption}
                      imageCaption={item.imageCaption}
                    />
                  ))}
                </ImageGallery>
              </Block>
            </TabsPanel>
            <TabsPanel value={2} styles="rounded-lg !overflow-hidden ">
              <CodeSnippet
                lang="jsx"
                headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                bodyStyles=" !font-code max-h-[300px] !my-0 "
                content={galleryWithLightboxContent}
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
              <span className="code">ImageGallery</span> component
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
                  {imageGalleryProps.map((props, index) => {
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
          id: "#default-gallery",
          title: "default gallery",
        },
        {
          id: "#gallery-with-caption",
          title: "gallery with caption",
        },
        {
          id: "#gallery-with-lightbox",
          title: "gallery with lightbox",
        },
        {
          id: "#props",
          title: "props",
        }
      ]} />
    </Block>
  );
};

export default page;

import React from "react";
// import {
// 	Text,
// 	Wrapper,
// 	Tabs,
// 	TabsNav,
// 	Tab,
// 	TabPanel,
// 	MasonryGrid,
// 	MasonryGridItem,
// 	List,
// 	ImageGallery,
// 	Image,
// 	IconButton,
// 	Icon,
// 	Grid,
// 	GridItem,
// 	Flex,
// 	FlexItem,
// 	ComboList,
// 	ComboListItem,
// 	Accordion,
// 	AccordionDetails,
// 	AccordionHeader,
// } from "ui";

function App() {
	const imageUrls = [
		"https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/629162/pexels-photo-629162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/889930/pexels-photo-889930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/2105416/pexels-photo-2105416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/165537/pexels-photo-165537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/2887497/pexels-photo-2887497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		// "https://via.placeholder.com/700",
	];
	var data = [
		{ title: "HEllo", excerpt: "Hello excerpt" },
		{ title: "World", excerpt: "World excerpt" },
		{ title: "Goodbye", excerpt: "Goodbye excerpt" },
		{ title: "Bye", excerpt: "Bye excerpt" },
	];
	return (
		<div>
    HEllo
			{/* <Wrapper tagName="div" style="w-full">
				<Wrapper tagName={"div"} style="bg-slate-100">
          <Text style="text-center text-4xl font-medium py-4 ">Tabs</Text>
          <Tabs
            active="3"
            orientation="horizontal"
                    style="w-full"
            navWrapStyle="bg-blue-200 text-lg"
            panelWrapStyle="bg-blue-200 text-lg px-4 py-2">
            <TabsNav
              style="bg-gray-400 w-full justify-between"
              showButton={true}
              prevButtonText={"Prev"}
              nextButtonText={"Next"}
              iconButtonStyle="px-4 bg-red-500 border py-1"
              iconLibrary="material-icons"
              nextIcon='<i className="material-icons"><span class="material-icons">
          chevron_right
          </span></i>'
              prevIcon='<i className="material-icons"><span class="material-icons">
          chevron_left
          </span></i>'
              nextIconPosition="right"
              prevIconPosition="left"
              buttonStyle="px-4 border py-1"
              prevButtonStyle="text-red-900 whitespace-nowrap"
              nextButtonStyle="text-blue-900 whitespace-nowrap"
              activeTabStyle="!border-b-red-900 !border-b "
              disabledStyle="!text-white">
              <Tab
                value="1"
                style="bg-blue-500 transition-all px-4 py-1 duration-500 ease-in-out">
                Tab 1
              </Tab>
              <Tab
                value="2"
                style="bg-blue-600 transition-all px-4 py-1 border-b-red-900 duration-500 ease-in-out">
                Tab 2
              </Tab>
              <Tab
                value="3"
                style="bg-blue-700 transition-all px-4 py-1 border-b-red-900 duration-500 ease-in-out">
                Tab 3
              </Tab>
            </TabsNav>
            <TabPanel value="1" style="">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                voluptas blanditiis consectetur quibusdam, atque quia maxime
                aperiam possimus dignissimos rerum inventore cupiditate nulla
                dolores, beatae odio non debitis, rem nobis! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Dolor incidunt placeat! Nemo
                cum ut officia dolore esse! Lorem ipsum, dolor sit amet
                consectetur
              </p>{" "}
              adipisicing elit. Perferendis, nam. Veritatis rem voluptatem eveniet
              cupiditate earum reprehenderit rerum aspernatur, soluta voluptatum
              sapiente dolor quae ex incidunt nemo sit consequatur totam!
            </TabPanel>
            <TabPanel value="2" style="text-blue-600">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                voluptas blanditiis consectetur quibusdam, atque quia maxime
                aperiam possimus dignissimos rerum inventore cupiditate nulla
                dolores, beatae odio non debitis, rem nobis! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Dolor incidunt placeat! Nemo
                cum ut officia dolore esse! Lorem ipsum, dolor sit amet
                consectetur
              </p>{" "}
              adipisicing elit. Perferendis, nam. Veritatis rem voluptatem eveniet
              cupiditate earum reprehenderit rerum aspernatur, soluta voluptatum
              sapiente dolor quae ex incidunt nemo sit consequatur totam!
            </TabPanel>
            <TabPanel value="3" style="text-blue-700">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                voluptas blanditiis consectetur quibusdam, atque quia maxime
                aperiam possimus dignissimos rerum inventore cupiditate nulla
                dolores, beatae odio non debitis, rem nobis! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Dolor incidunt placeat! Nemo
                cum ut officia dolore esse! Lorem ipsum, dolor sit amet
                consectetur
              </p>{" "}
              adipisicing elit. Perferendis, nam. Veritatis rem voluptatem eveniet
              cupiditate earum reprehenderit rerum aspernatur, soluta voluptatum
              sapiente dolor quae ex incidunt nemo sit consequatur totam!
            </TabPanel>
          </Tabs>
          <Tabs active="1" orientation="vertical">
            <TabsNav>
              <Tab
                value="1"
                style="bg-blue-500 transition-all duration-500 ease-in-out"
                activeStyle="bg-pink-600">
                Tab 1
              </Tab>
              <Tab
                value="2"
                style="bg-blue-600 transition-all duration-500 ease-in-out"
                activeStyle="bg-pink-600">
                Tab 2
              </Tab>
              <Tab
                value="3"
                style="bg-blue-700 transition-all duration-500 ease-in-out"
                activeStyle="bg-pink-600">
                Tab 3
              </Tab>
            </TabsNav>
            <TabPanel value="1" style="bg-red-500 h-full">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium similique accusamus id commodi! Rem, a aperiam, ullam
                ea minima ratione suscipit ut animi repellendus, natus impedit
                dolor laboriosam incidunt. Quos!
              </p>
            </TabPanel>
            <TabPanel value="2" style="bg-red-600 h-full">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                quo cumque magni distinctio, harum expedita maxime porro
                perferendis, voluptate corrupti doloribus facere dolore laborum
                quas recusandae, ut minus obcaecati aspernatur.
              </p>
            </TabPanel>
            <TabPanel value="3" style="bg-red-700 h-full">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
                iste officiis explicabo cupiditate, aliquam necessitatibus. Fugiat
                minus ullam excepturi praesentium vel suscipit quae voluptatibus,
                fuga deleniti dolore nam voluptate reprehenderit?
              </p>
            </TabPanel>
          </Tabs>
          <Text style="text-center text-4xl font-medium my-4 ">Accordion</Text>
          <Accordion active={true}>
            <AccordionHeader
              iconLibrary="material-icons"
              icon='<span class="material-icons ">search</span>'
              iconStyle="text-red-500"
              toggleIconStyle={`text-blue-500`}
              toggleIcon='<span class="material-icons ">home</span>'
              iconPosition="before"
              style="bg-red-900 text-white"
              activeStyle="!bg-emerald-900 !text-white"
              deactivateStyle="bg-white text-black">
              Accordion Header
            </AccordionHeader>
            <AccordionDetails style="bg-black text-white">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
                soluta aspernatur architecto nisi at facilis sunt dolor, neque,
                perspiciatis blanditiis aut? Optio nesciunt nam odit facere
                repudiandae! Quia, aspernatur adipisci?
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionHeader
              iconLibrary="material-icons"
              icon='<span class="material-icons ">search</span>'
              iconStyle="text-red-500"
              toggleIconStyle={`text-blue-500`}
              toggleIcon='<span class="material-icons ">home</span>'
              iconPosition="before"
              style="bg-red-900 text-white"
              activeStyle="!bg-emerald-900 !text-white"
              deactivateStyle="bg-white text-black">
              Accordion Header
            </AccordionHeader>
            <AccordionDetails style="bg-black text-white">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                eos cupiditate qui, a ut dolores mollitia repudiandae rerum
                soluta! Blanditiis repudiandae obcaecati odit sequi praesentium,
                maiores hic commodi. Voluptates, obcaecati?
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion deactivate={true} style="mb-4 border-b">
            <AccordionHeader
              iconLibrary="material-icons"
              icon='<span class="material-icons ">search</span>'
              iconStyle="text-red-500"
              toggleIconStyle={`text-blue-500`}
              toggleIcon='<span class="material-icons ">home</span>'
              iconPosition="before"
              style="bg-red-900 text-white"
              // activeStyle="!bg-emerald-900 !text-white"
              deactivateStyle="!bg-slate-300 !text-black">
              Accordion Header
            </AccordionHeader>
            <AccordionDetails style="bg-black text-white">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                laboriosam recusandae consectetur laudantium facilis unde beatae
                omnis adipisci autem eaque eveniet, asperiores debitis aliquam.
                Minima nemo sed itaque odit atque.
              </p>
            </AccordionDetails>
          </Accordion>
          <Text style="text-center text-4xl font-medium my-4 ">Masonry Grid</Text>
          <MasonryGrid gutter={20} columnWidth={360} fitWidth={true}>
            {imageUrls.map((imageUrl, index) => (
              <MasonryGridItem key={index}>
                <Image
                  src={imageUrl}
                  style=""
                  lightBox={true}
                  // alt={data[index].title}
                />
              </MasonryGridItem>
            ))}
          </MasonryGrid>
          <Text style="text-center text-4xl font-medium my-4 ">
            Image Gallery
          </Text>
          <ImageGallery
            style={"flex  items-center overflow-auto gap-2 "}
            lightBox={true}>
            {imageUrls.map((imageUrl, index) => (
              <Image
                key={index}
                src={imageUrl}
                style="min-w-[300px]"
                // alt={data[index].title}
              />
            ))}
          </ImageGallery>
          <ImageGallery style={"grid grid-cols-3 gap-2 px-4 my-4 "} lightBox={true}>
            {imageUrls.map((imageUrl, index) => (
              <Image
                key={index}
                src={imageUrl}
                style="min-w-[300px]"
                // alt={data[index].title}
              />
            ))}
          </ImageGallery>
          <Text style="text-center text-4xl font-medium my-4 ">Combo List</Text>
          <ComboList
            icon='<span class="material-icons ">search</span>'
            iconPosition="before">
            <ComboListItem>Item 1</ComboListItem>
            <ComboListItem>Item 2</ComboListItem>
            <ComboListItem icon='<span class="material-icons">home</span>'>
              Item 3
            </ComboListItem>
          </ComboList>
          <ComboList style="list-inside list-disc">
            <ComboListItem
              style=" rounded-md p-3 "
              icon='<span class="material-icons ">search</span>'
              iconStyle="text-blue-900"
              iconLibrary="material-icons"
              iconPosition="before">
              <Wrapper style="inline-block">
                <Text content={data[0].title} tagName="h1">
                  {data[0].title}
                </Text>
                <Text tagName="p">{data[0].excerpt} </Text>
              </Wrapper>
            </ComboListItem>
            <ComboListItem style=" rounded-md p-3 ">
              <Text content={data[1].title} tagName="h1">
                {data[0].title}
              </Text>
              <Text tagName="p">{data[1].excerpt} </Text>
            </ComboListItem>
          </ComboList>
          <Text style="text-center text-4xl font-medium my-4 ">List</Text>
          <List list={["a", "b", "c"]} tagName="ol" />
          <Text style="text-center text-4xl font-medium my-4 ">Text</Text>
          <Text
            isLink={true}
            linkTo="#"
            variant="1"
            target="_self"
            style="bg-red-500"
            tagName="">
            <h1 className="text-3xl font-bold ">hello</h1>
          </Text>
          <Text style="text-center text-4xl font-medium my-4 ">Button</Text>
          <IconButton
            icon='<span class="material-icons ">search</span>'
            style=""
            iconStyle="text-blue-900"
            iconLibrary="material-icons"
            iconPosition="beforeText"
            isLink={true}
            linkTo="#"
            prefix="Hello Prefix"
            text="Hello Text"
            textStyle="bg-red-500"
            postfix="Hello postfix"
            prefixStyle="bg-blue-500"
          />
          <Text style="text-center text-4xl font-medium my-4 ">Wrapper</Text>
          <Wrapper
            isLink={true}
            linkTo="#"
            style="h-20 w-full bg-gray-950"
            target="_blank"
          />
          <Text style="text-center text-4xl font-medium my-4 ">Flex</Text>
          <Flex
            style="bg-red-400 gap-3"
            // itemStyle="bg-gray-300/60 rounded-md p-3 odd:bg-slate-600 "
          >
            {data.map((item, index) => {
              return (
                <FlexItem
                  key={index}
                  style="bg-gray-300/60 rounded-md p-3 odd:bg-slate-600 "
                  tagName="span"
                  isLink={true}
                  linkTo="#">
                  <Text tagName="h1">{item.title}</Text>
                  <Text tagName="p">{item.excerpt}</Text>
                </FlexItem>
              );
            })}
          </Flex>
          <Text style="text-center text-4xl font-medium my-4 ">Grid</Text>
          <Grid
            style="bg-red-600 gap-3"
            // itemStyle="bg-gray-300/60 rounded-md p-3 odd:bg-slate-600 "
          >
            {data.map((item, index) => {
              return (
                <GridItem
                  key={index}
                  style="bg-gray-300/60 rounded-md p-3 odd:bg-slate-600 "
                  tagName="span"
                  isLink={true}
                  linkTo="#">
                  <Text tagName="h1">{item.title}</Text>
                  <Text tagName="p">{item.excerpt}</Text>
                </GridItem>
              );
            })}
          </Grid>
          <Text style="text-center text-4xl font-medium my-4 ">Image</Text>
          <Image
            lightBox={true}
            // isLink={true}
            // linkTo="#"
            lightBoxImageSrc="https://images.pexels.com/photos/630790/pexels-photo-630790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            captionEnabled={true}
            lightBoxCaptionEnabled={true}
            lightBoxCaption={"hello world"}
          />
        </Wrapper>
			</Wrapper> */}
		</div>
	);
}

export default App




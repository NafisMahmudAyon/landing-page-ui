import { Block, Text, Card, CardMedia, CardContent } from "@/app/src";

const page = () => {
  const data = {
    background: [
      "#c3b1ab",
      "#d1e4dd",
      "#ffffffd9",
      "#1b1f24",
      "#1c2c6c",
      "#fafafa",
      "#abd6f573",
      "#2667ff",
      "#f3f3f3",
    ],
    color: [
      "#00c39a",
      "#28303d",
      "#5d5d5d",
      "#ffffff",
      "#000000",
      "#2667ff",
      "#abd6f573",
      "#2667ff",
      "#f3f3f3",
    ],
    variations: "4",
    accordions: [
      {
        title: "What is web hosting, and why do I need it?",
        content:
          "Web hosting is a service that provides the infrastructure to make your website accessible on the internet. It stores your website’s files on a server, allowing users to access your site at any time.",
      },
      {
        title: "How do I know which hosting plan is right for me?",
        content:
          "Choosing the ideal hosting plan depends on factors like your website’s size, anticipated traffic, and specific needs. Our team can assist in assessing your requirements.",
      },
      {
        title: "What security measures are in place to protect my website?",
        content:
          "We prioritize your website’s security. Our hosting services include robust security protocols, such as firewalls, malware detection, regular backups, and SSL certificates.",
      },
      {
        title: "Can I transfer an existing domain to your hosting service?",
        content:
          "Absolutely! You can transfer your existing domain to our hosting platform seamlessly. Our team can guide you through the process, ensuring a smooth transition while consolidating your domain and hosting management in one place.",
      },
    ],
  };
  

  const loopContentX = Array.from({ length: 6 }, (_, index) => {
    return (
      <Block
        styles="py-20 px-4 md:px-0 pb-24 grid place-items-center"
        style={{ backgroundColor: data.background[index] }}
        key={index}>
        <Text
          tagName="h4"
          styles="text-center text-lg font-semibold mb-12"
          style={{ color: data.color[index] }}>
          Variation - {index + 1}
        </Text>
        {/* Include loopContent directly inside loopContentX */}
        <Block styles="md:w-[65%] lg:w-[73%] flex items-center justify-center gap-8">
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
                Nature is the embodiment of the Earth&apos;s beauty, encompassing
                everything from lush forests and towering mountains to serene
                lakes and vibrant ecosystems.
              </Text>
            </CardContent>
          </Card>
        </Block>
      </Block>
    );
  });
  return (
    <Block tagName={"div"} styles="scroll-smooth flex w-full ">
      <Block styles="w-full">
        <Text
          tagName={"h2"}
          styles="text-center px-5 text-3xl mb-2 mt-20 font-medium ">
          Card
        </Text>
        <Text tagName="p" styles="text-center mb-20">
          Variations for Card Component
        </Text>
        {/* <Block styles="w-1/4 p-10">
          <Card styles="shadow-[-14px_-14px_1px_0px_#C5AEA7] hover:shadow-[-10px_-10px_6px_0px_#C5AEA7] transition-all duration-300 ease-in-out">
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
                Nature is the embodiment of the Earth&apos;s beauty, encompassing
                everything from lush forests and towering mountains to serene
                lakes and vibrant ecosystems.
              </Text>
            </CardContent>
          </Card>
        </Block> */}
        <Block styles="w-full">{loopContentX}</Block>
      </Block>
    </Block>
  );
};

export default page;


import { Block, Text, Avatar, AvatarGroup } from "@/app/src";

const page = () => {
  const data = {
    background: [
      "#d1e4dd",
      "#1b1f24",
      "#ffffffd9",
      "#1b1f24",
      "#1c2c6c",
      "#fafafa",
      "#abd6f573",
      "#2667ff",
      "#f3f3f3",
    ],
    color: [
      "#28303d",
      "#00c39a",
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
  const variationsX = parseInt(data.variations); // Convert variations to an integer

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
        <Block styles="md:w-[65%] lg:w-[73%] grid place-items-center">
          <AvatarGroup variant={index + 1}>
            {Array.from({ length: variationsX }, (_, loopIndex) =>
              loopIndex === 2 ? (
                <Avatar name="John Smith" variant={index + 1} key={loopIndex} />
              ) : (
                <Avatar
                  src={`https://source.unsplash.com/random/600x600?face=${loopIndex}`}
                  variant={index + 1}
                  key={index + 1}
                />
              )
            )}
          </AvatarGroup>
        </Block>
      </Block>
    );
  });
  return (
    <Block tagName={"div"} styles="scroll-smooth flex w-full  ">
      <Block styles="w-full">
        <Text
          tagName={"h2"}
          styles="text-center px-5 text-3xl mb-2 mt-20 font-medium ">
          Avatar
        </Text>
        <Text tagName="p" styles="text-center mb-20">
          Variations for Avatar Component
        </Text>
        <Block styles="w-full">{loopContentX}</Block>
      </Block>
    </Block>
  );
};

export default page;

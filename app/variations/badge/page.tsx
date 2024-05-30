import { Block, Text, Badge, Icon } from "@/app/src";

const BadgeVariations = () => {
  const data = {
    background: [
      "#1b1f24",
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

  const loopContentX = Array.from({ length: 5 }, (_, index) => {
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
          <Badge badgeValue={5} position="top left" variant={index + 1}>
            <Icon
              icon={index == 4 ? "fa-bell" : "fa-cart-shopping"}
              iconLibrary="font-awesome"
              iconStyles="text-2xl leading-none"
            />
          </Badge>
          <Badge badgeValue={5} position="bottom left" variant={index + 1}>
            <Icon
              icon={index == 4 ? "fa-bell" : "fa-cart-shopping"}
              iconLibrary="font-awesome"
              iconStyles="text-2xl leading-none"
            /></Badge>
          <Badge badgeValue={5} position="top right" variant={index + 1}>
            <Icon
              icon={index == 4 ? "fa-bell" : "fa-cart-shopping"}
              iconLibrary="font-awesome"
              iconStyles="text-2xl leading-none"
            />
          </Badge>
          <Badge badgeValue={5} position="bottom right" variant={index + 1}>
            <Icon
              icon={index == 4 ? "fa-bell" : "fa-cart-shopping"}
              iconLibrary="font-awesome"
              iconStyles="text-2xl leading-none"
            />
          </Badge>

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
          Badge
        </Text>
        <Text tagName="p" styles="text-center mb-20">
          Variations for Badge Component
        </Text>
        <Block styles="w-full">{loopContentX}</Block>
      </Block>
    </Block>
  );
};

export default BadgeVariations;

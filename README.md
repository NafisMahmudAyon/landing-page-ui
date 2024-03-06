# Landing Page UI

The Landing Page UI package is a collection of reusable React components designed to facilitate the creation of beautiful and responsive landing pages. This package aims to simplify the process of building landing pages by providing pre-styled components that are customizable and easy to integrate into your projects.

## Features

- **Responsive Design**: All components are built with responsiveness in mind, ensuring that your landing page looks great on various devices and screen sizes.
- **Easy Customization**: Each component comes with customizable props, allowing you to tailor the appearance and behavior to suit your specific needs.
- **Modular and Reusable**: Components are designed to be modular and reusable, promoting code reuse and maintainability.
- **Modern Design**: The components feature modern and visually appealing designs, helping to create engaging landing pages that leave a lasting impression on visitors.

## Installation

To install the Landing Page UI package, simply run:

``` node
npm install landing-page-ui
```





## Components

### 1. Block

The `Block` component is a container element that allows you to wrap other components or content within it. It provides flexibility in styling and layout, allowing you to apply custom styles or classes to encapsulate specific sections of your UI.

```jsx
import { Block } from 'landing-page-ui'

<Block>
  ...
</Block>
```

#### props:

| Prop | Type | Description |
|---|---|----------|
| tagName | String | It can be any HTML Tag name. `h1`, `h2`, `h3`, ...., `p`, `div` etc. Default value is `div`. |
| style | String | This props is like className for the `Block` component. |
|isLink| Boolean | Indicates whether the Block should behave as a link. |
| linkTo | String | The URL to which the Block should navigate if it is a link. |
| target | String | Specifies the target window or frame when the link is clicked. |
| variant | String | Specifies the variant of the `Block` component. This prop can be used to apply predefined styles or behavior variations to the Block. |

### 2. Text

The `Text` component is used for displaying textual content such as headings, paragraphs, or any other text-based information. It supports various text formatting options like font size, color, weight, and alignment, allowing you to customize the appearance of text in your UI.

```jsx
import { Text } from 'landing-page-ui'

<Text>
  ...
</Text>
```

#### props:

| Prop | Type | Description |
|---|---|----------|
| tagName | String | It can be any HTML Tag name. ```h1```, ```h2```, ```h3```, ...., ```p```, ```div``` etc. Default value is ```div```. |
| style | String | This props is like className for the ```Wrapper``` component. |
|isLink| Boolean | Indicates whether the Wrapper should behave as a link. |
| linkTo | String | The URL to which the Wrapper should navigate if it is a link. |
| target | String | Specifies the target window or frame when the link is clicked. |
| variant | String | Specifies the variant of the `Text` component. This prop can be used to apply predefined styles or behavior variations to the wrapper. |

### 3. Image

The `Image` component is used to display images within your application. It provides support for loading and displaying images from different sources, including local files or remote URLs. Additionally, it allows you to set attributes such as alt text, caption, lazyload, and styling properties to control the presentation of images.

Furthermore, the `Image` component supports a lightbox feature, allowing users to view larger versions of the image in a modal overlay when clicked. This feature enhances the user experience by providing a convenient way to inspect images in detail without navigating away from the current page.

```jsx
import { Image } from 'landing-page-ui'

<Image />
```

#### props:

| Prop | Type | Description |
|---|---|----------|
| tagName | String | It can be any HTML Tag name. ```h1```, ```h2```, ```h3```, ...., ```p```, ```div``` etc. Default value is ```div```. |
| style | String | This props is like className for the ```Wrapper``` component. |
| src | String | The URL or path to the image file. |
|isLink| Boolean | Indicates whether the Wrapper should behave as a link. |
| linkTo | String | The URL to which the Wrapper should navigate if it is a link. |
| target | String | Specifies the target window or frame when the link is clicked. |
| imageStyle | String | Additional styling applied to the image element. |
| altText | String | Alternative Text for the Image. |
|captionEnabled | Boolean | Indicates whether the image caption should be displayed. |
| imageCaption | String | The caption text for the image. |
| captionStyle | String | Styling applied to the image caption. |
| lightBox | Boolean | Specifies whether the lightbox feature is enabled for the image. |
| lightBoxStyle | String | Additional styling applied to the lightbox container. |
| lightBoxImageSrc | String | The URL or path to the larger image displayed in the lightbox. |
| lightBoxImageStyle | String | Additional styling applied to the image in the lightbox. |
| lightBoxCaption | String | The caption text displayed in the lightbox. |
| lightBoxCaptionEnabled | String | Indicates whether the caption is enabled in the lightbox. |
| lightBoxCaptionStyle | String | Styling applied to the caption in the lightbox. |
| closeButtonStyle | String | Styling applied to the close button in the lightbox. |
| lazyLoad | Boolean | Specifies whether lazy loading of the image is enabled. |
| variant | String | Specifies the variant of the `Image` component. This prop can be used to apply predefined styles or behavior variations to the wrapper. |

### 4. Image Gallery

The `Image Gallery` component is a collection of images displayed in a gallery layout. It allows users to browse through multiple images with navigation controls such as arrows or thumbnails. This component is ideal for showcasing a collection of photos or visual content in a visually appealing manner.

### 5. Grid

The `Grid` component is a layout container that arranges its child elements in a grid-like structure. It provides a flexible and responsive layout system, allowing you to define the number of columns, row spacing, and column spacing. Grids are commonly used for organizing content in a structured and orderly manner.

### 6. Flex

The `Flex` component is a layout container that uses a flexible box model to arrange its child elements. It allows you to create flexible and dynamic layouts by specifying properties such as flex direction, alignment, and ordering. Flex layouts are well-suited for building responsive designs and complex UI arrangements.

### 7. Accordion

The `Accordion` component is a collapsible content container that allows users to expand or collapse sections of content. It consists of a series of panels, each containing a header and a collapsible body. Accordion panels are commonly used for presenting information in a compact and organized manner, such as FAQs or product features.

### 8. Tabs

The `Tabs` component is a navigational interface that organizes content into separate tabs. Each tab represents a distinct section of content, allowing users to switch between them easily. Tabs are useful for presenting multiple pieces of related information within a confined space while maintaining a clear and structured layout.

### 9. Icon

This Icon component allows you to display an icon or image and supports various icon libraries like Material Icons, Bootstrap Icons, and Font Awesome. It also provides options for styling the icon and handling click events. Additionally, it dynamically loads the necessary stylesheet based on the specified icon library.

### 10. Icon Button

The `Icon Button` component is a clickable button element that displays an icon or image. It is commonly used for triggering actions or functions within the application, such as submitting forms, navigating to different pages, or toggling menu items. Icon buttons provide a visually intuitive way to interact with the user interface.

### 11. List

The `List` component is used for displaying a collection of items in a vertical or horizontal list format. It supports various list types, including ordered lists (numbered) and unordered lists (bulleted). Lists are versatile components that can be customized and styled to meet different design requirements.

### 12. Avatar

### 13. Badge

### 14. Theme Switcher Hook

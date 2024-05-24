import React from 'react'
import { Block, Divider, Icon, Text } from '../src'
import CodeSnippet from '@/components/CodeSnippet'
import RightSideBar from '@/components/RightSideBar'

const page = () => {
  return (
    <Block styles="scroll-smooth md:w-[65%] lg:w-[73%] pb-10">
      <Block styles="relative">
        <Block styles="my-2">
          <Text tagName="h1" styles="text-2xl !font-medium">
            Introduction - Landing Page UI
          </Text>
          <Text tagName="p" styles="text-base">
            Landing Page UI is a React component library that provides a set of
            React components for building landing pages. Discover our Landing
            Page UI Kit, a seamless blend of React and Tailwind CSS components,
            perfect for effortlessly creating captivating landing pages.
          </Text>
        </Block>
        <Block styles="mb-2 ">
          <Text
            tagName="h2"
            id="vite-install"
            styles="text-xl pt-[62px] !font-medium group flex items-center ">
            Vite Installation
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#vite-install"
              iconStyles="mx-3 hidden dark:bg-gray-800 group-hover:inline-block p-1 rounded-md shadow-md text-sm bg-gray-200"
            />
          </Text>
          <Divider />
          <Text tagName="p" styles="text-base my-2 mt-8">
            <code className="px-2 bg-gray-200 dark:bg-gray-800 py-1 rounded-md ">
              Step 1:
            </code>{" "}
            Create React Project using Vite
          </Text>
          <CodeSnippet
            lang="bash"
            bodyStyles="shadow-lg border-b border-x border-gray-200/10 rounded-b-lg pb-2 pt-2 "
            content={`npm create vite@latest my-project -- --template react 
cd my-project`}
          />
          <Text tagName="p" styles="text-base my-2 mt-8">
            <code className="px-2 bg-gray-200 dark:bg-gray-800 py-1 rounded-md ">
              Step 2:
            </code>{" "}
            Install Landing Page UI
          </Text>
          <CodeSnippet
            lang="bash"
            bodyStyles="shadow-lg border-b border-x border-gray-200/10 rounded-b-lg pb-2 pt-2 "
            content={`npm i landing-page-ui `}
          />
          <Text tagName="p" styles="text-base my-2 mt-8">
            <code className="px-2 bg-gray-200 dark:bg-gray-800 py-1 rounded-md ">
              Step 3:
            </code>{" "}
            Install Tailwind CSS
          </Text>
          <CodeSnippet
            lang="bash"
            bodyStyles="shadow-lg border-b border-x border-gray-200/10 rounded-b-lg pb-2 pt-2 "
            content={`npm i autoprefixer postcss tailwindcss
npx tailwindcss init -p`}
          />
          <Text tagName="p" styles="text-base my-2 mt-8">
            <code className="px-2 bg-gray-200 dark:bg-gray-800 py-1 rounded-md ">
              Step 4:
            </code>{" "}
            Configure Tailwind CSS
          </Text>
          <CodeSnippet
            lang="js"
            bodyStyles="shadow-lg border-b border-x border-gray-200/10 rounded-b-lg pb-2 pt-2 "
            content={`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} `}
          />
          <Text tagName="p" styles="text-base my-2 mt-8">
            <code className="px-2 bg-gray-200 dark:bg-gray-800 py-1 rounded-md ">
              Step 5:
            </code>{" "}
            Add Tailwind CSS in <code className="code">./src/index.css</code>
          </Text>
          <CodeSnippet
            lang="css"
            bodyStyles="shadow-lg border-b border-x border-gray-200/10 rounded-b-lg pb-2 pt-2 "
            content={`@tailwind base;
@tailwind components;
@tailwind utilities; `}
          />
          <Text tagName="p" styles="text-base my-2 mt-8">
            <code className="px-2 bg-gray-200 dark:bg-gray-800 py-1 rounded-md ">
              Step 6:
            </code>{" "}
            Run the React Project
          </Text>
          <CodeSnippet
            lang="bash"
            bodyStyles="shadow-lg border-b border-x border-gray-200/10 rounded-b-lg pb-2 pt-2 "
            content={`npm run dev `}
          />
          <Text tagName="p" styles="text-base my-2 mt-8">
            <code className="px-2 bg-gray-200 dark:bg-gray-800 py-1 rounded-md ">
              Step 7:
            </code>{" "}
            Start using Landing Page UI in your project
          </Text>
          <CodeSnippet
            lang="jsx"
            bodyStyles="shadow-lg border-b border-x border-gray-200/10 rounded-b-lg pb-2 pt-2 "
            content={`import { Text } from "landing-page-ui";
  const App=()=>{
    return (
      <Text 
      tagName="h2"
      styles="text-3xl !font-bold text-blue-500">
        Hello From Landing Page UI
      </Text>
    )
  }
export default App; `}
          />
        </Block>
        <Block styles="mb-2 ">
          <Text
            tagName="h2"
            id="next-js-install"
            styles="text-xl pt-[62px] !font-medium group flex items-center ">
            Next.JS Installation
            <Icon
              icon="fa-link"
              iconLibrary="font-awesome"
              isLink={true}
              linkTo="#next-js-install"
              iconStyles="mx-3 hidden dark:bg-gray-800 group-hover:inline-block p-1 rounded-md shadow-md text-sm bg-gray-200"
            />
          </Text>
          <Divider />
          <Text tagName="p" styles="text-base my-2 mt-8">
            <code className="px-2 bg-gray-200 dark:bg-gray-800 py-1 rounded-md ">
              Step 1:
            </code>{" "}
            Create React Project using Next.JS
          </Text>
          <CodeSnippet
            lang="bash"
            bodyStyles="shadow-lg border-b border-x border-gray-200/10 rounded-b-lg pb-2 pt-2 "
            content={`npx create-next-app@latest`}
          />
          <Text tagName="p" styles="text-base my-2 mt-8">
            <code className="px-2 bg-gray-200 dark:bg-gray-800 py-1 rounded-md ">
              Step 2:
            </code>{" "}
            Install Landing Page UI
          </Text>
          <CodeSnippet
            lang="bash"
            bodyStyles="shadow-lg border-b border-x border-gray-200/10 rounded-b-lg pb-2 pt-2 "
            content={`npm i landing-page-ui `}
          />
          <Text tagName="p" styles="text-base my-2 mt-8">
            <code className="px-2 bg-gray-200 dark:bg-gray-800 py-1 rounded-md ">
              Step 3:
            </code>{" "}
            Run the React Project
          </Text>
          <CodeSnippet
            lang="bash"
            bodyStyles="shadow-lg border-b border-x border-gray-200/10 rounded-b-lg pb-2 pt-2 "
            content={`npm run dev `}
          />
          <Text tagName="p" styles="text-base my-2 mt-8">
            <code className="px-2 bg-gray-200 dark:bg-gray-800 py-1 rounded-md ">
              Step 4:
            </code>{" "}
            Start using Landing Page UI in your project
          </Text>
          <CodeSnippet
            lang="jsx"
            bodyStyles="shadow-lg border-b border-x border-gray-200/10 rounded-b-lg pb-2 pt-2 "
            content={`import { Text } from "landing-page-ui";
  const App=()=>{
    return (
      <Text 
      tagName="h2"
      styles="text-3xl !font-bold text-blue-500">
        Hello From Landing Page UI
      </Text>
    )
  }
export default App; `}
          />
        </Block>
      </Block>
      <RightSideBar id="rightSideBar">
        <Text styles="text-lg !font-bold pt-3 pl-3 pb-4 ">ON THIS PAGE</Text>
        <Text
          styles="text-sm block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
          isLink={true}
          linkTo="#vite-install">
          Vite React Application
        </Text>
        <Text
          styles="text-sm block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
          isLink={true}
          linkTo="#next-js-install">
          Next.JS React Application
        </Text>
      </RightSideBar>
    </Block>
  )
}

export default page
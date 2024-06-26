'use client';
import React from 'react';
import { Accordion, AccordionHeader, Text, AccordionDetails, Icon } from '@/app/src'; // adjust the import paths

const Page = () => {
  
const handleClick = () => {
  console.log("first")
}
  return (
    <div>
      <Accordion 
      // active={true} 
      variant="1">
        <AccordionHeader>
          <Text
            tagName="h3"
            styles=" text-xl font-medium !text-gray-200 ">
            Accordion 1
          </Text>
        </AccordionHeader>
        <AccordionDetails>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.	Minima deserunt sapiente nostrum iure excepturi vel debitis,	quae quibusdam officiis. Atque nesciunt pariatur praesentium	optio, at vel harum aliquam illo labore?
          </Text>
        </AccordionDetails>
      </Accordion>
      <Accordion 
      // active={true} 
      variant="1">
        <AccordionHeader>
          <Text
            tagName="h3"
            styles=" text-xl font-medium !text-gray-200 ">
            Accordion 1
          </Text>
        </AccordionHeader>
        <AccordionDetails>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.	Minima deserunt sapiente nostrum iure excepturi vel debitis,	quae quibusdam officiis. Atque nesciunt pariatur praesentium	optio, at vel harum aliquam illo labore?
          </Text>
        </AccordionDetails>
      </Accordion>
      <Icon icon="sun-set icofont-2x" iconLibrary='icofont-icons' iconStyles='h-10 w-10 flex items-center justify-center border rounded-full shadow-lg hover:shadow-none ' title="Sun Set" />
      <Text onClick={handleClick}></Text>
    </div>
  );
};

export default Page;

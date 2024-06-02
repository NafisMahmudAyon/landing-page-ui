'use client';
import React from 'react';
import { Accordion, AccordionHeader, Text, AccordionDetails } from '@/app/src'; // adjust the import paths

const Page = () => {
  

  return (
    <div>
      <Accordion active={true} variant="1">
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
    </div>
  );
};

export default Page;

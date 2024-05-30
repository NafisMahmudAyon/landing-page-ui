'use client';
import React, { useState } from 'react';
import { RadioGroup, Radio } from '@/app/src'; // adjust the import paths

const Page = () => {
  const [selectedValue, setSelectedValue] = useState("option2");

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <RadioGroup name="myRadioGroup" defaultValue='option2' onChange={handleRadioChange}>
        <Radio id="option1" value="option1" label="Option 1" />
        <Radio id="option2" value="option2" label="Option 2" />
        <Radio id="option3" value="option3" label="Option 3" />
      </RadioGroup>
      <p>Selected Value: {selectedValue}</p>
      <Radio id="option5" value="option1" label="Option 1" />
    </div>
  );
};

export default Page;

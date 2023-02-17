import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'getbasecore/src/utils/reset/core_reset.scss';
import 'getbasecore/src/utils/grid-layout/core_grid-layout.scss';
import 'getbasecore/src/components/atoms/Typography/core_typography.scss';

import { BtnSimple } from 'getbasecore/Atoms';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/BtnSimple',
  component: BtnSimple,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof BtnSimple>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BtnSimple> = (args) => (
  <BtnSimple {...args}>Button</BtnSimple>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  css: 'btn-simple--1',
  type: 'button',
};
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'BtnSimple',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'BtnSimple',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'BtnSimple',
// };

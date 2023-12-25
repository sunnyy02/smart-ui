import { StoryFn, Meta } from "@storybook/react";
import SmartRating from "./SmartRating";

export default {
  title: "ReactComponentLibrary/Rating",
  component: SmartRating,
} as Meta<typeof SmartRating>;

const Template: StoryFn<typeof SmartRating> = (args) => <SmartRating {...args} />;

export const RatingTest = Template.bind({});
RatingTest.args = {
  title: "Default theme",
  theme: "primary",
  testIdPrefix: "rating",
};

export const RatingSecondary = Template.bind({});
RatingSecondary.args = {
  title: "Secondary theme",
  theme: "secondary",
  testIdPrefix: "rating",
};

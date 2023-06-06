import type { Meta, StoryObj } from "@storybook/react";

import ProfilePic from "../components/ProfilePic/ProfilePic";

const meta: Meta<typeof ProfilePic> = {
  title: "Components/ProfilePic",
  component: ProfilePic,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProfilePic>;

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

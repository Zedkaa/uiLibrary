import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button/Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "outline", "ghost", "danger"],
      },
    },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
  args: {
    variant: "primary",
    size: "medium",
    disabled: false,
    loading: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Primary Button",
    disabled: false,
    loading: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    children: "Secondary Button",
    disabled: false,
    loading: false,
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "medium",
    children: "Outline Button",
    disabled: false,
    loading: false,
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "medium",
    children: "Ghost Button",
    disabled: false,
    loading: false,
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    size: "medium",
    children: "Danger Button",
    disabled: false,
    loading: false,
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: "Large Button",
    disabled: false,
    loading: false,
  },
};

export const Medium: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Medium Button",
    disabled: false,
    loading: false,
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "small",
    children: "Small Button",
    disabled: false,
    loading: false,
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Disabled Button",
    disabled: true,
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Loading...",
    disabled: false,
    loading: true,
  },
};

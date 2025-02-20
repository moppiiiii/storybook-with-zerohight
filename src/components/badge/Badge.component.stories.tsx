import type { Meta, StoryObj } from "@storybook/react";

import BadgeComponent from "./Badge.component";

const meta: Meta<typeof BadgeComponent> = {
	title: "Components/Badge",
	tags: ["autodocs"],
	component: BadgeComponent,
};

export default meta;

type Story = StoryObj<typeof BadgeComponent>;

export const Default: Story = {
	args: {
		children: "Badge",
		badgeContent: 5,
	},
};

export const OverMax: Story = {
	args: {
		children: "Badge",
		badgeContent: 1000,
	},
};
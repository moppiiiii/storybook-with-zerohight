import type { Meta, StoryObj } from "@storybook/react";

import BadgeComponent from "./Badge.component";

const meta: Meta<typeof BadgeComponent> = {
	title: "Components/Badge",
	tags: ["autodocs"],
	component: BadgeComponent,
	decorators: [
		(Story) => (
			<div style={{height: 100, paddingBlock: 7}}>
				<Story />
			</div>
		)
	]
};

export default meta;

type Story = StoryObj<typeof BadgeComponent>;

export const Default: Story = {
	args: {
		children: <div style={{background: "purple"}}>BADGE</div>,
		badgeContent: 5,
	},
};

export const OverMax: Story = {
	args: {
		children: <div style={{background: "purple"}}>BADGE</div>,
		badgeContent: 1000,
	},
};
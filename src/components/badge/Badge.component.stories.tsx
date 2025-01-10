import type { Meta, StoryObj } from "@storybook/react";
import MailIcon from "@mui/icons-material/Mail";

import BadgeComponent from "./Badge.component";

const meta: Meta<typeof BadgeComponent> = {
	title: "Components/Badge",
	tags: ["autodocs"],
	component: BadgeComponent,
	argTypes: {
		badgeContent: {
			description: "バッジに表示する内容",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "0" },
			},
		},
		color: {
			control: { type: "select" },
			options: ["primary", "secondary", "error", "info", "success", "warning"],
			description: "バッジの色を選択",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "primary" },
			},
		},
		max: {
			control: { type: "number" },
			description: "表示する数値の最大値",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "999" },
			},
		},
		invisible: {
			control: { type: "boolean" },
			description: "バッジを非表示にするかどうか",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
			description: "バッジのサイズ",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "md" },
			},
		},
		showZero: {
			control: { type: "boolean" },
			description: "0 の場合でも表示するかどうか",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		variant: {
			control: { type: "select" },
			options: ["standard", "dot"],
			description: "バッジの表示スタイル (standard / dot)",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "standard" },
			},
		},
		children: {
			description: "バッジが付与される要素",
			table: {
				type: { summary: "ReactNode" },
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof BadgeComponent>;

export const Default: Story = {
	args: {
		badgeContent: 5,
	},
};

export const Small: Story = {
	args: {
		badgeContent: 5,
		color: "primary",
		size: "sm",
	},
};

export const Medium: Story = {
	args: {
		badgeContent: 5,
		color: "primary",
		size: "md",
	},
};

export const Large: Story = {
	args: {
		badgeContent: 5,
		color: "primary",
		size: "lg",
	},
};

export const IconBadge: StoryObj<typeof BadgeComponent> = {
	args: {
		badgeContent: 4,
		color: "primary",
		size: "md",
		children: <MailIcon />,
	},
};

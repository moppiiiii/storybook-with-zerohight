import type { Meta, StoryObj } from "@storybook/react";
import ButtonComponent from "./Button.component";

const meta: Meta<typeof ButtonComponent> = {
	title: "Components/Button",
	tags: ["autodocs"],
	component: ButtonComponent,
	argTypes: {
		color: {
			control: { type: "select" },
			options: ["primary", "secondary", "error", "info", "success", "warning"],
			description: "ボタンの色を選択",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "contained" },
			},
		},
		variant: {
			control: { type: "select" },
			options: ["contained", "outlined", "text"],
			description: "ボタンのバリエーションを選択",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "contained" },
			},
		},
		disabled: {
			control: { type: "boolean" },
			description: "ボタンが無効化されているかどうか",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		onClick: {
			description: "ボタンがクリックされたときに呼び出される関数",
			table: {
				type: { summary: "function" },
			},
		},
		size: {
			control: { type: "select" },
			options: ["small", "medium", "large"],
			description: "ボタンのサイズを選択",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "medium" },
			},
		},
		children: {
			description: "ボタンの子要素",
			table: {
				type: { summary: "ReactNode" },
			},
		},
	},
};
export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Standard: Story = {
	args: {
		children: "Standard Button",
		variant: "contained",
		color: "success",
	},
};

export const Outline: Story = {
	args: {
		children: "Outline Button",
		variant: "outlined",
	},
};

export const Text: Story = {
	args: {
		children: "Text Button",
		variant: "text",
	},
};

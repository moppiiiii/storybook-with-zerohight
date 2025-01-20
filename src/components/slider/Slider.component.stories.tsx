import type { Meta, StoryObj } from "@storybook/react";
import SliderComponent from "./Slider.component";

const meta: Meta<typeof SliderComponent> = {
    title: "Components/Slider",
	tags: ["autodocs"],
	component: SliderComponent,
}
export default meta;

type Story = StoryObj<typeof SliderComponent>;

export const Standard: Story = {
	render: () => (
		<div style={{ width: "300px" }}>
			<SliderComponent />
		</div>
	),
};

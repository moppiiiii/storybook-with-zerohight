import Button from "@mui/material/Button";
import type { ButtonComponentProps } from "./type";

const ButtonComponent: React.FC<ButtonComponentProps> = ({
	children,
	color = "primary",
	variant = "text",
	disabled = false,
	onClick,
	size = "medium",
}) => {
	return (
		<Button
			color={color}
			variant={variant}
			disabled={disabled}
			onClick={onClick}
			size={size}
			style={{ textTransform: "none" }}
		>
			{children}
		</Button>
	);
};

export default ButtonComponent;

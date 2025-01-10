import Badge from "@mui/material/Badge";
import type { BadgeComponentProps } from "./type";

const BadgeComponent: React.FC<BadgeComponentProps> = ({
	badgeContent,
	color = "primary",
	max = 999,
	size = "md",
	invisible = false,
	showZero = false,
	variant = "standard",
	children,
}) => {
	let padding = "0 4px";
	let badgeHeight = 22;
	let fontSize = 9;
	let borderRadius = 10;

	switch (size) {
		case "sm":
			padding = "0 4px";
			badgeHeight = 14;
			fontSize = 6;
			borderRadius = 2;
			break;
		case "md":
			padding = "0 4px";
			borderRadius = 10;
			badgeHeight = 22;
			fontSize = 12;
			break;
		case "lg":
			padding = "0 4px";
			badgeHeight = 30;
			fontSize = 16;
			break;
	}

	return (
		<Badge
			sx={{
				"& .MuiBadge-badge": {
					padding,
					fontSize,
					height: badgeHeight,
					minWidth: badgeHeight,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					borderRadius
				},
			}}
			badgeContent={badgeContent}
			color={color}
			max={max}
			invisible={invisible}
			showZero={showZero}
			variant={variant}
		>
			{children}
		</Badge>
	);
};

export default BadgeComponent;

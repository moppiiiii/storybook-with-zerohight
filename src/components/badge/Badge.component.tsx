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

	switch (size) {
		case "sm":
			padding = "0";
			badgeHeight = 14;
			fontSize = 6;
			break;
		case "md":
			badgeHeight = 22;
			fontSize = 12;
			break;
		case "lg":
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
					borderRadius: "50%",
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

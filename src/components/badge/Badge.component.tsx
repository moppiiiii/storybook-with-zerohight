import { Badge as MuiBadge } from "@mui/material";
import type { BadgeProps as MuiBadgeProps } from "@mui/material";

const Badge: React.FC<MuiBadgeProps> = ({
  badgeContent,
  children,
  color = "primary",
  variant = "standard",
  ...props
}) => {
  const finalBadgeContent = variant === "dot" ? undefined : badgeContent;

  return (
    <MuiBadge
      badgeContent={finalBadgeContent}
      color={color}
      max={999}
      variant={variant}
      {...props}
    >
      {children}
    </MuiBadge>
  );
};

export default Badge;

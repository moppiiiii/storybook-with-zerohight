import { Badge as MuiBadge } from "@mui/material";
import type { BadgeProps as MuiBadgeProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(MuiBadge)<BadgeProps>(({ ...props }) => ({
  "& .MuiBadge-badge": {
    display: "inline-flex",
    verticalAlign: "middle",
    borderRadius: "100px",
    border: "1px solid #FFF",

    // variant が "dot" の場合のスタイル
    ...(props.variant === "dot"
      ? {
          "&.MuiBadge-dot": {
            transform: "scale(0.75)",
            transformOrigin: "center",
          },
        }
      : {
          // variantが "dot" 以外の通常バッジのスタイル
          height: 16,
          minWidth: 16,
          maxWidth: 34,
          padding: "0px 4px",
          color: "#FFF",
          fontFamily: "Noto Sans",
          fontSize: 11,
          fontWeight: 700,
          lineHeight: 0,
          letterSpacing: 0,
        }),

    // colorが "primary" の場合の背景色
    ...(props.color === "primary" && {
      background: "#056FCF",
    }),

    // colorが "error" の場合の背景色
    ...(props.color === "error" && {
      background: "#F00",
    }),

    // disabled が true の場合のスタイル
    ...(props.disabled && {
      color: "#FFF",
      background: "linear-gradient(0deg, rgba(0, 9, 26, 0.30) 0%, rgba(0, 9, 26, 0.30) 100%), #FFF"
    }),
  },
}));

export type BadgeProps = {
  /**
   * The content of the badge.
   *
   * @remarks
   * A numeric value that will be displayed as the badge content.
   * If the `variant` prop is set to `dot`, this value is ignored.
   */
  badgeContent?: number;

  /**
   * The color of the badge.
   *
   * @defaultValue "primary"
   */
  color?: "primary" | "error";

  /**
   * Whether the badge is disabled.
   *
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * The badge variant to use.
   *
   * @remarks
   * - `standard` (default): Shows the numeric `badgeContent`.
   * - `dot`: Shows only a small dot (ignores `badgeContent`).
   *
   * @defaultValue "standard"
   */
  variant?: "standard" | "dot";

  invisible?: MuiBadgeProps["invisible"];
  showZero?: MuiBadgeProps["showZero"];
  slotProps?: MuiBadgeProps["slotProps"];
  slots?: MuiBadgeProps["slots"];
  sx?: MuiBadgeProps["sx"];
} & Omit<
  MuiBadgeProps,
  | "anchorOrigin"
  | "badgeContent"
  | "classes"
  | "color"
  | "max"
  | "variant"
  | "components"
  | "componentsProps"
  | "overlap"
>;

const Badge: React.FC<BadgeProps> = ({
  badgeContent,
  children,
  color = "primary",
  disabled = false,
  variant = "standard",
  ...props
}) => {
  const finalBadgeContent = variant === "dot" ? undefined : badgeContent;

  return (
    <StyledBadge
      badgeContent={finalBadgeContent}
      color={color}
      disabled={disabled}
      max={999}
      variant={variant}
      {...props}
    >
      {children}
    </StyledBadge>
  );
};

export default Badge;

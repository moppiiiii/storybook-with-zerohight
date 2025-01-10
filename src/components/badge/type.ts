import type { BadgeProps } from "@mui/material/Badge";

export type BadgeComponentProps = {
	/**
	 * バッジに表示する内容
	 */
	badgeContent: BadgeProps["badgeContent"];
	/**
	 * バッジの色 (省略時は 'primary')
	 */
	color?: BadgeProps["color"];
	/**
	 * 表示する数値の最大値 (省略時は 99)
	 */
	max?: BadgeProps["max"];
	/**
	 * バッジを非表示にするかどうか (省略時は false)
	 */
	invisible?: BadgeProps["invisible"];
	/**
	 * バッジのサイズ (省略時は 'medium')
	 */
	size?: "sm" | "md" | "lg";
	/**
	 * 0 の場合でも表示するかどうか (省略時は false)
	 */
	showZero?: BadgeProps["showZero"];
	/**
	 * バッジの形状 (省略時は 'standard')
	 */
	variant?: BadgeProps["variant"];
	/**
	 * バッジが付与される要素
	 */
	children: React.ReactNode;
};

import type { ButtonProps } from "@mui/material/Button";

export type ButtonComponentProps = {
	/**
	 * ボタンの色 (省略時は 'primary')
	 */
	color?: ButtonProps["color"];
	/**
	 * ボタンのバリエーション (省略時は 'contained')
	 */
	variant?: ButtonProps["variant"];
	/**
	 * ボタンが無効化されているかどうか (省略時は false)
	 */
	disabled?: boolean;
	/**
	 * ボタンがクリックされたときに呼び出される関数
	 */
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	/**
	 * ボタンのサイズ (省略時は 'medium')
	 */
	size?: ButtonProps["size"];
	/**
	 * ボタンの子要素
	 */
	children: React.ReactNode;
};

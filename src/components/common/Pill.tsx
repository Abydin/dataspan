"use client";
import classNames from "classnames";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	color?: string;
	hidePoint?: boolean;
};

export function Pill({
	className,
	color,
	children,
	hidePoint,
	...props
}: ButtonProps) {
	return (
		<button
			className={classNames(
				`rounded-full px-3 py-2 text-[${color}] bg-[${color}] flex justify-center items-center  text-xs font-medium border  border-current`,
				className
			)}
			{...props}
		>
			{!hidePoint && <div className={`h-2 w-2 rounded-full bg-current mr-2`} />}
			{children}
		</button>
	);
}

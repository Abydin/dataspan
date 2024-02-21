"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

type Props = {};

const tabs = [
	{
		label: "All groups",
		value: "/",
	},
	{
		label: "Train",
		value: "train",
	},
	{
		label: "Value",
		value: "value",
	},
	{
		label: "Test",
		value: "test",
	},
];

export default function DashboardTabs({}: Props) {
	const pathname = usePathname();
	const tab = useSearchParams().get("tab") ?? "/";
	return (
		<>
			{tabs.map(({ label, value }, idx) => (
				<Link
					className={classNames(
						"block w-max flex-shrink-0  px-6 py-2 text-sm font-medium leading-5 ",
						{
							"": tab !== value,
							" border-b-2 border-b-[#F2CC58] text-[#F2CC58] bg-[#F2CC58]/10":
								tab === value,
						}
					)}
					href={`${pathname}?tab=${value}`}
					key={value}
				>
					{label}
				</Link>
			))}
		</>
	);
}

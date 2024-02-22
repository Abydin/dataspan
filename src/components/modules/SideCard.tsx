"use client";

import React, { useCallback, useMemo } from "react";

import Image from "next/image";
import { Pill } from "@ui";
import { BinIcon } from "../icons";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

export const bones = [
	{
		name: "Elbow positive",
		color: "#3D9BE9",
		classes: 0,
	},
	{
		name: "Finger positive",
		color: "#BADA55",
		classes: 1,
	},
	{
		name: "Humerus",
		color: "#2CE1CB",
		classes: 2,
	},
	{
		name: "Forearm fracture",
		color: "#FFD75C",
		classes: 3,
	},
	{
		name: "Humerus fracture",
		color: "#F25858",
		classes: 4,
	},
	{
		name: "Shoulder fracture",
		color: "#F25858",
		classes: 5,
	},
	{
		name: "Wrist positive",
		color: "#D783FF",
		classes: 6,
	},
];

export default function SideCard({}: Props) {
	const searchParams = useSearchParams().get("polygon") ?? 4;
	const classe = useSearchParams().get("class");

	const router = useRouter();

	return (
		<div className="sticky top-8 h-[calc(100vh-4rem)] flex flex-col">
			<div className="h-16 w-60 relative mb-8">
				<Image src="/Logo.png" fill alt="logo" />
			</div>
			<div className="mb-3">
				<h2 className=" font-semibold text-sm">Classes filter</h2>
			</div>
			<div className="flex gap-x-4 mb-4">
				<button className="font-normal text-sm leading-[14.63px] text-[#D1D1D6]">
					Select all
				</button>
				<Link href="/">
					<button className="font-normal text-sm leading-[14.63px] text-[#2081D2]">
						Deselect all
					</button>
				</Link>
			</div>
			<div className="flex flex-wrap gap-3 mb-5">
				{bones.map(({ name, color, classes }) => (
					<Link key={name} href={`?class=${classes}`}>
						<Pill
							active={classe !== null && Number(classe) === classes}
							color={color}
							className={`!text-[${color}]`}
						>
							{name}
						</Pill>
					</Link>
				))}
			</div>
			<div className="mb-4">
				<h2 className=" font-semibold text-sm">Poligon range</h2>
			</div>
			<div className="flex flex-col">
				<div className="flex justify-between text-xs">
					<span>
						min <b className=" font-medium">0</b>
					</span>
					<span>
						max <b className=" font-medium">4</b>
					</span>
				</div>
				<div className="w-full mt-2">
					<input
						defaultValue={searchParams}
						type="range"
						className="w-full"
						min={0}
						max={4}
						onChange={(e) => router.push(`?polygon=${e.target.value}`)}
					/>
				</div>
			</div>
			<div className="flex items-center mt-4 justify-between">
				<Link href="/" className="text-xs font-semibold">
					<BinIcon className="inline-block mr-1" />
					Clear Filters
				</Link>

				<button className=" text-black/50 text-xs">Need help?</button>
			</div>
		</div>
	);
}

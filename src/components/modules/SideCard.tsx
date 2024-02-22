import React, { useMemo } from "react";
import { getRandomColor } from "@util";
import Image from "next/image";
import { Pill } from "@ui";
import { BinIcon } from "../icons";

type Props = {};

export default function SideCard({}: Props) {
	const bones = useMemo(
		() => [
			{
				name: "Elbow positive",
				color: getRandomColor(),
			},
			{
				name: "Finger positive",
				color: getRandomColor(),
			},
			{
				name: "Humerus",
				color: getRandomColor(),
			},
			{
				name: "Forearm fracture",
				color: getRandomColor(),
			},
			{
				name: "Humerus fracture",
				color: getRandomColor(),
			},
			{
				name: "Shoulder fracture",
				color: getRandomColor(),
			},
			{
				name: "Wrist positive",
				color: getRandomColor(),
			},
		],
		[]
	);
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
				<button className="font-normal text-sm leading-[14.63px] text-[#2081D2]">
					Deselect all
				</button>
			</div>
			<div className="flex flex-wrap gap-3 mb-5">
				{bones.map(({ name, color }) => (
					<Pill key={name} color={color} className={`!text-[${color}]`}>
						{name}
					</Pill>
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
					<input type="range" className="w-full" min={0} max={4} />
				</div>
			</div>
			<div className="flex items-center mt-4 justify-between">
				<button className="text-xs font-semibold">
					<BinIcon className="inline-block mr-1" />
					Clear Filters
				</button>

				<button className=" text-black/50 text-xs">Need help?</button>
			</div>
		</div>
	);
}

"use client";

import Image from "next/image";
import { Pill } from "@ui";
import { BinIcon } from "../components/icons";
import ImageCard from "../components/modules/ImageCard";
import { GlobalModals } from "../components/GlobalModal";
import { useEffect, useState } from "react";
import { getRandomColor, listAlbums, viewAlbums } from "../utils";
import DashboardTabs from "../components/modules/DashboardTabs";

export default function Home() {
	const [albumName, setAlbumName] = useState<string | undefined>();
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		const fetchAlbums = async () => {
			try {
				const val: string | undefined = await listAlbums();
				setAlbumName(val);
			} catch (error) {
				console.error("Error fetching albums:", error);
			}
		};

		fetchAlbums();
	}, []);

	useEffect(() => {
		const fetchAlbumData = async () => {
			if (albumName) {
				try {
					const val = await viewAlbums(albumName);
					setAlbums(val);
				} catch (error) {
					console.error("Error fetching album data:", error);
				}
			}
		};

		fetchAlbumData();
	}, [albumName]);

	const bones = [
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
	];

	return (
		<main className="min-h-screen ">
			<div className="grid gap-x-10  lg:grid-cols-4 lg:px-8">
				<div className="col-span-1 hidden lg:block border rounded-2xl px-4 py-3">
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
				</div>
				<div className="lg:col-span-3">
					<div className="flex flex-col">
						<div className="flex flex-col justify-between mb-12">
							<div className="flex justify-between items-baseline">
								<h1 className=" text-[32px] leading-10 font-semibold">
									Bone-fracture-detection
								</h1>
								<div className="flex gap-x-1.5 text-base leading-5 font-bold">
									<span>54</span>
									<span className="font-normal text-[#586A78]">0f</span>
									<span>{albums?.length || 0}</span>
									<span className="font-normal text-[#586A78]">images</span>
								</div>
							</div>
						</div>
						<div className="sticky flex mb-6">
							<DashboardTabs />
						</div>
						<div className="grid grid-cols-3  lg:grid-cols-9 gap-2">
							{Array.from(Array(54).keys()).map((_, index) => (
								<ImageCard key={index} />
							))}
						</div>
					</div>
				</div>
			</div>
			<GlobalModals />
		</main>
	);
}

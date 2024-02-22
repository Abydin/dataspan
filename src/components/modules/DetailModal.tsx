import React, { useEffect, useRef } from "react";
import { Modal, Pill } from "@ui";
import { bones } from "./SideCard";

const DetailModal = ({
	isOpen,
	onClose,
	photoUrl,
	coordinates,
	classes,
}: {
	isOpen: boolean;
	onClose: () => void;

	photoUrl: string;
	coordinates: { x: number; y: number }[];
	classes: string;
}) => {
	const canvasRef = useRef(null);

	const canvas: any = canvasRef.current;
	useEffect(() => {
		if (!canvas) {
			console.error("Canvas element is not initialized");
			return;
		}
		console.log({ canvas });

		const ctx = canvas?.getContext("2d");
		if (!ctx) {
			console.error("Canvas context is not initialized");
			return;
		}
		console.log("Canvas initialized:", canvas);
		console.log("Canvas context initialized:", ctx);

		const image = new Image(100, 100) as HTMLImageElement; // Remove width and height parameters
		image.onload = () => {
			ctx?.drawImage(image, 0, 0, canvas.width, canvas.height);

			if (coordinates.length) {
				ctx.beginPath();
				ctx.moveTo(
					coordinates[0].x * canvas.width,
					coordinates[0].y * canvas.height
				);

				for (let i = 1; i < coordinates.length; i++) {
					ctx.lineTo(
						coordinates[i].x * canvas.width,
						coordinates[i].y * canvas.height
					);
				}
				ctx?.closePath();
				ctx.strokeStyle = bones.find(
					(x) => x.classes === Number(classes)
				)?.color;
				ctx.lineWidth = 2;
				ctx.stroke();
			}
		};
		image.onerror = () => {
			console.error("Failed to load the image");
		};

		image.src = photoUrl;
	}, [photoUrl, coordinates, classes]);

	return (
		<Modal isOpen={isOpen} onClose={onClose} className="">
			<div className="p-5 overflow-hidden">
				<div className="text-sm leading-4 w-3/5">
					{bones.find((x) => x.classes === Number(classes))?.name}
				</div>

				<div className="flex flex-col my-3 mb-4 ">
					<span className="font-light text-xs mb-3">Details</span>
					<div>
						<Pill
							active={false}
							hidePoint
							className="!py-0.5 bg-[#FFD75C] border-[#FFD75C] text-[10px]"
						>
							{bones.find((x) => x.classes === Number(classes))?.name}
						</Pill>
					</div>
				</div>

				<img className="w-full h-96" src={photoUrl} />
			</div>
		</Modal>
	);
};

export default DetailModal;

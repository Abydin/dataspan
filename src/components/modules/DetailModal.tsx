import { useEffect, useRef } from "react";
import { Modal, Pill } from "../common";
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
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) {
			console.error("Canvas element is not initialized");
			return;
		}

		const ctx = canvas.getContext("2d");
		if (!ctx) {
			console.error("Canvas context is not initialized");
			return;
		}

		console.log("Canvas initialized:", canvas);
		console.log("Canvas context initialized:", ctx);

		const image = new Image();
		image.onload = () => {
			console.log("Image loaded:", image);
			ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

			ctx.beginPath();
			coordinates.forEach((coord, index) => {
				const x = coord.x * canvas.width;
				const y = coord.y * canvas.height;
				if (index === 0) {
					ctx.moveTo(x, y);
				} else {
					ctx.lineTo(x, y);
				}
			});
			ctx.closePath();
			ctx.strokeStyle = "red";
			ctx.lineWidth = 2;
			ctx.stroke();
		};

		image.onerror = () => {
			console.error("Failed to load the image");
		};

		image.src = photoUrl;
	}, [canvasRef, photoUrl, coordinates]);

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

				<canvas
					ref={canvasRef}
					className="w-full h-96 bg-black"
					width={800} // Set the width of the canvas
					height={600} // Set the height of the canvas
				/>
			</div>
		</Modal>
	);
};

export default DetailModal;

import React, { useState } from "react";
import { Modal, Pill } from "@ui";

type Props = {};

export default function DetailModal({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	return (
		<Modal isOpen={isOpen} onClose={onClose} className="">
			<div className="p-5">
				<h3 className="text-sm leading-4">
					Fingers 3 positive image 330909 active.jpg
				</h3>
				<div className="flex flex-col my-3 mb-4 ">
					<span className="font-light text-xs mb-3">Details</span>
					<div>
						<Pill
							hidePoint
							className="!py-0.5 bg-[#FFD75C] border-[#FFD75C] text-[10px]"
						>
							fracture_1
						</Pill>
					</div>
				</div>

				<div className=" w-full h-96 bg-black"></div>
			</div>
		</Modal>
	);
}

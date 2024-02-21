import React, { useState } from "react";
import { Modal, Pill } from "@ui";

export default function DetailModal({
	isOpen,
	onClose,
	defaultValue,
}: {
	isOpen: boolean;
	onClose: () => void;
	defaultValue?: { name: string; photoUrl: string };
}) {
	return (
		<Modal isOpen={isOpen} onClose={onClose} className="">
			<div className="p-5 overflow-hidden">
				<div className="text-sm leading-4 w-3/5">
					{defaultValue?.name.split("/")[2]}
				</div>

				<div className="flex flex-col my-3 mb-4 ">
					<span className="font-light text-xs mb-3">Details</span>
					<div>
						<Pill
							hidePoint
							className="!py-0.5 bg-[#FFD75C] border-[#FFD75C] text-[10px]"
						>
							{defaultValue?.name.split("/")[1]}
						</Pill>
					</div>
				</div>

				<img className="w-full h-96 bg-black" src={defaultValue?.photoUrl} />
			</div>
		</Modal>
	);
}

import React from "react";
import { ModalTypes, useModalStore } from "../GlobalModal";

type Props = {};

export default function ImageCard({}: Props) {
	const { openModal } = useModalStore();
	return (
		<div
			className=" w-[100px] h-[100px] bg-black"
			onClick={() => openModal(ModalTypes.DETAIL_MODAL)}
		/>
	);
}

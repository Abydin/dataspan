import React from "react";
import { ModalTypes, useModalStore } from "../GlobalModal";
import Image from "next/image";

type Props = {
	photoUrl: string;
};

export default function ImageCard({ photoUrl }: Props) {
	const { openModal } = useModalStore();
	return (
		<img
			height={100}
			width={100}
			alt="photo"
			src={photoUrl}
			className=" w-[100px] h-[100px] bg-black"
			onClick={() =>
				openModal(ModalTypes.DETAIL_MODAL, { defaultValue: photoUrl })
			}
		/>
	);
}

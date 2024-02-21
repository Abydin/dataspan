import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Dataspan.ai",
	description:
		"dataspan.ai makes it possible to automate the creation of countless variations from your images and videos, adding aspects that your data lacks.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<Script src="https://sdk.amazonaws.com/js/aws-sdk-2.1555.0.min.js"></Script>
			</head>
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}

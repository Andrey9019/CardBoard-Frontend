import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ClientProvider from "@/app/providers/ClientProvider";
import { SessionProvider } from "@/contexts/SessionContext";
import "./(main)/globals.css";

const poppinsSans = Poppins({
	variable: "--font-poppins-sans",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Card&Board",
	description: "A large selection of board games",
	icons: `icon/favicon.ico`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppinsSans.variable} antialiased`}>
				<ClientProvider>
				<SessionProvider>
					{children}
				</SessionProvider>
				</ClientProvider>
			</body>
		</html>
	);
}

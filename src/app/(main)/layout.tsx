import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header/Header";

export default function Mainayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}

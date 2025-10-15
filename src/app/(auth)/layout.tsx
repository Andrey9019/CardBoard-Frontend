import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer";

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

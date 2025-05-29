import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Card&Board | Кошик",
  description: "A large selection of board games",
};

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header hasCart={false} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

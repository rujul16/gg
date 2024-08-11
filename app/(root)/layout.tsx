
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main>
        <Navbar />

        <div>
        {children}
        </div>

    </main>
  );
}

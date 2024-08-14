
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main>

        <div>
        {children}
        </div>

    </main>
  );
}

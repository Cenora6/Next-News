import "@/styles/globals.css";
import { MainHeader } from "@/components/main-header/main-header";

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div id="page">
        <MainHeader />
        {children}
      </div>
    </main>
  );
}

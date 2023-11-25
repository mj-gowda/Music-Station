import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Figtree } from "next/font/google";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Music-Mingle",
  description: "A music streaming platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>{children}</Sidebar>
        <SupabaseProvider>
          <Sidebar>{children}</Sidebar>
          <UserProvider>
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}

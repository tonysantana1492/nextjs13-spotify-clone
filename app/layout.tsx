import SupabaseProvider from "@/providers/SupabaseProvider";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import UserProvider from "@/providers/UserProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import ModalProvider from "@/providers/ModalProvider";

export const metadata = {
  title: "Spotify Clone",
  description: "Listen music",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const products = await getActiveProductsWithPrices();
  // const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NavLinks from "./components/NavLinks";
import SearchBox from "./components/SearchBox";
import "./globals.css";
import Providers from "./Providers";

// import { Patrick_Hand } from "@next/font/google";

// const PatickHand = Patrick_Hand({
//   weight: ["400"],
//   subsets: ["latin"],
// });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Providers>
        <body
          className={"bg-gray-100 dark:bg-zinc-900 transition-all duration-700"}
        >
          <Navbar />
          <NavLinks />
          <SearchBox />
          <main className={"max-w-6xl mx-auto"}>{children}</main>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}

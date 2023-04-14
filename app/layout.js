import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoginBanner from "@/components/LoginBanner";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div className="flex flex-col justify-start items-center pt-20 gap-10 min-h-[calc(100vh-53px)] p-2  bg-base-200">
          <LoginBanner />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

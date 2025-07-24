import "./globals.css";
import StoreProvider from "./StoreProvider";
import Header from "./_components/Header";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: "%s | Dashbord",
    default: "Welcome | Admin Dashboard",
  },
  description:
    "Welcome to the admin dashboard. Manage your application efficiently.",
  keywords: "admin, dashboard, management, application ,users, data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className="bg-gray-100">
          <Header />
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </body>
      </StoreProvider>
    </html>
  );
}

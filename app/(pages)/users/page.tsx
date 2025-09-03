import UserMain from "@/app/sections/users-main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weather App - All cards",
  description: "Here you can view all card of the users",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = () => {
  return <UserMain />;
};

export default Page;

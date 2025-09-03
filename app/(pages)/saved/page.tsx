import SavedUsers from "@/app/sections/saved-users";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weather App - Saved",
  description: "Here you can view all saved cards",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = () => {
  return <SavedUsers />;
};

export default Page;

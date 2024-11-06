import Image from "next/image";
import localFont from "next/font/local";
import Hero2 from "./components/Hero2";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero2 />
      <Blog />
      {/* Other content */}
    </div>
  );
}

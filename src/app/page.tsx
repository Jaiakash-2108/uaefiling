import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <FloatingNavbar />
      <main className="flex min-h-screen flex-col items-center">
        <Hero />
      </main>
    </>
  );
}

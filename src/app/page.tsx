import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { Hero } from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";

export default function Home() {
  return (
    <>
      <FloatingNavbar />
      <main className="flex min-h-screen flex-col items-center w-full">
        <Hero />
        <PainPoints />
      </main>
    </>
  );
}

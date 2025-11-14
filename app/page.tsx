import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import FleetSection from "@/components/FleetSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="relative z-10 bg-black">
        <MissionSection />
        <FleetSection />
      </div>
    </>
  );
}

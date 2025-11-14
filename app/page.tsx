import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import FleetSection from "@/components/FleetSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="relative bg-black">
        <MissionSection />
        <FleetSection />
      </div>
    </>
  );
}

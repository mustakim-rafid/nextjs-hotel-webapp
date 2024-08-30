import HeroSectionHome from "@/components/HeroSectionHome";
import HomePageCard from "@/components/HomePageCard";
import cardcontent from "@/cardcontent.json"

export default function Home() {
  return (
    <main>
      <HeroSectionHome />
      <div className="text-center py-8">
        <p className="text-slate-800 font-semibold">All our room types are including complementary breakfast</p>
      </div>
      <div className="space-y-20 pb-5">
        {cardcontent.map((content, index) => (
          <HomePageCard 
          key={index}
          title={content.title}
          desc={content.Description}
          image={content.image}
          />
        ))}
      </div>
    </main>
  );
}

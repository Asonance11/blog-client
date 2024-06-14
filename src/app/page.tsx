import Hero from "@/components/Hero";
import LatestPosts from "@/components/latest-posts";

export default function Home() {
  return (
    <main className="max-screen-xl">
      <div className="px-10 pb-8 md:px20">
        <Hero />
        <LatestPosts />
      </div>
    </main>
  );
}

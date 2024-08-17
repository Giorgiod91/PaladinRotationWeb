import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import LandingPage from "./_components/LandingPage";
import AddYourStats from "./_components/AddYourStats";
import Navbar from "./_components/Navbar";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F4F7FA]">
      <Navbar />
      <section className="h-screen">
        <LandingPage />
      </section>
      <section id="Stats" className="h-screen">
        <AddYourStats />
      </section>
    </main>
  );
}

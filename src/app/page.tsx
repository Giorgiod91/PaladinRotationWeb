import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import LandingPage from "./_components/LandingPage";
import AddYourStats from "./_components/AddYourStats";
import Navbar from "./_components/Navbar";
import About from "./_components/About";
import SpotlightEffect from "./_components/SpotlightEffect";
import ShowCase from "./_components/ShowCase";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <section className="h-screen">
        <LandingPage />
      </section>
      <section id="stats" className="flex h-screen max-w-7xl flex-row">
        <AddYourStats />
        <ShowCase />
      </section>
      <section id="about" className="h-screen">
        <About />
      </section>
    </main>
  );
}

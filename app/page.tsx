"use client";

import PageLayout from "@/components/PageLayout";
import HomeHero from "@/components/HomeHero";
import FeaturedPosts from "@/components/FeaturedPosts";

const Home = () => {
  return (
    <PageLayout>
      <HomeHero />
      <FeaturedPosts />
    </PageLayout>
  );
};

export default Home;

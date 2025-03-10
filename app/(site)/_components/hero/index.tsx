"use client";

import Button from "@/src/components/base/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div className="bg-gradient-to-r via-zinc-80 from-black/30 to-blue-800 py-20 text-center my-16 rounded-lg shadow-xl shadow-zinc-800">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-4">
            Smarsheet: Data Analysis Made Simple
          </h1>
          <p className="text-lg text-white mb-6">
            Turn raw data into powerful insights with Smarsheet. Whether
            you&apos;re uploading a CSV, connecting an API, or integrating with
            other data sources, our platform transforms complex information into
            clear, actionable analytics. Discover trends, automate reporting,
            and make smarter decisions—all in one intuitive dashboard.
          </p>
          <Button
            as={Link}
            href="#get-started"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import Head from "next/head";
import Image from "next/image";
import BackgroundGradient from "../components/background-gradient";
import BlogCard from "../components/blog-card";
import Card from "../components/card";
import ContactCard from "../components/contact-card";
import DoingCard from "../components/doing-card";
import LinkCard from "../components/link-card";
import PlayingCard from "../components/playing-card";
import ProfileCard from "../components/profile-card";

export default function Home() {
  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-hidden bg-gray-100 text-black dark:bg-neutral-900 dark:text-gray-100">
      <Head>
        <title>garron&apos; World</title>
        <meta name="description" content="garron Home" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="garron,Homepage" />
      </Head>

      <main className="flex grow flex-col justify-center">
        <section>
          <div className="w-full px-4 py-6 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-4 sm:grid-cols-12">
              <ProfileCard className="sm:col-span-6 sm:row-span-2 lg:col-span-5" />
              <ContactCard className="sm:col-span-6 lg:col-span-3" />
              <PlayingCard className="sm:col-span-6 lg:col-span-4" />
              <DoingCard className="sm:col-span-6 lg:col-span-4" />
              <BlogCard className="sm:col-span-6 lg:col-span-3" />
            </div>
          </div>
        </section>
      </main>

      <footer className="text-md py-10 text-center text-sm opacity-60">
        © 2023 garron
      </footer>
    </div>
  );
}

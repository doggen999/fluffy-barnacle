import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <h2>
          <Link href="/posts/first-post">Intern länk</Link>
        </h2>
        <h2>
          <a href="http://www.google.com" target="_blank">
            External link to Google
          </a>
        </h2>
      </section>
    </Layout>
  );
}

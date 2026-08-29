import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shopify & Web Development Blog",
  description:
    "Shopify Plus tutorials, app development guides, ecommerce engineering lessons, and web performance insights from developer Shreyank Jadiya.",
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": `${SITE.url}/feed.xml` },
  },
  openGraph: {
    title: `Shopify & Web Development Blog | ${SITE.name}`,
    description:
      "Practical Shopify Plus, ecommerce engineering, and full-stack development articles by Shreyank Jadiya.",
    url: `${SITE.url}/blog`,
    type: "website",
    images: [{ url: "/og?title=Shopify%20%26%20Web%20Development%20Blog" }],
  },
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const sortedPosts = posts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE.url}/blog#blog`,
    url: `${SITE.url}/blog`,
    name: `Shopify & Web Development Blog by ${SITE.name}`,
    description: metadata.description,
    inLanguage: "en-CA",
    author: { "@id": `${SITE.url}/#person` },
    blogPost: sortedPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.metadata.title,
      description: post.metadata.summary,
      datePublished: post.metadata.publishedAt,
      url: `${SITE.url}/blog/${post.slug}`,
      author: { "@id": `${SITE.url}/#person` },
    })),
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <BlurFade delay={BLUR_FADE_DELAY}>
       <Link className="mb-4 flex flex-row items-center space-x-8 text-sm" href="/">
        <ArrowLeft className="inline-block" size={12} /> Back to Home
       </Link>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl lg:text-4xl mb-8 tracking-tighter">Shreyank Jadiya's Articles</h1>
      </BlurFade>
      {sortedPosts.map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-6"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <h2 className="font-medium tracking-tight">{post.metadata.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {post.metadata.summary}
                </p>
                <time
                  dateTime={post.metadata.publishedAt}
                  className="mt-1 text-xs text-muted-foreground"
                >
                  {post.metadata.publishedAt}
                </time>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}

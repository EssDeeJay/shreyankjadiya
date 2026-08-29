import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  let post;
  try {
    post = await getPost(slug);
  } catch {
    return undefined;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? `${DATA.url}${image}`
    : `${DATA.url}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    authors: [{ name: DATA.name, url: DATA.url }],
    alternates: {
      canonical: `/blog/${post.slug}`,
      types: {
        "text/markdown": `${DATA.url}/markdown/blog/${post.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = await getPost(slug);
  } catch {
    notFound();
  }

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BlogPosting",
                headline: post.metadata.title,
                datePublished: post.metadata.publishedAt,
                dateModified: post.metadata.publishedAt,
                description: post.metadata.summary,
                image: post.metadata.image
                  ? `${DATA.url}${post.metadata.image}`
                  : `${DATA.url}/og?title=${encodeURIComponent(post.metadata.title)}`,
                url: `${DATA.url}/blog/${post.slug}`,
                mainEntityOfPage: `${DATA.url}/blog/${post.slug}`,
                inLanguage: "en-CA",
                author: {
                  "@type": "Person",
                  "@id": `${DATA.url}/#person`,
                  name: DATA.name,
                  url: DATA.url,
                },
                publisher: { "@id": `${DATA.url}/#person` },
                isPartOf: { "@id": `${DATA.url}/blog#blog` },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: DATA.url,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Blog",
                    item: `${DATA.url}/blog`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: post.metadata.title,
                    item: `${DATA.url}/blog/${post.slug}`,
                  },
                ],
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />    
       <Link className="mb-4 flex flex-row items-center space-x-8 text-sm" href="/blog">
        <ArrowLeft className="inline-block" size={12} /> Back to All Articles
       </Link>
      
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <time
            dateTime={post.metadata.publishedAt}
            className="text-sm text-neutral-600 dark:text-neutral-400"
          >
            {formatDate(post.metadata.publishedAt)}
          </time>
        </Suspense>
      </div>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>
    </section>
  );
}

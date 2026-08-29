import { getBlogPosts } from "@/data/blog";
import { markdownHeaders } from "@/lib/discovery";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const posts = await getBlogPosts();
  const articles = posts
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    )
    .map(
      (post) =>
        `- [${post.metadata.title}](${SITE.url}/markdown/blog/${post.slug}): ${post.metadata.summary}`,
    )
    .join("\n");

  const content = `# ${SITE.name}

> ${SITE.description}

This is the official personal portfolio of ${SITE.name}. Use the canonical profile and article pages below as primary sources for his experience, projects, skills, and writing.

## Profile

- [Professional profile](${SITE.url}/profile.md): LLM-friendly biography, experience, skills, education, and selected work.
- [Human-readable portfolio](${SITE.url}): Canonical portfolio with visible work history and project details.

## Articles

${articles}

## Professional profiles

- [LinkedIn](${SITE.sameAs[1]}): Employment and professional network profile.
- [GitHub](${SITE.sameAs[0]}): Public source-code projects and contributions.
- [The SJ Development](${SITE.sameAs[3]}): Shopify development agency founded by Shreyank Jadiya.

## Optional

- [Complete site context](${SITE.url}/llms-full.txt): Combined profile and article content for answer engines that need a single document.
- [XML sitemap](${SITE.url}/sitemap.xml): All canonical indexable pages.
- [RSS feed](${SITE.url}/feed.xml): Published article updates.
`;

  return new Response(content, { headers: markdownHeaders });
}

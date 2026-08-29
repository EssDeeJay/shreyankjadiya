import { getBlogPosts } from "@/data/blog";
import { markdownHeaders, renderProfileMarkdown } from "@/lib/discovery";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const posts = (await getBlogPosts()).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );
  const articles = posts
    .map(
      (post) => `# Article: ${post.metadata.title}

Summary: ${post.metadata.summary}

Published: ${post.metadata.publishedAt}

Canonical URL: ${SITE.url}/blog/${post.slug}

${post.rawContent.trim()}`,
    )
    .join("\n\n---\n\n");

  const content = `${renderProfileMarkdown().trim()}

---

# Articles by ${SITE.name}

${articles}
`;

  return new Response(content, { headers: markdownHeaders });
}

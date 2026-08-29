import { getPost } from "@/data/blog";
import { markdownHeaders } from "@/lib/discovery";
import { SITE } from "@/lib/site";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const post = await getPost(slug);
    const markdown = `# ${post.metadata.title}

> ${post.metadata.summary}

- Author: ${SITE.name}
- Published: ${post.metadata.publishedAt}
- Canonical URL: ${SITE.url}/blog/${post.slug}

${post.rawContent.trim()}
`;

    return new Response(markdown, { headers: markdownHeaders });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

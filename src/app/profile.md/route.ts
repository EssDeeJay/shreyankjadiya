import { markdownHeaders, renderProfileMarkdown } from "@/lib/discovery";

export const dynamic = "force-static";

export async function GET() {
  return new Response(renderProfileMarkdown(), { headers: markdownHeaders });
}

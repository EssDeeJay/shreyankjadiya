import { DATA } from "@/data/resume";
import { SITE } from "@/lib/site";

export const markdownHeaders = {
  "Content-Type": "text/markdown; charset=utf-8",
  "Cache-Control": "public, max-age=3600, s-maxage=86400",
};

export function renderProfileMarkdown() {
  const skills = DATA.skills.join(", ");
  const experience = DATA.work
    .map(
      (role) =>
        `### ${role.title}, ${role.company} (${role.start}–${role.end ?? "Present"})\n\n${role.description}\n\n- Organization: ${role.href}\n- Location: ${role.location}`,
    )
    .join("\n\n");
  const projects = DATA.projects
    .map(
      (project) =>
        `### ${project.title}\n\n${project.description}\n\n${project.dates ? `- Period: ${project.dates}\n` : ""}- Technologies: ${project.technologies.join(", ")}\n- Website: ${project.href}`,
    )
    .join("\n\n");

  return `# ${SITE.name}

> ${SITE.profileDescription}

Canonical profile: ${SITE.url}

Location: ${SITE.location}

Contact: [${SITE.email}](mailto:${SITE.email})

## Professional summary

${DATA.summary}

## Areas of expertise

${skills}

## Experience

${experience}

## Selected work

${projects}

## Education

${DATA.education
  .map(
    (item) =>
      `- ${item.degree}, ${item.school} (${item.start}–${item.end}) — ${item.href}`,
  )
  .join("\n")}

## Verified profiles

- [LinkedIn](${DATA.contact.social.LinkedIn.url})
- [GitHub](${DATA.contact.social.GitHub.url})
- [X](${DATA.contact.social.X.url})
- [The SJ Development](https://www.thesjdevelopment.com)
`;
}

export const profile = {
  name: "Oleksiy Havryliuk",
  email: "oleksiy.havryliuk@gmail.com",
  emailHref: "mailto:oleksiy.havryliuk@gmail.com",
  phoneDisplay: "+49 151 41506794",
  phoneHref: "tel:+4915141506794",
  githubUrl: "https://github.com/kruty1918dev-ai",
  githubHandle: "kruty1918dev-ai",
  moyvaShowcaseUrl: "https://github.com/kruty1918dev-ai/moyva-showcase",
  moyvaShowcaseFullName: "kruty1918dev-ai/moyva-showcase",
  portfolioUrl: "https://oleksiy-havryliuk.de",
  location: "Wismar, Germany",
  locationDe: "Wismar, Deutschland",
  relocationDe: "umzugsbereit in den Raum Hannover",
  applicantTitle: "Bewerber für eine IT-Ausbildung im Raum Hannover",
  shortDescription:
    "Oleksiy Havryliuk sucht eine IT-Ausbildung im Raum Hannover. Portfolio mit Projekten in C#, Unity, Git/GitHub, Linux, PC-Hardware, Arduino und technischen Lernprojekten.",
} as const

export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.portfolioUrl,
  email: profile.emailHref,
  telephone: "+4915141506794",
  sameAs: [profile.githubUrl, profile.moyvaShowcaseUrl],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wismar",
    addressCountry: "Germany",
  },
  jobTitle: "Bewerber für eine IT-Ausbildung",
}

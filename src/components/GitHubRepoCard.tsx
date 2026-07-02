import { useEffect, useState } from "react"
import { ArrowUpRight, ClockCounterClockwise, GithubLogo } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchPublicGitHubRepo, type PublicGitHubRepo } from "@/lib/github"

interface GitHubRepoCardProps {
  owner: string
  repo: string
  fallback: PublicGitHubRepo
  label?: string
}

export function GitHubRepoCard({ owner, repo, fallback, label = "GitHub Showcase" }: GitHubRepoCardProps) {
  const [repoData, setRepoData] = useState<PublicGitHubRepo>(fallback)

  useEffect(() => {
    let isMounted = true

    fetchPublicGitHubRepo(owner, repo)
      .then((data) => {
        if (isMounted) {
          setRepoData({
            ...fallback,
            ...data,
            description: data.description || fallback.description,
          })
        }
      })
      .catch(() => {
        if (isMounted) {
          setRepoData(fallback)
        }
      })

    return () => {
      isMounted = false
    }
  }, [fallback, owner, repo])

  const formattedDate = repoData.updatedAt
    ? new Intl.DateTimeFormat("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(new Date(repoData.updatedAt))
    : null

  return (
    <Card className="h-full border-border/80 bg-background/90 shadow-sm">
      <CardHeader className="space-y-3">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <GithubLogo weight="fill" className="text-foreground" />
          <span>{label}</span>
        </div>
        <CardTitle className="text-xl leading-snug">{repoData.fullName}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed text-foreground/80">
          {repoData.description}
        </p>
        {formattedDate ? (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ClockCounterClockwise className="size-4" />
            <span>Zuletzt aktualisiert: {formattedDate}</span>
          </div>
        ) : null}
        <Button asChild className="w-full gap-2">
          <a href={repoData.htmlUrl} target="_blank" rel="noopener noreferrer">
            GitHub ansehen
            <ArrowUpRight weight="bold" />
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}

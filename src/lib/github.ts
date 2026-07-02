export interface PublicGitHubRepo {
  name: string
  fullName: string
  description: string
  htmlUrl: string
  updatedAt?: string
}

export async function fetchPublicGitHubRepo(owner: string, repo: string): Promise<PublicGitHubRepo> {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  })

  if (!response.ok) {
    throw new Error(`GitHub API request failed with status ${response.status}`)
  }

  const data = await response.json() as {
    name: string
    full_name: string
    description: string | null
    html_url: string
    updated_at?: string
  }

  return {
    name: data.name,
    fullName: data.full_name,
    description: data.description ?? "",
    htmlUrl: data.html_url,
    updatedAt: data.updated_at,
  }
}

export type GitHubProfile = {
  login: string;
  name: string | null;
  avatarUrl: string;
  profileUrl: string;
  publicRepos: number;
  followers: number;
  following: number;
};

type GitHubApiProfile = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
};

/**
 * Fetches the public profile details displayed by GitHub. The data is cached
 * for one hour so the portfolio does not make a request for every visit.
 */
export async function getGitHubProfile(
  username: string,
): Promise<GitHubProfile | null> {
  const normalizedUsername = username.trim();

  if (!normalizedUsername) return null;

  try {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(normalizedUsername)}`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) return null;

    const profile = (await response.json()) as GitHubApiProfile;

    return {
      login: profile.login,
      name: profile.name,
      avatarUrl: profile.avatar_url,
      profileUrl: profile.html_url,
      publicRepos: profile.public_repos,
      followers: profile.followers,
      following: profile.following,
    };
  } catch {
    // A portfolio should still render if the GitHub API is unavailable.
    return null;
  }
}

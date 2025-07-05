// export default async function getSingleGitProject(projectName: string) {
//   try {
//     // Fetch project details
//     const projectRes = await fetch(
//       `https://api.github.com/repos/shihab-2021/${projectName}`
//     );
//     const projectData = await projectRes.json();

//     // Fetch README content
//     const readmeRes = await fetch(
//       `https://raw.githubusercontent.com/shihab-2021/${projectName}/main/README.md`
//     );
//     const readmeText = await readmeRes.text();

//     // Fetch contributors
//     // const contributorsRes = await fetch(
//     //   `https://api.github.com/repos/shihab-2021/${projectName}/contributors`
//     // );
//     // const contributorsData = await contributorsRes.json();

//     return {
//       projectDetails: projectData,
//       readmeContent: readmeText,
//     };

//     //   setProjectDetails(projectData);
//     //   setReadmeContent(readmeText);
//     //   getTotalCommits("shihab-2021", projectName).then((count) => {
//     //     setAdditionalStats({
//     //       totalCommits: count || 0,
//     //       totalContributors: contributorsData.length || 0,
//     //     });
//     //   });
//   } catch (error) {
//     console.error("Error fetching project details:", error);
//     return null;
//   }
// }

async function getTotalCommits(owner: string, repo: string) {
  const perPage = 100; // Maximum items per page allowed by GitHub API
  let page = 1;
  let totalCommits = 0;

  try {
    // Get GitHub credentials from environment variables
    const token = process.env.NEXT_PUBLIC_MY_GITHUB_TOKEN;
    if (!token) throw new Error("Missing GitHub token");

    const headers = {
      Authorization: `Bearer ${token}`,
      "User-Agent": "portfolio", // Required by GitHub API
    };
    while (true) {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/commits?per_page=${perPage}&page=${page}`,
        { headers }
      );

      if (!response.ok) throw new Error("Failed to fetch commits");

      const commits = await response.json();

      totalCommits += commits.length;

      // Break if the number of commits returned is less than perPage
      if (commits.length < perPage) break;

      page++;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error fetching commit count:", error.message);
  }

  return totalCommits;
}

export default async function getSingleGitProject(projectName: string) {
  try {
    // Get GitHub credentials from environment variables
    const token = process.env.NEXT_PUBLIC_MY_GITHUB_TOKEN;
    if (!token) throw new Error("Missing GitHub token");

    const headers = {
      Authorization: `Bearer ${token}`,
      "User-Agent": "portfolio", // Required by GitHub API
    };

    // 1. Fetch project details with authentication
    const projectRes = await fetch(
      `https://api.github.com/repos/shihab-2021/${projectName}`,
      { headers }
    );
    const projectData = await projectRes.json();
    console.log(projectData);

    // 2. Fetch README content through API (not raw URL)
    const readmeRes = await fetch(
      `https://api.github.com/repos/shihab-2021/${projectName}/readme`,
      { headers }
    );
    const readmeData = await readmeRes.json();
    const readmeText = Buffer.from(readmeData.content, "base64").toString(
      "utf-8"
    );

    // Fetch contributors
    const contributorsRes = await fetch(
      `https://api.github.com/repos/shihab-2021/${projectName}/contributors`,
      { headers }
    );
    const contributorsData = await contributorsRes.json();

    const gitAdditionalStats: GitAdditionalStats = {
      totalCommits: 0,
      totalContributors: 0,
    };

    getTotalCommits("shihab-2021", projectName).then((count) => {
      gitAdditionalStats.totalCommits = count || 0;
      gitAdditionalStats.totalContributors = contributorsData.length || 0;
    });

    return {
      projectDetails: projectData,
      readmeContent: readmeText,
      additionalStats: gitAdditionalStats,
    };
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

interface GitAdditionalStats {
  totalCommits: number;
  totalContributors: number;
}

import React from "react";

import { config } from "../../devdash_config";
import { GitHubApiGitHubRepositoryPullRequestRepository } from "../../infrastructure/GitHubApiGitHubRepositoryPullRequestRepository";
import { GitHubApiGitHubRepositoryRepository } from "../../infrastructure/GitHubApiGitHubRepositoryRepository";
import { GitHubRepositoryDetail } from "./GitHubRepositoryDetail";

const repository = new GitHubApiGitHubRepositoryRepository(config.github_access_token);
const gitHubRepositoryPullRequestRepository = new GitHubApiGitHubRepositoryPullRequestRepository(
	config.github_access_token
);

export class GitHubRepositoryDetailFactory {
	static crerate(): React.ReactElement {
		return (
			<GitHubRepositoryDetail
				gitHubRepositoryRepository={repository}
				gitHubRepositoryPullRequestRepository={gitHubRepositoryPullRequestRepository}
			/>
		);
	}
}

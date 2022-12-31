import React from "react";

import { GitHubApiGitHubRepositoryRepository } from "../../infrastructure/GitHubApiGitHubRepositoryRepository";
import { LocalStorageGitHubAccessTokenRepository } from "../../infrastructure/LocalStorageGitHubAccessTokenRepository";
import { LocalStorageRepositoryWidgetRepository } from "../../infrastructure/LocalStorageWidgetRepository";
import { GithubAccessTokenSearcher } from "../config/GithubAccessTokenSearcher";
import { Dashboard } from "./Dashboard";
import { useRepositoryWidgetContext } from "./repositoryWidget/RepositoryWidgetContextProvider";

const ghAccessTokenRepository = new LocalStorageGitHubAccessTokenRepository();
const ghAccessTokenSearcher = new GithubAccessTokenSearcher(ghAccessTokenRepository);
const gitHubRepositoryRepository = new GitHubApiGitHubRepositoryRepository(
  ghAccessTokenSearcher.search()
);
const repositoryWidgetRepository = new LocalStorageRepositoryWidgetRepository();

export function DashboardFactory() {
  const { repositoryWidgets } = useRepositoryWidgetContext();

  return (
    <Dashboard
      gitHubRepositoryRepository={gitHubRepositoryRepository}
      repositoryWidgetRepository={repositoryWidgetRepository}
      repositoryWidgets={repositoryWidgets}
    />
  );
}

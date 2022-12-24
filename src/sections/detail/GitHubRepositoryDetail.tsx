import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { GitHubRepositoryRepository } from "../../domain/GitHubRepositoryRepository";
import { useGithubRepository } from "./useGithubRepository";

export function GitHubRepositoryDetail({ repository }: { repository: GitHubRepositoryRepository }) {
	const { organization, name } = useParams() as { organization: string; name: string };

	const repositoryId = useMemo(() => ({ organization, name }), [name, organization]);
	const { repositoryData } = useGithubRepository(repository, repositoryId);

	if (!repositoryData) {
		return <span>No hay ningún dato</span>;
	}

	return <span>{repositoryData.url}</span>;
}

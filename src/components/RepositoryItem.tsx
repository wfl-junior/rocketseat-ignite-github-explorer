import { Repository } from "./RepositoryList";

interface RepositoryItemProps {
  repository: Repository;
}

export const RepositoryItem: React.FC<RepositoryItemProps> = ({
  repository,
}) => (
  <li>
    <strong>{repository.name}</strong>
    <p>{repository.description}</p>

    <a href={repository.html_url} target="_blank">
      Acessar repositório
    </a>
  </li>
);

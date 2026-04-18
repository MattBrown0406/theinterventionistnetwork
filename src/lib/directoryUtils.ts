export const getActiveDirectoryFilters = ({
  searchQuery,
  stateFilter,
  specialtyFilter,
}: {
  searchQuery: string;
  stateFilter: string;
  specialtyFilter: string;
}) => {
  const filters: Array<{ key: "query" | "state" | "specialty"; label: string }> = [];

  if (searchQuery.trim()) filters.push({ key: "query", label: `Search: ${searchQuery.trim()}` });
  if (stateFilter) filters.push({ key: "state", label: `State: ${stateFilter}` });
  if (specialtyFilter) filters.push({ key: "specialty", label: `Specialty: ${specialtyFilter}` });

  return filters;
};

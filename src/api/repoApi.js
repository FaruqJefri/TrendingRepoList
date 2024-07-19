const BASE_URL = 'https://api.github.com';

export const fetchRepos = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/search/repositories?q=created:>2024-07-05&sort=stars&order=desc&page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

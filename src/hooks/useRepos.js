import { useState, useEffect } from 'react';
import { fetchRepos } from '../api/repoApi';

const useRepos = (initialPage = 1) => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReposData();
  }, [page]);

  const fetchReposData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchRepos(page);
      setRepos(prevRepos => [...prevRepos, ...data.items]);
    } catch (error) {
      setError('Failed to fetch data');
    }
    setLoading(false);
  };

  const loadMoreRepos = () => {
    setPage(prevPage => prevPage + 1);
  };

  return { repos, loading, error, loadMoreRepos };
};

export default useRepos;

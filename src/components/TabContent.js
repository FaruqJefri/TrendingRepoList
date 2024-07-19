import React from 'react';
import TrendingTab from '../tabs/TrendingTab';

const TabContent = ({ selectedTab, repos, loadMoreRepos }) => {
  switch (selectedTab) {
    case 'trending':
      return <TrendingTab repos={repos} loadMoreRepos={loadMoreRepos} />;
    default:
      return null;
  }
};

export default TabContent;

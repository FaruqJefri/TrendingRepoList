import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RepoList from '../components/repolist/RepoList';

const TrendingTab = ({ repos, loadMoreRepos }) => {
  return (
    <View style={styles.container}>
      {repos.length === 0 ? (
        <Text style={styles.noDataText}>No trending repositories found.</Text>
      ) : (
        <RepoList repos={repos} loadMoreRepos={loadMoreRepos} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noDataText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#888',
  },
});

export default TrendingTab;

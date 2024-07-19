import React from "react";
import { FlatList, ActivityIndicator } from "react-native";
import RepoItem from "./RepoItem";

const RepoList = ({ repos, loadMoreRepos, loading }) => {
  return (
    <FlatList
      data={repos}
      renderItem={({ item }) => <RepoItem repo={item} />}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={loadMoreRepos}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
    />
  );
};

export default RepoList;

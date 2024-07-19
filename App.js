import React, { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Platform,
} from "react-native";
import TopBar from "./src/layouts/TopBar";
import BottomBar from "./src/layouts/BottomBar";
import useRepos from "./src/hooks/useRepos";
import TabContent from "./src/components/TabContent";
import styles from "./AppStyles";

const App = () => {
  const { repos, loading, error, loadMoreRepos } = useRepos();
  const [selectedTab, setSelectedTab] = useState("trending");
  const [settingsVisible, setSettingsVisible] = useState(false);

  const handleSettingsClose = () => {
    setSettingsVisible(false);
    setSelectedTab("trending");
  };

  return (
    <View style={styles.container}>
      <TopBar onSettingsPress={() => setSettingsVisible(true)} />
      {error && <Text>{error}</Text>}
      <TabContent
        selectedTab={selectedTab}
        repos={repos}
        loadMoreRepos={loadMoreRepos}
        settingsVisible={settingsVisible}
        handleSettingsClose={handleSettingsClose}
      />
      {loading && <ActivityIndicator size="large" />}
      {Platform.OS !== "web" && <BottomBar selectedTab={selectedTab} />}
    </View>
  );
};

export default App;

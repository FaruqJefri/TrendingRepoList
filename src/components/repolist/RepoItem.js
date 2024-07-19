import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { formatNumber } from "../../utils/numberUtils";
import styles from "./RepoItemStyles";

const RepoItem = ({ repo }) => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{repo.name}</Text>
          <Text
            style={repo.description ? styles.description : styles.noDescription}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {repo.description || "No description"}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.leftContainer}>
            <Image
              source={{ uri: repo.owner.avatar_url }}
              style={styles.avatar}
            />
            <Text style={styles.owner}>{repo.owner.login}</Text>
          </View>
          <View style={styles.rightContainer}>
            <FontAwesome name="star" size={16} color="black" style={styles.icon} />
            <Text style={styles.stars}>{formatNumber(repo.stargazers_count)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RepoItem;

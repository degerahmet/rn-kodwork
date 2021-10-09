import React from "react";
import { View, Text, FlatList,ActivityIndicator } from "react-native";

import styles from "./Jobs.style";

import useFetch from "../../hooks/useFetch";

import JobCard from "../../components/JobCard";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

const URL = "https://www.themuse.com/api/public/jobs?page=1";

export default function Jobs({navigation}) {
  const { data, loading, error } = useFetch(URL, "results");

  const handleJobItemPress = (id, name) => {
    navigation.navigate("JobDetail", { id, name });
  };

  const renderJob = ({ item }) => {
    return <JobCard job={item} onPress={() => handleJobItemPress(item.id, item.name)} />;
  };

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <Error/>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data.results}
        renderItem={renderJob}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

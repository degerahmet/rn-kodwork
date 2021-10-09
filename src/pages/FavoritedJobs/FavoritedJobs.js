import React from "react";
import { View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FavoriteJob from "../../components/FavoriteJob";

export default function FavoritedJobs() {
  const jobs = useSelector((state) => state.favoriteJobs);
  const dispatch = useDispatch();
  const removeJobItem = item => {
    dispatch({type: 'REMOVE_FAVORITE', payload: {job: item}});
  };

  const renderJob = ({ item }) => {
    return <FavoriteJob job={item} onPress={() => removeJobItem(item)}/>;
  };
  return (
    <View>
      <FlatList
        data={jobs}
        renderItem={renderJob}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

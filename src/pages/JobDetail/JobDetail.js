import React from 'react';
import {View, Text,useWindowDimensions,ScrollView} from 'react-native';

import styles from './JobDetail.style';
import useFetch from '../../hooks/useFetch';

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Button from "../../components/Button";

import RenderHtml from 'react-native-render-html';

const URL = 'https://www.themuse.com/api/public/jobs';

export default function JobDetail({route}) {
  const {id} = route.params;

  const {data, error, loading} = useFetch(`${URL}/${id}`);

  const source = {
    html: data.contents
  };


  const { width } = useWindowDimensions();


  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <Error/>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.job_name}>{data.name}</Text>
      <View style={styles.location_and_job_container}>
        <Text style={styles.location_and_job_text}>Locations:</Text>
        <Text style={styles.level_locations_text}>
          
            {data.locations && data.locations.length > 0
            ? data.locations[0].name
            : 'Unknown Location'}
            </Text>
      </View>
      <View style={styles.location_and_job_container}>
        <Text style={styles.location_and_job_text}>Job Level:</Text>
        <Text style={styles.level_locations_text}>
        {data.levels && data.levels.length > 0
            ? data.levels[0].name
            : 'Unknown Level'}</Text>
      </View>
      <View style={styles.detail_text_container}>
        <Text style={styles.detail_text}>Job Detail</Text>
      </View>
      <View style={styles.content_container}>
        <RenderHtml
        contentWidth={width}
        source={source}
        />

      </View>
      
      <View style={styles.footer_container}>
          <Button icon="send" text="Submit"/>
          <Button icon="heart" text="Favorite Job"/>

      </View>

    </ScrollView>
  );
}

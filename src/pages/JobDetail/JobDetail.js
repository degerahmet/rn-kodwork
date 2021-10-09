import React from 'react';
import {View, Text,ActivityIndicator,ScrollView} from 'react-native';

import styles from './JobDetail.style';
import useFetch from '../../hooks/useFetch';

import Loading from "../../components/Loading";
import Error from "../../components/Error";

const URL = 'https://www.themuse.com/api/public/jobs';

export default function JobDetail({route}) {
  const {id} = route.params;

  const {data, error, loading} = useFetch(`${URL}/${id}`);
  console.log(data)

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <Error/>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.job_name}>{data.name}</Text>
    </ScrollView>
  );
}

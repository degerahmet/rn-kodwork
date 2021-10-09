import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import styles from './FavoriteJob.style';

import Button from '../Button';

function FavoriteJob({job,onPress}) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.job_name}>{job.name}</Text>
        <Text style={styles.company_name}>{job.company.name}</Text>
        <View style={styles.location_container}>
          <Text style={styles.location_name}>
            {job.locations && job.locations.length > 0
              ? job.locations[0].name
              : 'Unknown Location'}
          </Text>
        </View>
        <Text style={styles.job_level}>
          {job.levels && job.levels.length > 0
            ? job.levels[0].name
            : 'Unknown Level'}
        </Text> 
        <View style={styles.remove_button}>
        <Button onPress={onPress} text="Remove" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default FavoriteJob;

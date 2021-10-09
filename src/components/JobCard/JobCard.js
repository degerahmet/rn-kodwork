import React from 'react';
import {View, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import styles from './JobCard.style';

function JobCard({job,onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
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
      </View>
    </TouchableWithoutFeedback>
  );
}

export default JobCard;

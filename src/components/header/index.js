import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Header = () => (
  <View style={styles.container}>
    <Icon name="md-menu" size={20} style={styles.icon} />
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Prioritária</Text>
    </View>
    <Icon name="md-search" size={20} style={styles.icon} />
  </View>
);

export default Header;

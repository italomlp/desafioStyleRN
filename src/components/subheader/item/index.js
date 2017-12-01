import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from 'styles';

import styles from './styles';

const Item = ({ item: { icon, itemName, itemDescription, count } }) => (
  <TouchableOpacity style={styles.container}>
    <Icon name={icon.name} size={24} color={colors[icon.color]} style={styles.icon} />

    <View style={styles.textContainer}>
      <Text style={styles.name}>{ itemName }</Text>
      <Text style={styles.description}>{ itemDescription }</Text>
    </View>

    <View style={[styles.label, styles[icon.color]]}>
      <Text style={styles.labelText}> { count } novo(s) </Text>
    </View>
  </TouchableOpacity>
);

export default Item;

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const EmailResume = ({ email: { avatar, author, title, description, unread, date, favorite } }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.avatar}>
        { avatar.image
          ? <Image source={avatar.image} />
          : <Text style={styles.abreviation}>{avatar.abreviation}</Text>
        }
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.author, unread ? styles['author-unread'] : {}]}>
          {author}
        </Text>
        <Text style={[styles.title, unread ? styles['title-unread'] : {}]}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.favoriteContainer}>
        <Text style={styles.date}>{date}</Text>
        <TouchableOpacity onpress={() => {}}>
          <Icon
            name={favorite ? 'star' : 'star-border'}
            size={24}
            color={favorite ? '#f4b400' : undefined}
            style={styles.starIcon}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default EmailResume;

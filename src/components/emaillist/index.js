import React, { Component } from 'react';
import { View } from 'react-native';

import EmailResume from './emailresume';
import styles from './styles';

export default class EmailList extends Component {
  state = {
    emails: [
      {
        id: 1,
        author: 'Andry Brown',
        avatar: {
          image: null,
          abreviation: 'A',
        },
        title: 'Bring You Parents to Work Day!',
        description: 'Hey! What do you think about a...',
        unread: true,
        date: '1:45 PM',
        favorite: false,
      },
      {
        id: 2,
        author: 'Keri Anderson',
        avatar: {
          image: null,
          abreviation: 'K',
        },
        title: 'Picture from last Saturday',
        description: 'Check out the new friend we made, Me...',
        unread: false,
        date: '1:39 PM',
        favorite: false,
      },
      {
        id: 3,
        author: 'Regis, Peter, Rachel',
        avatar: {
          image: null,
          abreviation: 'R',
        },
        title: 'Board game night?',
        description: 'Sunday works! If you can get Dex...',
        unread: true,
        date: 'Sep 29',
        favorite: true,
      },
      {
        id: 4,
        author: 'Aruna Knight',
        avatar: {
          image: null,
          abreviation: 'A',
        },
        title: 'Book you recommended',
        description: 'About to go on a trip and was h...',
        unread: false,
        date: 'Sep 29',
        favorite: true,
      },
      {
        id: 5,
        author: 'Andry Brown',
        avatar: {
          image: null,
          abreviation: 'A',
        },
        title: 'Bring You Parents to Work Day!',
        description: 'Hey! What do you think about a...',
        unread: true,
        date: 'Sep 20',
        favorite: false,
      },
      {
        id: 6,
        author: 'Keri Anderson',
        avatar: {
          image: null,
          abreviation: 'K',
        },
        title: 'Picture from last Saturday',
        description: 'Check out the new friend we made, Me...',
        unread: false,
        date: 'Sep 17',
        favorite: true,
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        { this.state.emails.map(email => (
          <EmailResume key={email.id} email={email} />
        )) }
      </View>
    );
  }
}

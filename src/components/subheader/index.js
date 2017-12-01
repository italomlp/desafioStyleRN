import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';

import Item from './item';

export default class SubHeader extends Component {
  state = {
    items: [
      {
        id: 1,
        icon: {
          name: 'people',
          color: 'blue',
        },
        itemName: 'Social',
        itemDescription: 'Google +',
        count: 1,
      },
      {
        id: 2,
        icon: {
          name: 'local-offer',
          color: 'green',
        },
        itemName: 'Promoções',
        itemDescription: 'Zagat, Google Ofertas',
        count: 2,
      },
      {
        id: 3,
        icon: {
          name: 'info',
          color: 'yellow',
        },
        itemName: 'Atualiações',
        itemDescription: 'Google Play',
        count: 1,
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        { this.state.items.map(item => (
          <Item key={item.id} item={item} />
        )) }
      </View>
    );
  }
}

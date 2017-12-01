import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import Header from 'components/header';
import SubHeader from 'components/subheader';
import EmailList from 'components/emaillist';

export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <Header />
        <ScrollView>
          <SubHeader />
          <EmailList />
        </ScrollView>
      </View>
    );
  }
}

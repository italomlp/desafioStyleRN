import { Platform } from 'react-native';

export default {
  ...Platform.select({
    ios: {
      headerHeight: 64,
      headerPadding: 20,
      emailListMargin: 0,
    },
    android: {
      headerHeight: 44,
      headerPadding: 0,
      emailListMargin: 40,
    },
  }),
  headerPadding: 15,
  subheaderItemHeight: 55,
  emailHeight: 80,

  avatar: 40,

  subheaderPadding: 8,
  emailPadding: 12,
};

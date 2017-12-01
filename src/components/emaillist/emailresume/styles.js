import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    height: metrics.emailHeight,
    padding: metrics.emailPadding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.separator,
  },

  avatar: {
    width: metrics.avatar,
    height: metrics.avatar,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
    marginHorizontal: metrics.emailPadding,
  },

  abreviation: {
    color: colors.white,
    fontSize: fonts.bigger,
  },

  textContainer: {
    flex: 1,
    paddingHorizontal: metrics.emailPadding,
  },

  author: {
    fontSize: fonts.big,
    color: colors.title,
  },

  'author-unread': {
    fontWeight: 'bold',
  },

  title: {
    fontSize: fonts.regular,
    color: colors.description,
  },

  'title-unread': {
    color: colors.black,
    marginBottom: 2,
  },

  description: {
    fontSize: fonts.regular,
    color: colors.description,
  },

  favoriteContainer: {
    height: metrics.emailHeight,
    justifyContent: 'space-around',
  },

  date: {
    fontSize: fonts.small,
    color: colors.description,
  },

  starIcon: {
    alignSelf: 'flex-end',
  },
});

export default styles;

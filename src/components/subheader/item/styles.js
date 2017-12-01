import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: metrics.subheaderItemHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: metrics.subheaderPadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.separator,
  },

  icon: {
    marginHorizontal: metrics.emailPadding,
  },

  textContainer: {
    flex: 1,
    paddingHorizontal: metrics.subheaderPadding,
  },

  name: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.title,
  },

  description: {
    fontSize: fonts.regular,
    color: colors.description,
  },

  label: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
  },

  labelText: {
    fontSize: fonts.small,
    color: colors.white,
  },

  blue: {
    backgroundColor: colors.blue,
  },

  green: {
    backgroundColor: colors.green,
  },

  yellow: {
    backgroundColor: colors.yellow,
  }
});

export default styles;

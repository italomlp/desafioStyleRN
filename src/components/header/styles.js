import { StyleSheet } from 'react-native';
import { fonts, colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.headerBackground,
    height: metrics.headerHeight,
    padding: metrics.headerPadding,
  },

  titleContainer: {
    flex: 1,
    paddingHorizontal: metrics.headerPadding,
  },

  title: {
    fontSize: fonts.big,
    color: colors.headerTitle,
    fontWeight: 'bold',
  },

  icon: {
    color: colors.headerIcon,
  },
});

export default styles;

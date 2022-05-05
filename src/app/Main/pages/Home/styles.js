import {StyleSheet} from 'react-native';
import {colors} from '../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  scrollContentContainer: {
    alignItems: 'center',
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.GRAY_DARK,
    fontSize: 36,
    fontWeight: 'bold',
  },
  viewText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import {StyleSheet} from 'react-native';
import {colors} from '../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
  whiteText: {
    color: colors.WHITE,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.GOLD,
    borderRadius: 50,
    padding: 15,
  },
  viewButtons: {
    paddingVertical: 50,
    marginTop: 'auto',
  },
});

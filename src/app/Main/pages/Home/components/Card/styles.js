import {StyleSheet} from 'react-native';
import {colors} from '../../../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  title: {
    color: colors.GRAY_DARK,
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.GOLD,
    height: 200,
    width: 200,
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
});

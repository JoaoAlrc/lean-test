import {StyleSheet} from 'react-native';
import {colors} from '~/styles';

export default StyleSheet.create({
  container: {
    marginBottom: 26,
  },
  containerLabel: {
    flexDirection: 'row',
    position: 'absolute',
    paddingHorizontal: 4,
    zIndex: 1,
    left: 17,
    top: -7,
    backgroundColor: 'transparent',
  },
  bgLabel: {
    position: 'absolute',
    zIndex: 1,
    left: 17,
    paddingHorizontal: 4,
  },
  txtBgLabel: {
    color: 'transparent',
    fontSize: 12,
  },
  select: {
    borderWidth: 1.4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 4,
    paddingHorizontal: 16,
  },
  label: {
    color: colors.GRAY_DARK,
    fontSize: 12,
  },
  placeholder: {
    fontSize: 14,
    color: '#B3B3B3',
    flex: 1,
  },
  textValue: {
    fontSize: 14,
    color: colors.BLACK,
    flex: 1,
  },
  icon: {
    marginLeft: 15,
  },
});

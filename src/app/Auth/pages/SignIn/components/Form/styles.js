import {StyleSheet} from 'react-native';
import {colors} from '../../../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    backgroundColor: colors.WHITE,
  },
  containerInputUnderline: {
    flexDirection: 'row',
    borderWidth: 0,
    borderBottomWidth: 0.2,
    paddingBottom: 10,
  },
  containerInput: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10,
    alignItems: 'center',
  },
  viewButton: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    borderRadius: 50,
    justifyContent: 'center',
    height: 50,
    backgroundColor: colors.GOLD,
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
  errorText: {
    color: colors.RED,
    textAlign: 'center',
  },
});

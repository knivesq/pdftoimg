import {StyleSheet, Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {IStyles} from './interface';
import {colors} from '../../utils';
const styles = StyleSheet.create<IStyles>({
  adContainer: {
    position: 'absolute',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  root: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  adBar: {margin: 10},
  converting: {color: '#fff'},
  iconContainer: {
    position: 'absolute',
    top: Dimensions.get('window').height * 0.5 - 170,
    opacity: 0.6,
  },
  buttonContainer: {marginVertical: 5, width: '90%'},
  bottomAdContainer: {height: 50, justifyContent: 'center'},
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.8,
    flexDirection: 'row',
  },
  simpleButtonContainer: {
    width: 150,
    marginHorizontal: 10,
    backgroundColor: colors.primary.gray,
  },
  iconAndButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

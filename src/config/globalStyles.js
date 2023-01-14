import {StyleSheet, Dimensions} from 'react-native';

const PRIMARY_COLOR = '#496BF2';
const SECONDARY_COLOR = '#2DD6C1';
const WHITE = '#FFFFFF';
const GRAY = '#757E90';
const DARK_GRAY = '#363636';
const BLACK = '#000000';

export default StyleSheet.create({
  header: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    fontSize: 26,
    color: WHITE,
    marginTop: 8,
  },
});

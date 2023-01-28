import {showMessage} from 'react-native-flash-message';

const showToast = async (info) => {
  showMessage(info);
  return Promise.resolve();
};

export default showToast;

import apiInstance from '../../services';
import ApiConstants from '../../services/ApiConstants';

exports.home = async info => {
  try {
    return Promise.resolve(await apiInstance.get(ApiConstants.HOME, info));
  } catch (error) {
    return Promise.reject(error);
  }
};

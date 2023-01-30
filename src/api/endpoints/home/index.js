import apiInstance from '../../services';
import ApiConstants from '../../services/ApiConstants';

exports.home = async info => {
  try {
    return Promise.resolve(await apiInstance.get(ApiConstants.HOME, info));
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.createAccount = async info => {
  try {
    return Promise.resolve(
      await apiInstance.post(ApiConstants.CREATE_ACCOUNT, info),
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.getAccountList = async info => {
  try {
    return Promise.resolve(
      await apiInstance.get(ApiConstants.GET_ACCOUNT_LIST),
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.addCategory = async info => {
  try {
    return Promise.resolve(
      await apiInstance.post(ApiConstants.CREATE_CATEGORY, info),
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.getCategory = async info => {
  try {
    return Promise.resolve(
      await apiInstance.get(ApiConstants.GET_CATEGORY_LIST),
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

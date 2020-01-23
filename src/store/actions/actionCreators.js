import * as actionTypes from './actionTypes';

export const changeLanguage = (langCode) => {
  return {
    type: actionTypes.LANG_ACTION,
    langCode: langCode
  }
}

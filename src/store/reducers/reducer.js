import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../shared/utility';

const initialState = {
  languageCode: localStorage.getItem('languageCode') ? localStorage.getItem('languageCode') : 'en'
}

const changeLanguage = (state, action) => {
  localStorage.setItem('languageCode', action.langCode);
  return updateObject(state, {
    languageCode: action.langCode
  });
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.LANG_ACTION: return changeLanguage(state, action);
    default:
      return state;
  }
}

export default reducer;

import { defaultStyles, defaultTitle } from '@/constants';
import { clone } from '@core/utils';

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  stylesState: {},
  currentText: '',
  dataState: {},
  currentStyle: defaultStyles,
  openedDate: new Date().toJSON()
};

const normalize = state => ({
  ...state,
  currentStyle: defaultStyles,
  currentText: ''
});

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState);
}
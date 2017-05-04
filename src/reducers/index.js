
import { combineReducers } from 'redux';

import drawer from './drawer';
import route from './route';
import posts from './post';
import user from './user';

export default combineReducers({
  drawer,
  route,
  posts,
  user,
});

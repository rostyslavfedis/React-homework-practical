import {createStore} from 'redux';
import {reducer} from './reduser/user-reduser';

export const store =createStore(reducer)


import { connect } from 'pwa-helpers';
import { store } from './store.js';
import * as actions from './actions.js';

const updateStore = {...actions};

export { connect, store, updateStore};
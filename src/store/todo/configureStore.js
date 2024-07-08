import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const todoStore = configureStore({reducer})
export default todoStore

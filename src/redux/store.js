import {createStore} from 'redux';
import { todoApp } from "./todoApp";

export const store = createStore(todoApp);

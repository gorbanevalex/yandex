import './login.scss';
import html from './login.pug';
import {inputHandler} from '../../../../components/input/input';

document.body.innerHTML = html({});
inputHandler();

import './profile.scss';
import '../../components/personLogo/personLogo.scss';
import './components/mainInfo/mainInfo.scss';
import './components/infoField/infoField.scss';
import html from './profile.pug';
import {setFieldsAction} from './components/infoField/infoField';
import {uploadFile} from '../../components/personLogo/personLogo';
import {toggleFileModal} from '../../components/personLogo/personLogo';

document.body.innerHTML = html({});

setFieldsAction();
uploadFile();
toggleFileModal();
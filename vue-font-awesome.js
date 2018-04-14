import Vue from 'vue'

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands';
import solids from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';

fontawesome.library.add(regular);
fontawesome.library.add(brands);
fontawesome.library.add(solids);

Vue.component(FontAwesomeIcon.name, FontAwesomeIcon);

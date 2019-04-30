import Vue from 'vue';

import {
    ViewBox,
    XHeader,
    Group,
    XInput,
    XButton,
    ToastPlugin
} from 'vux';

Vue.component('view-box',ViewBox);
Vue.component('x-header',XHeader);
Vue.component('group',Group);
Vue.component('x-input', XInput);
Vue.component('x-button', XButton);

Vue.use(ToastPlugin);

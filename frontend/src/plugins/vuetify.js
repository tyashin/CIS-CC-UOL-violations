import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);

const options = {
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#1EB980',
        secondary: '#045D56',
        tertiary: '#FF6859',
        quaternary: '#FFCF44',
        quinary: '#B15DFF',
        senary: '#72DEFF',
        'background-lite': '#41414c',
        'drawer-background': '#33333d',
      },
    },
  },

};

export default new Vuetify({
  theme: { dark: true },

  icons: {
    iconfont: 'mdiSvg',
  },
  ...options,
});

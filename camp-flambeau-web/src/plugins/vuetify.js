import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#920000',
                secondary: '#f17105',
                accent: '#e6c229',
                error: '#ff5555',
            },
        },
    },
});

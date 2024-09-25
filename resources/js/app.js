import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import { 
    VApp, 
    VIcon,
    VNavigationDrawer,
    VList,
    VListItem,
    VListItemTitle,
    VListItemAction,
    VListGroup,
    VAvatar,
    VRow,
    VCol,
    VAppBar,
    VAppBarNavIcon,
    VImg,
    VToolbarTitle,
    VSpacer,
    VLayout,
    VContainer,
    VMain,
    VFooter,
    VBtn,
    VBadge,
    VToolbar,
    VTextField,
    VForm,
    VAlert,
    VExpandTransition,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VProgressCircular,
    VOverlay,
    VDialog,
    VTabs,
    VTab,
    VDivider,
    VSnackbar,
    VDataTable,
    VSelect,
    VPagination,
    VAutocomplete,
    VChip
} from 'vuetify/components'; // Importar os componentes necessários
import 'vuetify/styles'; // Importar os estilos do Vuetify
import '@mdi/font/css/materialdesignicons.css'; // Importar ícones
import App from './components/App.vue';
import router from './routes.js'; // Importar o roteador

// Criar uma instância do Vuetify
const vuetify = createVuetify({
    components: {
        VApp, 
        VIcon,
        VNavigationDrawer,
        VList,
        VListItem,
        VListItemTitle,
        VListItemAction,
        VListGroup,
        VAvatar,
        VRow,
        VCol,
        VAppBar,
        VAppBarNavIcon,
        VImg,
        VToolbarTitle,
        VSpacer,
        VLayout,
        VContainer,
        VMain,
        VFooter,
        VBtn,
        VBadge,
        VToolbar,
        VTextField,
        VForm,
        VAlert,
        VExpandTransition,
        VCard,
        VCardTitle,
        VCardText,
        VCardActions,
        VProgressCircular,
        VOverlay,
        VDialog,
        VTabs,
        VTab,
        VDivider,
        VSnackbar,
        VDataTable,
        VSelect,
        VPagination,
        VAutocomplete,
        VChip
    },
    icons: {
        defaultSet: 'mdi', // Definir o ícone padrão
    },
});

// Criar uma instância do Vue para a aplicação
const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount('#app');
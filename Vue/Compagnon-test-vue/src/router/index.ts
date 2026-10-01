import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

// Definition typée du tableau de routes
const routes: RouteRecordRaw[] = [
    // Nouvelle manière avec lazy loading
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: () => import('../Views/tp/Home.vue'),
    },
    {
        path: '/about',
        meta: {
            title: 'About',
        },
        component: () => import('../Views/tp/About.vue'),
    },
    {
        path: '/exInterpolation',
        component: () => import('../Views/exercices/ExInterpolation.vue'),
    },
    {
        path: '/lessonAttributeBinding',
        component: () => import('../Views/lessons/LessonAttributeBinding.vue'),
    },
    {
        path: '/lessonTextInterpolation',
        component: () => import('../Views/lessons/LessonTextInterpolation.vue'),
    },
    {
        path: '/lessonIntroduction',
        component: () => import('../Views/lessons/LessonIntroduction.vue'),
    },
    {
        path: '/lessonSetup',
        component: () => import('../Views/lessons/LessonSetup.vue'),
    },
    {
        path: '/lessonSyntax',
        component: () => import('../Views/lessons/LessonSyntax.vue'),
    },
    {
        path: '/dataBinding',
        component: () => import('../Views/tp/Databinding.vue'),
    },
    {
        path: '/lessonEventBinding',
        component: () => import('../Views/lessons/LessonEventBinding.vue'),
    },
    {
        path: '/exEventBinding',
        component: () => import('../Views/exercices/ExEventBinding.vue'),
    },
    {
        path: '/lessonTwoWayBinding',
        component: () => import('../Views/lessons/LessonTwoWayBinding.vue'),
    },
    {
        path: '/lessonDynamicStyling',
        component: () => import('../Views/lessons/LessonDynamicStyling.vue'),
    },
    {
        path: '/exDynamicStyling',
        component: () => import('../Views/exercices/ExDynamicStyling.vue'),
    },
    {
        path: '/lessonConditionalRendering',
        component: () => import('../Views/lessons/LessonConditionalRendering.vue'),
    },
    {
        path: '/exConditionalRendering',
        component: () => import('../Views/exercices/ExConditionalRendering.vue'),
    },
    {
        path: '/lessonListRendering',
        component: () => import('../Views/lessons/LessonListRendering.vue'),
    },
    {
        path: '/exListRendering',
        component: () => import('../Views/exercices/ExListRendering.vue'),
    },
    {
        path: '/lessonLifecycle',
        component: () => import('../Views/lessons/LessonLifecycle.vue'),
    },
    {
        path: '/exLifecycle',
        component: () => import('../Views/exercices/ExLifecycle.vue'),
    },
    {
        path: '/exCrashTestComputer',
        component: () => import('../Views/exercices/ExCrashTestComputer.vue'),
    },
    {
        path: '/reactivite',
        component: () => import('../Views/tp/Reactivite.vue'),
    },
    {
        path: '/register',
        component: () => import('../Views/auth/Register.vue'),
    },
    {
        path: '/profiles',
        component: () => import('../Views/auth/ProfilesListView.vue'),
    },
    {
        path: '/profiles/:id',
        name: 'profile-detail',
        component: () => import('../Views/auth/ProfileDetailView.vue'),
    },
    {
        path: '/login',
        component: () => import('../Views/auth/Login.vue'),
    },
    {
        path: '/productCatalog',
        component: () => import('../Views/tp/ProductCatalog.vue'),
    },
    {
        path: '/lessonComputedProperties',
        component: () => import('../Views/lessons/LessonComputedProperties.vue'),
    },
    {
        path: '/lessonProps',
        component: () => import('../Views/lessons/LessonProps.vue'),
    },
    {
        path: '/lessonWatchers',
        component: () => import('../Views/lessons/LessonWatchers.vue'),
    },
    {
        path: '/messagecard',
        component: () => import('../components/MessageCard.vue'),
    },
    {
        path: '/exProps',
        component: () => import('../Views/exercices/ExProps.vue'),
    },
    {
        path: '/lessonEmit',
        component: () => import('../Views/lessons/LessonEmit.vue'),
    },
    {
        path: '/exEmit',
        component: () => import('../Views/exercices/ExEmit.vue'),
    },
    {
        path: '/firebaseArticlesManager',
        component: () => import('../Views/exercices/FirebaseArticlesManager.vue'),
    },
    {
        path: '/login',
        component: () => import('../Views/auth/Login.vue'),
    },
     {
        path: '/projetYesevent',
        component: () => import('../Views/exercices/ProjetYesevent.vue'),
    },
    {
        path: '/exPiniaCounter',
        component: () => import('../Views/exercices/ExPinaCounterStore.vue'),
    },
    {
        path: '/taskManager',
        component: () => import('../Views/tp/TaskManager.vue'),
    },
    {
        path: '/create-weather-account',
        component: () => import('../Views/weatherTravelApp/CreateUserWithEmailAndPassword.vue'),
    },
    {
        path: '/login-weather-account',
        component: () => import('../Views/weatherTravelApp/SignInWithEmailAndPassword.vue'),
    },
    {
        path: '/dashboardTrips',
        name: 'dashboardTrips',
        component: () => import('../Views/weatherTravelApp/DashboardTrips.vue'),
    }, 
    {
        path: '/weather-services',
        component: () => import('../Views/weatherTravelApp/WeatherService.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../Views/tp/NotFound.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
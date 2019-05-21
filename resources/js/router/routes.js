const routes = [
    {
        path: '/',
        name: 'home',
        component: require('../views/HomePage').default
    },
    {
        path: '/login',
        name: 'login',
        component: require('../views/auth/login/LoginPage').default
    },
    {
        path: '/logout',
        name: 'logout',
        meta: { requiresAuth: true }
    },
    {
        path: '/my-account',
        name: 'my-account',
        component: require('../views/auth/my-account/MyAccountPage').default,
        meta: { requiresAuth: true }
    },
    {
        path: '/password-reset/request',
        name: 'password-reset-request',
        component: require('../views/auth/password-reset/request/PasswordResetRequestPage').default
    },
    {
        path: '/password-reset/check/:uid',
        name: 'password-reset-check',
        component: require('../views/auth/password-reset/check/PasswordResetCheckPage').default
    },
    {
        path: '/register',
        name: 'register',
        component: require('../views/auth/register/RegisterPage').default
    },
    {
        path: '/user',
        name: 'user',
        component: require('../views/auth/user/UserPage').default,
        meta: { requiresAuth: true }
    },
    {
        path: '/chat',
        name: 'chat',
        component: require('../views/chat/ChatPage').default,
        children: [
            {
                path: 'channels',
                name: 'channels',
                component: require('../views/chat/channels/ChannelsListPage').default
            },
            {
                path: 'add-channel',
                name: 'add-channel',
                component: require('../views/chat/channels/AddChannelPage').default,
            }
            ,
            {
                path: 'channels/:channel_id',
                name: 'channel',
                component: require('../views/chat/messages/MessagePage').default,
            }
        ],
        meta: { requiresAuth: true }
    }
];

export default routes;
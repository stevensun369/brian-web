// signup & login
import Signup from './routes/auth/Signup.svelte'
import Login from './routes/auth/Login.svelte'

// notes
import New from './routes/notes/New.svelte'


// home
import Home from './routes/Home.svelte';

export default {
    // signup & login
    '/signup': Signup,
    '/login': Login,

    '/new': New,

    '/home': Home,
};

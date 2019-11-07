import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Blog from './components/Blog'
import CreateBlog from './components/CreateBlog'
import EditBlog from './components/EditBlog'


export default {
    mode: 'history',

    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }, {
            path: '/work',
            name: 'work',
            component: Work
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/posts',
            name: 'posts',
            component: Blog
        },
        {
            name: 'create',
            path: '/create',
            component: CreateBlog
        },
        {
            name: 'edit',
            path: '/edit/:id',
            component: EditBlog
        },
        // {
        //     name: 'posts',
        //     path: '/posts',
        //     component: IndexComponent
        // }
    ]
};

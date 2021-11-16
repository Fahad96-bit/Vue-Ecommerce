import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import UserScreen from "./components/UserScreen.vue";
import DashBoard from "./components/Dashboard.vue";
import Cheery from './components/pages/Cheery.vue'
import Monark from './components/pages/Monark.vue'
import Diners from './components/pages/Diners.vue'
import Polo from './components/pages/Polo.vue'
export default [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/users",
    component: UserScreen,
  },
  {
    path: "/dashboard",
    component: DashBoard,
  },
  {
    path: "/cheery",
    component: Cheery,
  },
  {
    path: "/monark",
    component: Monark,
  },
  {
    path: "/diners",
    component: Diners,
  },
  {
    path: "/polo",
    component: Polo,
  },
];
import { createBrowserRouter } from 'react-router'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import LandingPage from '../pages/LandingPage'
import MainScreen from '../pages/MainScreen'
let router = createBrowserRouter([
  {
    path: '/signUp',
    Component: SignUp
  },
  {
    path: '/login',
    Component: Login
  },
  {
    path: '/',
      Component: MainScreen
    
  },
  {
    path: '/mainScreen',
    Component: MainScreen,
  }
])

export default router

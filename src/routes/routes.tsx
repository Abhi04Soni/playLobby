import { createBrowserRouter } from 'react-router'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'

let router = createBrowserRouter([
  {
    path: '/signUp',
    Component: SignUp
  },
  {
    path: '/login',
    Component: Login
  }
])

export default router

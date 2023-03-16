import './App.css';
import React, { useState } from 'react'
import { 
  BrowserRouter as Router,
  Routes, 
  Route,
  Link 
} from 'react-router-dom';

import { MeetingRoom } from './components/meetingRoom'
import { Page404 } from './components/page404'
import { Profile } from './components/profile'
import { ApiTronaldDump } from './components/apiTronaldDump'
import { Home } from './components/home'
import { Signup } from './components/signup'
import { Login } from './components/login'

import { PrivateRoute } from './hocs/PrivateRoute';
import { PublicRoute } from './hocs/PublicRoute'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import { Home as HomeIcon, PersonRounded, QuestionAnswerRounded, Accessible, Public } from '@material-ui/icons'
import { useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase'

let persistor = persistStore(store)


export const App = () => {
  const [authed, setAuthed] = useState(false)

  const AuthedCheck = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthed(true)
      } else {
        setAuthed(false)
      }
    })
  }

  const Component = () => {
    const logout = async () => {
      try {
          await auth.signOut()
      } catch(error) {
          console.log(error)
      }
    }

    return(
      authed ? <button onClick={logout}>Logout</button> : <li><Link to='/chats'></Link>Login</li>
    )
  }

  useEffect(() => {
    AuthedCheck()
  }, [])

  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to='chats'>
                    <QuestionAnswerRounded />
                  </Link>
                </li>
                <li>
                  <Link to='profile'>
                    <PersonRounded />
                  </Link>
                </li>
                <li>
                  <Link to='api'>
                    <Accessible />
                  </Link>
                </li>
                <Component />
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
                <Route
                  authenticated={authed}
                  exact path='/login'
                  element={
                    <PublicRoute>
                      <Login />
                    </PublicRoute>
                  } />
                <Route
                  authenticated={authed}
                  exact path='/signup'
                  element={
                    <PublicRoute
                      authenticated={authed}>
                        <Signup />
                    </PublicRoute>
                  } />
                <Route 
                  authenticated={authed}
                  exact path='/'
                  element={
                    <PublicRoute
                      authenticated={authed}>
                        <Home />
                    </PublicRoute>
                  } />
                <Route
                  authenticated={authed}
                  path='/chats/*'
                  element={
                    <PrivateRoute
                      authenticated={authed}>
                        <MeetingRoom />
                    </PrivateRoute>
                  } />
                <Route
                  authenticated={authed}
                  path='/profile'
                  element={
                    <PrivateRoute
                      authenticated={authed}>
                        <Profile />
                    </PrivateRoute>
                  } />
                <Route
                  authenticated={authed}
                  path='*'
                  element={
                    <Page404 />
                  } />
                <Route
                  authenticated={authed}
                  path='/api'
                  element={
                    <PrivateRoute
                      authenticated={authed}>
                        <ApiTronaldDump />
                    </PrivateRoute>
                  } />
            </Routes>
          </main>
        </PersistGate>
      </Provider>
    </Router>
  )
}

// const Home = () => {
//   return(
//     <h1>Здесь будет главная страница</h1>
//   )
// }

export default App;

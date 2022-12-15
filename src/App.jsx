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

import { Home as HomeIcon, PersonRounded, QuestionAnswerRounded, Accessible } from '@material-ui/icons'
import { useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase'

let persistor = persistStore(store)


export const App = () => {
  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthed(true)
      } else {
        setAuthed(false)
      }
    })
  }, [])

  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <main>
            <Routes>
                <PublicRoute
                  authenticated={authed}
                  exact path='/login'
                  element={
                    <Login />
                  } />
                <PublicRoute
                  authenticated={authed}
                  exact path='/signup'
                  element={
                    <Signup />
                  } />
                <PublicRoute 
                  authenticated={authed}
                  exact path='/'
                  element={
                    <Home />
                  } />
                <PrivateRoute
                  authenticated={authed}
                  path='/chats/*'
                  element={
                    <MeetingRoom />
                  } />
                <PrivateRoute
                  authenticated={authed}
                  path='/profile'
                  element={
                    <Profile />
                  } />
                <PublicRoute
                  authenticated={authed}
                  path='*'
                  element={
                    <Page404 />
                  } />
                <PublicRoute
                  authenticated={authed}
                  path='/api'
                  element={
                    <ApiTronaldDump />
                  } />
            </Routes>
          </main>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to='/'>
                    <HomeIcon />
                  </Link>
                </li>
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
                  <Link to='login'>
                    <HomeIcon />
                  </Link>
                </li>
                <li>
                  <Link to='signup'>
                    <HomeIcon />
                  </Link>
                </li>
                <li>
                  <Link to='api'>
                    <Accessible />
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
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

import './App.css';
import React from 'react'
import { 
  BrowserRouter as Router,
  Routes, 
  Route, 
  Link 
} from 'react-router-dom';

import { MeetingRoom } from './components/meetingRoom'
import { Page404 } from './components/page404'
import { Profile } from './components/profile'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import { Home as HomeIcon, PersonRounded, QuestionAnswerRounded } from '@material-ui/icons';

let persistor = persistStore(store)


export const App = () => {

  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <main>
            <Routes>
                <Route 
                  path='/chats/*'
                  element={
                    <MeetingRoom />
                  } />
                <Route 
                  path='/profile'
                  element={
                    <Profile />
                  } />
                <Route 
                  path='/'
                  element={
                    <Home />
                  } />
                <Route 
                  path='*'
                  element={
                    <Page404 />
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
              </ul>
            </nav>
          </header>
        </PersistGate>
      </Provider>
    </Router>
  )
}

const Home = () => {
  return(
    <h1>Здесь будет главная страница</h1>
  )
}

export default App;

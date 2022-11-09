import './App.css';
import React from 'react'
import { MeetingRoom } from './components/meetingRoom'
import { Page404 } from './components/page404'
import { 
  BrowserRouter as Router,
  Routes, 
  Route, 
  Link 
} from 'react-router-dom';
import { Home as HomeIcon, PersonRounded, QuestionAnswerRounded } from '@material-ui/icons';

export const App = () => {

  return (
    <Router>
      <main>
        <Routes>
            <Route 
              path='/chats'
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
    </Router>
  )
}

const Profile = () => {
  return(
    <h1>Здесь будет страница вашего профиля</h1>
  )
}

const Home = () => {
  return(
    <h1>Здесь будет главная страница</h1>
  )
}

export default App;

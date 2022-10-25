import './App.css';
import React, { useEffect, useState } from "react";
import { Message } from './components/message';
import { Form } from './components/form';
import { getCurrentDate } from './components/currentDate';



export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageBody, setMessageBody] = useState({
    text: '',
    author: ''
  })

  const ROBOT_MESSAGE = 'Привет. Сообщение отправлено'

  useEffect(() => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
      setTimeout(() => {
        const timeStamp = getCurrentDate()
        setMessageList(prevstate => [...prevstate, {text: ROBOT_MESSAGE, author: 'robot', timeStamp: timeStamp}])
      }, 1500)
    }
  }, [messageList])

  return (
    <div className="App">
      <div className="messageList">
        {
          messageList.map((e, i) => <Message text={e.text} author={e.author} key={i} timeStamp={e.timeStamp} />)
        }
      </div>
      <Form 
        data={messageBody} 
        setData={setMessageBody}
        setMessage={setMessageList}
      ></Form>
    </div>
  )
}

export default App;

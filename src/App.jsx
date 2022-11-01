import './App.css';
import React, { useEffect, useState } from "react";
import { Message } from './components/message';
import { Form } from './components/form';
import { getCurrentDate } from './components/currentDate';
import { Sidebar } from './components/sidebar';



export const App = () => {
  const [chatList, setChatList] = useState([
    {
      title: 'Оксана Емельянова',
      img: '',
    },
    {
      title: 'Николай Гузенко',
      img: '',
    },
    {
      title: 'Илья Голяков',
      img: '',
    },
    {
      title: 'Владислав Сухачев',
      img: '',
    },
  ])

    useEffect(() => {
      const copyChatList = Object.assign([], chatList);
      for (let item of copyChatList) {
        const initial = item.title.split(' ');
        const firstLetterName = initial[0].slice(0, 1);
        const firstLetterSurname = initial[1].slice(0, 1);
        copyChatList[copyChatList.indexOf(item)].FIO = firstLetterName + firstLetterSurname
      };
      setChatList(() => copyChatList) // измененная копия массива записывается в state chatList
    }, [])

  const [messageList, setMessageList] = useState([
    {
      text: 'Привет, как дела?',
      author: 'Аврора'
    },
    {
      text: 'Пойдем сегодня в парк гулять?',
      author: 'Аврора'
    },
    {
      text: 'Можно сходить на какую нибудь мелодрамму',
      author: 'Аврора'
    },
    {
      text: 'Вместо того чтобы возвеличивать небо и размышлять о нем, не лучше ли самим, умножая вещи, подчинить себе небо? Вместо того чтобы служить небу и воспевать его, не лучше ли, преодолевая небесную судьбу, самим использовать небо в своих интересах?',
      author: 'Одиссей'
    },
    {
      text: 'Ясно, напишу позже',
      author: 'Аврора'
    },
  ])
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
      <div className="workSpace">
        <Sidebar 
          chatList={chatList}
          setChatList={setChatList}
          data={messageBody} 
          setData={setMessageBody}/>
        <div className="messageList">
          {
            messageList.map((e, i) => <Message text={e.text} author={e.author} key={i} timeStamp={e.timeStamp} />)
          }
        </div>
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

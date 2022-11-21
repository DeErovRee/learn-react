import React, { useState, useEffect} from "react";
import { Sidebar } from './sidebar';
import { MessageField } from "./messageField";

export const MeetingRoom = () => {
    const [chatList, setChatList] = useState([
        {
                id: 1,
                title: 'Оксана Емельянова',
                FIO: 'ОЕ',
                img: '',
                messages: [
                    {
                        author: 'Оксана Емельянова',
                        text: 'Привет!',
                    },
                    {
                        author: 'Оксана Емельянова',
                        text: 'Почему не отвечаешь?',
                    },
                    {
                        author: 'Денис Нестеров',
                        text: 'Я занят. Прости.',
                    },
            ]
        },
        {
            id: 2,
            title: 'Николай Гузенко',
            FIO: 'НГ',
            img: '',
            messages: [
                {
                    author: 'Николай Гузенко',
                    text: 'Привет!',
                },
                {
                    author: 'Николай Гузенко',
                    text: 'Собираемся завтра на др к Андрею, ты идешь?',
                },
                {
                    author: 'Денис Нестеров',
                    text: 'Еще спрашиваешь? Конечно',
                },
            ]
        },
        {
            id: 3,
            title: 'Владислав Сухачев',
            FIO: 'ВС',
            img: '',
            messages: [
                {
                    author: 'Денис Нестеров',
                    text: 'У Андрея завтра др. Нужно что то дарить. Есть идеи?',
                },
                {
                    author: 'Владислав Сухачев',
                    text: 'Как на счет PlayStation 5',
                },
                {
                    author: 'Денис Нестеров',
                    text: 'Идёт. Спрошу Илью будет ли он скидываться',
                },
            ]
        },
        {
            id: 4,
            title: 'Илья Голяков',
            FIO: 'ИГ',
            img: '',
            messages: [
                {
                    author: 'Денис Нестеров',
                    text: 'Скидываемся на подарок Андрею, ты с нами?',
                },
                {
                    author: 'Илья Голяков',
                    text: 'Да. По сколько?',
                },
                {
                    author: 'Денис Нестеров',
                    text: 'С тебя 55.000',
                },
            ]
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
        
    const ROBOT_MESSAGE = 'Привет. Сообщение отправлено'
        
    // useEffect(() => {
    //         if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
    //         setTimeout(() => {
    //             const timeStamp = getCurrentDate()
    //             setMessageList(prevstate => [...prevstate, {text: ROBOT_MESSAGE, author: 'robot', timeStamp: timeStamp}])
    //         }, 1500)
    //         }
    // }, [messageList])

    return (
        <div className="App">
            <div className="workSpace">
                <Sidebar />
                <MessageField />
            </div>
        </div>
    )
}
import React from 'react'
import { Toggler } from '../redux/profile/toggler'

export const Profile = () => {

    return (
        <div className="profile">
            <div className="profileHeader">
                <div className="profileImg">

                </div>
                <div className="profileInfo">
                    <div className="profileName">Денис Нестеров</div>
                    <div className="profileStatus">Занят</div>
                </div>
                <div className="settings">
                    <p>Закрытый профиль</p>
                    <Toggler />
                </div>
            </div>
        </div>
    )
}
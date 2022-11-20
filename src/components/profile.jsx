import React, { useState } from 'react'
import { toggleProfilePrivacy } from '../redux/reducer'
import { Toggler } from '../redux/toggler'

export const Profile = () => {

    const [profilePrivacy, setProfilePrivacy] = useState(false)

    const defaultAction = {
        type: 'SWITCH_TOGGLE'
    }

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
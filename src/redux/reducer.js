export const toggleProfilePrivacy = (state = false, action) => {
    switch(action.type) {
        case 'SWITCH_PRIVACY':
            return !state

        default: return state
    }
}
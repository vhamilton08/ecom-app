import axios from 'axios'

const initialState = {
    user: {userId: 0, username: ''},
    isLoggedIn: false
}

const GET_USER = "GET_USER"
const LOGOUT_USER = "LOGOUT_USER"

export function getUser() {
    const user = axios.get('/auth/user')
    .then(res => res.data)
    .catch(err => console.log(err))

    return {
        type: GET_USER,
        payload: user
    }
}

export function logoutUser() {
    const logout = axios.post('/auth/logout')
    .then(res => res.data)
    .catch(err => console.log(err))

    return {
        type: LOGOUT_USER,
        payload: logout
    }
}

export default function userReducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case GET_USER + "_REJECTED":
            return state
        case GET_USER + "_FULFILLED":
            if(payload) {
                return {...state, user: payload, isLoggedIn: true}
            } else return state
        case GET_USER + "_PENDING":
            return state
        case LOGOUT_USER + "_REJECTED":
            return state
        case LOGOUT_USER + "_FULFILLED":
            return {...state, user: {userId: 0, username: ''}, isLoggedIn: false}
        case LOGOUT_USER + "_PENDING":
            return state
        default:
            return state
    }
}


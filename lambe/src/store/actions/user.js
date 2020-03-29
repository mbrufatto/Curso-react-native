import { USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED } from './actionTypes'
import axios from 'axios'
import { connect } from 'react-redux'

const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = 'AIzaSyC8JU-CkAMMX5a4-bRKlfOkDZLF-J9Hvog'

export const userLogged = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}

export const createUser = user => {
    return dispatch => {
        axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
            .catch(err => console.log(err))
            .then(res => {
                if(res.data.localId) {
                    axios.put(`/users/${res.data.localId}.json`, {
                        name: user.name
                    })
                        .catch(err => {
                            dispatch(setMessage({
                                title: 'Error',
                                text: 'Ocorreu um erro inesperado!'
                            }))
                        })
                        .then(() => {
                            dispatch(login(user))
                        })
                }
            })
    }
}

export const loadingUser = () => {
    return {
        type: LOADING_USER
    }
}

export const userLoaded = () => {
    return {
        type: USER_LOADED
    }
}

export const login = user => {
    return dispatch => {
        console.log("Teste Login" )
        dispatch(loadingUser())
        console.log("Teste Depois do Dispach" )
        console.log(`${authBaseURL}/veryPassword?key=${API_KEY}`)
        axios.post(`${authBaseURL}/veryPassword?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
            .catch(err => console.log(err))
            .then(res => {
                console.log("Teste " + res.data )
                if(res.data.localId) {
                    user.token = res.data.idToken
                   axios.get(`/users/${res.data.localId}.json`)
                        .catch(err => console.log(err))
                        .then(res => {
                            delete user.password
                            user.name = res.data.name
                            dispatch(userLogged(user))
                            dispatch(userLoaded())
                        })
                }
            })
    }
}
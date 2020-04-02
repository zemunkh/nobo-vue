import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('./firebaseConfig.js')

Vue.use(Vuex)

fb.auth.onAuthStateChanged(user => {
    if(user) {
        store.commit('setCurrentUser', user)
        store.dispatch('fetchUserProfile')
        fb.usersCollection.doc(user.uid).onSnapshot(doc => {
            store.commit('setUserProfile', doc.data())
        })
        // realtime updates
        // fb.booksCollection.orderBy('createdAt')
    }
});

export const store = new Vuex.Store({
    state: {
        currentUser: null,
        userProfile: {},
    },
    actions: {
        clearData({ commit }) {
            commit('setCurrentUser', null)
            commit('setUserProfile', {})
        },
        fetchUserProfile({ commit, state }) {
            fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
                commit('setUserProfile', res.data())
            }).catch(err => {
                console.log("When fetching user profile: ", err)
            })
        },
        updateProfile({ state }, data) {
            let firstname = data.firstname
            let lastname = data.lastname

            fb.usersCollection.doc(state.currentUser.uid).update({ firstname, lastname }).then(() => {
                //update all posted books by user to reflect new name
                // fb.booksCollection.where('userId', '==', state.currentUser.uid).get().then(doc => {
                //     docs.forEach(doc => {
                //         fb.booksCollection.doc(doc.id).update({
                //             userName: firstname
                //         })
                //     })
                // })
            }).catch(err => {
                console.log("When updating profile: ", err); 
            })
        }
    },
    mutations: {
        setCurrentUser(state, val) {
            state.currentUser = val
        },
        setUserProfile(state, val) {
            state.userProfile = val
        },
        // setBooks(state, val) {
        //     if(val) {
        //         state.books = val
        //     } else {
        //         state.books = []
        //     }
        // }
    }
})
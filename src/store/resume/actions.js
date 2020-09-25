import firebase from 'firebase'
import router from '../../router'
import {resumeCollection, authFirebase} from '../../firebase'

export default {
    SignUpAction ({commit}, payload) {
        authFirebase.auth().createUserWithEmailAndPassword(payload.email, payload.password) 
            .then((response) => {
                response.user.sendEmailVerification().then(() => {
                    //alert("Email verification is sent to your email")
                    authFirebase.auth().signOut();   
                    router.replace('login')                 
                })
            })
            .catch((error) => {
                commit("SET_SIGNUP_ERROR", error.message)
                commit("SET_USER", null);
            })
    },
    SignInAction ({commit}, payload) {
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((response) => {
            if(response.user.emailVerified) {
                resumeCollection.doc(response.user.uid).get().then((response) => {
                    if(response.exists) {
                      commit("SET_RESUME_INFO", response.data())
                    }
                    router.replace('home')
                  }).catch((error) => {
                    alert(error.message)
                  })
                commit("SET_USER", response.user.uid)
            } else {
                firebase.auth().signOut()
                commit("SET_VERIFIED", "You need to verify your email first")
            }
        })
        .catch((error) => {
            commit("SET_VERIFIED", error.message)
        })
    },
    SignOutAction ({commit}) {
        firebase.auth().signOut()
        .then(() => {
            commit("SET_USER", null)
            router.replace('login')
        })
        .catch((error) => {
            alert(error.message)
        })
    },
    AddSection ({commit}, payload) {
        commit('ADD_SECTION', payload.name);
    },
    DeleteSection({commit}, payload) {
        commit('DELETE_SECTION', payload.id);
    }
};

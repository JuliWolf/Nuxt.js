import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      SET_POSTS(state, posts) {
        state.loadedPosts = posts;
      },
      ADD_POST(state, post) {
        state.loadedPosts.push(post);
      },
      EDIT_POST(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
        state.loadedPosts[postIndex] = editedPost;
      },
      SET_TOKEN(state, token) {
        state.token = token;
      }
    },
    actions: {
      // Executed by nuxt once
      nuxtServerInit(vuexContext, context) {
        // Fetch data from server
        return axios.get('https://nuxt-project-4c239-default-rtdb.firebaseio.com/posts.json')
          .then(res => {
            const postArray = [];
            for (const key in res.data) {
              postArray.push({ ...res.data[key], id: key });
            }
            vuexContext.commit('SET_POSTS', postArray);
          })
          .catch(e => context.error(e))

      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('SET_POSTS', posts)
      },
      addPost(vuexContext, post) {
        const createdPost = { ...post, updatedDate: new Date() };
        return axios.post('https://nuxt-project-4c239-default-rtdb.firebaseio.com/posts.json?auth=' + vuexContext.state.token, createdPost)
        .then(result => {
          // console.log(result);
          vuexContext.commit('ADD_POST', { ...createdPost, id: result.data.name })
        })
        .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return axios.put('https://nuxt-project-4c239-default-rtdb.firebaseio.com/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token, editedPost)
        .then(res => {
          console.log(res)
          vuexContext.commit('EDIT_POST', editedPost)
        })
        .catch(e => console.log(e))
      },
      authenticateUser(vuexContext, authData) {
        let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.fbAPIKey;
        if(!authData.isLogin){
          authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.fbAPIKey;
        }

        return axios.post(authUrl, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }).then(result => {
          vuexContext.commit('SET_TOKEN', result.data.idToken);
          // console.log(result)
        }).catch(e => console.log(e));
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      isAuthenticated(state) {
        return state.token !== null
      }
    }
  })
}

export default createStore;

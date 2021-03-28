import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
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
      }
    },
    actions: {
      // Executed by nuxt once
      nuxtServerInit(vuexContext, context) {
        // Fetch data from server
        return axios.get(process.env.baseUrl + '/posts.json')
          .then(res => {
            const postArray = [];
            for (const key in res.data) {
              postArray.push({ ...res.data[key], id: key });
            }
            vuexContext.commit('SET_POSTS', postArray);
          })
          .catch(e => context.error(e))

        // if(context.store.state.loadedPosts.length > 0){
        //   return null;
        // }
        // if (!process.client) {
        //   console.log(context.req)
        // }
        // return new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     vuexContext.commit('SET_POSTS', [
        //       {
        //         id: '1',
        //         title: "First Post",
        //         previewText: "This is our first post!",
        //         thumbnail:
        //           "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
        //       },
        //       {
        //         id: '2',
        //         title: "Second Post",
        //         previewText: "This is our second post!",
        //         thumbnail:
        //           "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
        //       }
        //     ]);
        //     resolve()
        //     // reject(new Error())
        //   }, 1000);
        // })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('SET_POSTS', posts)
      },
      addPost(vuexContext, post) {
        const createdPost = { ...post, updatedDate: new Date() };
        return axios.post('https://nuxt-project-4c239-default-rtdb.firebaseio.com/posts.json', createdPost)
        .then(result => {
          // console.log(result);
          vuexContext.commit('ADD_POST', { ...createdPost, id: result.data.name })
        })
        .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return axios.put('https://nuxt-project-4c239-default-rtdb.firebaseio.com/posts/' + editedPost.id + '.json', editedPost)
        .then(res => {
          console.log(res)
          vuexContext.commit('EDIT_POST', editedPost)
        })
        .catch(e => console.log(e))
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  })
}

export default createStore;

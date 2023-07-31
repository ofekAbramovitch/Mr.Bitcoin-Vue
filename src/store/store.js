import { createStore } from 'vuex';
import { contactStore } from './contact-store.js'
import { userStore } from './user-store.js'

export const store = createStore({
    strict: true,
    modules: {
        contactStore,
        userStore
    }
})

store.subscribe((cmd, state) => {
    console.log('Command:', cmd.payload)
    console.log('storeState:\n', state)
})
import { createStore } from 'vuex';
import { contactStore } from './contact-store.js'

export const store = createStore({
    strict: true,
    modules: {
        contactStore,
    }
})

store.subscribe((cmd, state) => {
    console.log('Command:', cmd.payload)
    console.log('storeState:\n', state)
})
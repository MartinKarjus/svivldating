import { HydrateStore } from '@aurity/react-native-web-storage'
import { Router } from 'react-native-router-flux'
import { Provider } from 'react-redux'


// NOTE: import your redux store!
function App({ store }) {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}

export default HydrateStore(store)(App)
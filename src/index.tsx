import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store'

const container = document.getElementById('root')

if (container === null) {
  throw new Error('Failed to find the root element')
}

const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

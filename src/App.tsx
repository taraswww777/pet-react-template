import ogDefaultImage from './assets/og-default-image.png'
import { store } from './store'
import { Provider } from 'react-redux'
import { Select } from './ui/Select/Select.tsx';

export function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col items-center justify-center w-full h-lvh">
        <h1 className="text-6xl text-red-600 p-10">pet-react-template</h1>
        <img src={ogDefaultImage} className="ogDefaultImage" alt="ogDefaultImage" />
        <Select />
      </div>
    </Provider>
  )
}

import { BrowserRouter } from "react-router-dom"
import { RouterApp } from "./router/RouterApp"
import { Provider } from "react-redux"
import { store } from "./store/store"
import '../src/styles/styles.css'



export const MagneticMedia = () => {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
          <RouterApp />
      </BrowserRouter>
    </Provider>
  )
}
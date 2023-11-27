import { BrowserRouter } from "react-router-dom"
import { RouterApp } from "./router/RouterApp"
import { Provider } from "react-redux"
import { store } from "./store/store"
import '../src/styles/styles.css'
import { I18nextProvider } from "react-i18next"
import i18next from "i18next"

import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'

i18next.init({
	interpolation: { escapeValue: false },
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  },
  lng: 'en',
})


export const MagneticMedia = () => {

	return (
		<Provider store={store}>
			<BrowserRouter>
        <I18nextProvider i18n={i18next}>
          <RouterApp />
        </I18nextProvider>
			</BrowserRouter>
		</Provider>
	)
}

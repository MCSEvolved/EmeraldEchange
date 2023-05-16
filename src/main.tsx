import ReactDOM from 'react-dom/client'
import './View/Styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './View/App.tsx'
import { Auth0Provider } from '@auth0/auth0-react'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
  <Auth0Provider 
    domain='dev-qltgkmusiuib55ya.us.auth0.com'
    clientId='wI9Jf6IfQZVFCwympAhUzSihk43bYZjF'
    authorizationParams={{
      redirect_uri: window.location.href
    }}
  >
    <App />
  </Auth0Provider>
  </BrowserRouter>
)

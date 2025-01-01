import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom'
import { store } from './store.ts';
import { Provider } from 'react-redux';

const homeLink = "http://localhost:5173/home"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>

      <BrowserRouter>
        <Auth0Provider
          domain={import.meta.env.VITE_AUTH_DOMAIN}
          clientId={import.meta.env.VITE_AUTH_CLIENT}
          authorizationParams={{
            redirect_uri: homeLink
          }}

        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);

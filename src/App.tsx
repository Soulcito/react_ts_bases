import { FC } from 'react';
import { BrowserRouter, Link, Route, Router } from 'react-router-dom';
import './app.module.css';
import { UseState } from './hooks/use-state';


export const App: FC = () => (
  <BrowserRouter>
     <Route path='/'>
        <main>
          <header>

          </header>
        </main>
     </Route>
  </BrowserRouter>
)



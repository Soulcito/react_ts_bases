import { FC } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { UseState } from './hooks/use-state';
import { Styling } from './styling';
import { NumericInput } from './forms/numeric-input';
import { Context } from './context/context';
import { ThemeContextComponent } from './context/theme-context';
import { CustomHooks } from './hooks/custom-hooks';
import { UseEffect } from './hooks/use-effect';
import { UseReducer } from './reducer/use-reducer';
import { UseReducerOriginal } from './reducer/use-reducer-original';
import { UseReducerRefactor1 } from './reducer/use-reducer-refactor-1';
import { UseReducerRefactor2 } from './reducer/use-reducer-refactor-2';
import { UseStateInmutable } from './hooks/use-state-inmutable';
import { BindStyleCustomProperty } from './bind-style-custom-property';
import { AppErrorBoundary } from './error-boundaries/error-boundaries';
import { Timer } from './hooks/timer';
import { UseRef } from './hooks/use-ref';
import { UseReducerWithOptions } from './reducer/use-reducer-with-options';
import './app.module.css';


export const App: FC = () => (
  <BrowserRouter>
     <Route path='/' exact>
        <main>
          <header>
             <Link to='/use-state'>Use State</Link>
             <Link to='/use-state-inmutable'>Use State Inmutable</Link>
             <Link to='/numeric-input'>Numeric Input</Link>
             <Link to='/styling'>Styling</Link>
             <Link to='/context'>Context</Link>
             <Link to='/theme-context'>Theme Context</Link>
             <Link to='/custom-hooks'>Custom Hooks</Link>
             <Link to='/use-effect'>Use Effect</Link>
             <Link to='/use-reducer'>Use Reducer</Link>
             <Link to='/use-reducer-with-options'>Use Reducer With Options</Link>
             <Link to='/use-reducer-original'>Use Reducer Original</Link>
             <Link to='/use-reducer-refactor-1'>Use Reducer Refactor 1</Link>
             <Link to='/use-reducer-refactor-2'>Use Reducer Refactor 2</Link>
             <Link to='/bind-style-custom-property'>Bind Style Custom Property</Link>
             <Link to='/error-boundary'>Error Boundary</Link>
             <Link to='/timer'>Timer</Link>
             <Link to='/use-ref'>Use Ref</Link>
          </header>
        </main>
     </Route>
     <Route path='/styling'>
       <Styling />
     </Route>
     <Route path='/numeric-input'>
       <NumericInput />
     </Route>
     <Route path='/context'>
       <Context />
     </Route>
     <Route path='/theme-context'>
       <ThemeContextComponent/>
     </Route>
     <Route path='/custom-hooks'>
       <CustomHooks/>
     </Route>
     <Route path='/use-effect'>
       <UseEffect/>
     </Route>
     <Route path='/use-reducer'>
       <UseReducer/>
     </Route>
     <Route path='/use-reducer-with-options'>
       <UseReducerWithOptions/>
     </Route>
     <Route path='/use-reducer-original'>
       <UseReducerOriginal />
     </Route>
     <Route path='/use-reducer-refactor-1'>
       <UseReducerRefactor1/>
     </Route>
     <Route path='/use-reducer-refactor-2'>
       <UseReducerRefactor2/>
     </Route>
     <Route path='/use-state'>
       <UseState/>
     </Route>
     <Route path='/use-state-inmutable'>
       <UseStateInmutable/>
     </Route>
     <Route path='/bind-style-custom-property'>
       <BindStyleCustomProperty/>
     </Route>
     <Route path='/error-boundary'>
       <AppErrorBoundary/>
     </Route>
     <Route path='/timer'>
       <Timer/>
     </Route>
     <Route path='/use-ref'>
       <UseRef/>
     </Route>
  </BrowserRouter>
)



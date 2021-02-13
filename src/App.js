import React, { lazy, Suspense } from 'react';
import './app.css';

import gif from './carregando.gif';

const Register = lazy(() => import('./codesplitting/Register'));
const Menu = lazy(() => import('./codesplitting/Menu'));
const Rodape = lazy(() => import('./codesplitting/Rodape'));

function App() {
  return (
    <div className="container">
        <Suspense fallback={<img src={gif} />}>
            <Menu />
            <Register />
            <Rodape />
        </Suspense>
    </div>
  );
}

export default App;

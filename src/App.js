import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Prospects from './pages/Prospects';
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/masters/prospects' element={<Prospects />} />
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
          <Route component={NotFound} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

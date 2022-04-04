import React from 'react';
import GlobalStyles from 'theme/globalStyles';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Signup, Timeline } from './pages'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='timeline' element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
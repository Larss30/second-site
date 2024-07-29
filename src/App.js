import React from 'react';

import { Skills, Projects, Footer, Header, Tools } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Skills />
    <Tools />
    <Projects />
    <Footer />
  </div>
);

export default App;

import React from 'react';
import { Router } from '@reach/router';
// import { Form, Input } from '@rocketseat/unform';

import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

const Character = React.lazy(() => import('./pages/Character'));
const Comic = React.lazy(() => import('./pages/Comic'));
const Creator = React.lazy(() => import('./pages/Creator'));
const Event = React.lazy(() => import('./pages/Event'));
const Serie = React.lazy(() => import('./pages/Serie'));
const Story = React.lazy(() => import('./pages/Story'));

function App() {
  return (
    <>
      <Header />
      <React.Suspense fallback={<Loading />}>
        <Router>
          <Character path="characters" />
          <Comic path="comics" />
          <Creator path="creators" />
          <Event path="events" />
          <Serie path="series" />
          <Story path="stories" />
        </Router>
      </React.Suspense>
      <Footer />
    </>
  );
}

export default App;

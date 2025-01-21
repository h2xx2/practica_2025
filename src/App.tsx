import * as React from 'react';
import './App.css';
import DrawerAppBar from './components/NavigationBar';
import Main from './components/Main';

function App() {
  return (
    <>
      <DrawerAppBar></DrawerAppBar>
      <Main></Main>
    </>
  );
}

export default App;

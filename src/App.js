import React from 'react';
import Comments from './components/Comments';
import Users from './components/Users'
import TabBar from './components/TabBar';
import { useSelector } from "react-redux";

// to start application use npm run dev

function App() {

  const { tabNumber } = useSelector(state => state.tabbar);

  const getContent = () => {
    if (tabNumber === 1)
      return <Users />
    if (tabNumber === 2)
      return <Comments />
  }

  return (
    <div className="App">
      <TabBar />
      {getContent()}
    </div>
  );
}

export default App;

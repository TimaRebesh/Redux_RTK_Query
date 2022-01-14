import React from 'react';
import Comments from './components/Comments';
import TabBar from './components/TabBar';
import { useSelector } from "react-redux";


function App() {

  const { tabNumber } = useSelector(state => state.tabbar);

  const getContent = () => {
    if (tabNumber === 1)
      return null
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

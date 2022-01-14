import React from 'react';
import Comments from './components/Comments';
import TabBar from './components/TabBar';


function App() {

  const tabNumber = 1;

  const getContent = () => {
    if (tabNumber === 1)
      return <Comments />
    if (tabNumber === 2)
      return null
  }

  return (
    <div className="App">
      <TabBar />
      {getContent()}
    </div>
  );
}

export default App;

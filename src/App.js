import React from 'react';
import { useGetCommentsQuery } from './redux/commentsApi'

function App() {

  const { isLoading, isSuccess, isError } = useGetCommentsQuery();

  console.log(isLoading, isSuccess, isError)

  return (
    <div className="App">
      dfdfd
    </div>
  );
}

export default App;

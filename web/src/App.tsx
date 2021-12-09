import React, { Suspense } from "react";
//const Page = React.lazy(() => import('./stories/Page'));

function App() {
  return (
    <div className="bg-teal-300">
      <Suspense fallback={<div>Loading...</div>}>
        <div>Hello</div>
      </Suspense>
    </div>
  );
}

export default App;

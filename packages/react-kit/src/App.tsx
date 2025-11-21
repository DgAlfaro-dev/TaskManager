import React from 'react';

import '@fontsource/roboto';

function App({ children }: { children: any }) {
  return (
    <React.StrictMode>
      <main>{children}</main>
    </React.StrictMode>
  );
}

export default App;

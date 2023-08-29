import React from 'react';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <WebView
      source={{ uri: 'http//10.144.21.57/MobilityAI' }}
      style={{ flex: 1 }}
    />
  );
};

export default App;

import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import {Navigation} from './navigation/Navigation';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default App;

import './i18n';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import createReducer from './redux/reducers';
import rootSaga from './redux/rootSaga';
import { Landing, NotFound } from './containers/pageListAsync';
import Header from './components/Header';
import First from './containers';
import Second from './containers/Second';
import ThirdPage from './containers/ThirdPage';
import Four from './containers/Four';
import Five from './containers/Five';
import Six from './containers/Six';
import Purchase from './containers/Purchase';

const sagaMiddleware = createSagaMiddleware();
const reducer = createReducer();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Purchase />} />
          <Route path="/" element={<Header />} />
          <Route path="First" element={<First />} />
          <Route path="Second" element={<Second />} />
          <Route path="ThirdPage" element={<ThirdPage />} />
          <Route path="Four" element={<Four />} />
          <Route path="Five" element={<Five />} />
          <Route path="Six" element={<Six />} />
          <Route path="/la" element={<Landing />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </Provider>
  );
}

export default App;

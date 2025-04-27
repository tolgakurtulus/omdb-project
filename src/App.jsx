import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorBoundary from './utils/errorBoundry/ErrorBoundry';
import CLoader from './components/CLoader';

const Main = lazy(() => import('./page/main'));
const Detail = lazy(() => import('./page/detail'));

export default function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <ErrorBoundary>
                  <Suspense fallback={<CLoader />}>
                    <Main />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path="/result/:movideId"
              element={
                <ErrorBoundary>
                  <Suspense fallback={<CLoader />}>
                    <Detail />
                  </Suspense>
                </ErrorBoundary>
              }
            />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

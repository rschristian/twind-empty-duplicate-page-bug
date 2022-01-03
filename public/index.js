import { ErrorBoundary, LocationProvider, Router } from "preact-iso";

import withTwind from "@twind/wmr";

import Home from "./pages/home/index.js";
import NotFound from "./pages/_404.js";

export function App() {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          <Home path="/" />
          <NotFound default />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  );
}

const { hydrate, prerender } = withTwind({
  props: {
    className: true,
  },
  preflight: false,
}, (data) => <App {...data} />);

hydrate(<App />);

export { prerender };

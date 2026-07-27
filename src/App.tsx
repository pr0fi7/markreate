import Index from "./pages/Index";

/**
 * Single-page portfolio — no router, so it deploys to a GitHub Pages
 * subpath without needing a 404.html fallback for client-side routes.
 */
const App = () => <Index />;

export default App;

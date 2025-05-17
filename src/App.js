import { BrowserRouter as Router, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Data from "./pages/Data";
import { Provider } from "react-redux";
import store from "./app/Store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex min-h-screen">
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/data" element={<Data />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<p>List of cities ✅</p>} />
            <Route path="cities" element={<p>List of cities ✅</p>} />
            <Route path="countries" element={<p>Countries ✅</p>} />
            <Route path="form" element={<p>Form ✅</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

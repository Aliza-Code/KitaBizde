import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgetPass from "./Pages/ForgetPass";


const routes = [
  { path: "/", element: <Home></Home> },
  { path: "/products", element: <Products></Products> },
  { path: "/products/:productId", element: <Product></Product> },
  { path: "/contact", element: <Contact></Contact> },
  { path: "/cart", element: <Cart></Cart> },
  { path: "/login", element: <Login></Login> },
  { path: "/register", element: <Register></Register> },
  { path: "/forget", element: <ForgetPass></ForgetPass> },
];

export default routes;

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Forget from "./Pages/Forget";
import Admin from "./Pages/Admin";
import AdminBooks from "./Pages/AdminBooks";
import AdminCreateBook from "./Pages/AdminCreateBook";
import AdminEditBook from "./Pages/AdminEditBook";
import AdminUsers from "./Pages/AdminUsers";
import AdminAuthors from "./Pages/AdminAuthors";
import User from "./Pages/User";
import UserEdit from "./Pages/UserEdit";
import UserPass from "./Pages/UserPass";
import UserOrders from "./Pages/UserOrders";

const routes = [
  { path: "/", element: <Home></Home> },
  { path: "/book", element: <Products></Products> },
  { path: "/book/showBook/:bookId", element: <Product></Product> },
  { path: "/contact", element: <Contact></Contact> },
  { path: "/cart", element: <Cart></Cart> },
  { path: "/account/login", element: <Login></Login> },
  { path: "/account/register", element: <Register></Register> },
  { path: "/account/forgetPassword", element: <Forget></Forget> },

  { path: "/admin", element: <Admin></Admin> },
  { path: "/admin/books", element: <AdminBooks></AdminBooks> },
  { path: "/admin/books/create", element: <AdminCreateBook></AdminCreateBook> },
  { path: "/admin/books/edit", element: <AdminEditBook></AdminEditBook> },
  { path: "/admin/users", element: <AdminUsers></AdminUsers> },
  { path: "/admin/authors", element: <AdminAuthors></AdminAuthors> },
  { path: "/user", element: <User></User> },
  { path: "/user/edit", element: <UserEdit></UserEdit> },
  { path: "/user/pass", element: <UserPass></UserPass> },
  { path: "/user/orders", element: <UserOrders></UserOrders> },
];

export default routes;

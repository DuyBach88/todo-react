// import {
//   createBrowserRouter,
//   Route,
//   RouterProvider,
//   Routes,
// } from "react-router-dom";

// import AdminLayout from "./layouts/AdminLayout";
// import Statistic from "./pages/Statistic";
// import Homepage from "./pages/Homepage";
// import User from "./pages/User";
// import ProductPage from "./pages/ProductPage";
import logo from "./logo.svg";
// import "./App.css";
// import MyComponent from "./MyComponent";
import List from "./todo/List";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Homepage></Homepage>,
//   },
//   {
//     path: "/products",
//     element: <ProductPage />,
//   },
//   {
//     path: "/adminlayout",
//     element: <AdminLayout></AdminLayout>,
//     children: [
//       {
//         path: "user",
//         element: <User></User>,
//       },
//       {
//         path: "statistic",
//         element: <Statistic></Statistic>,
//       },
//     ],
//   },
// ]);
function App() {
  return (
    <>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Learn React with BoBo</p>
          <MyComponent></MyComponent>
        </header>
      </div> */}
      <List></List>
    </>
  );
  // return <RouterProvider router={router} />;
}

export default App;

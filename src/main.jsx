import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//* React-router-dom
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

//* Pages
import { Home } from "./routes/Home/Home";
import { NewPost } from "./routes/FormPost/NewPost";
import { Post } from "./components/Post/Post";
import { Admin } from "./routes/Admin/Admin";
import { EditPost } from "./routes/FormPost/EditPost";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: `/`,
        element: <Home />,
      },
      {
        path: `/new`,
        element: <NewPost />,
      },
      {
        path: `/posts/:id`,
        element: <Post />,
      },
      {
        path: `/admin`,
        element: <Admin />,
      },
      {
        path: `/posts/edit/:id`,
        element: <EditPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

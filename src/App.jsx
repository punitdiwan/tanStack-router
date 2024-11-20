import {
  RouterProvider,
  createRouter,
} from "@tanstack/react-router";
import "./App.css";
import { routeTree } from "./routeTree.gen";



const routerConstant = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <div>Global Not Found :</div>,
});



function App() {
  return <RouterProvider router={routerConstant} />;
}

export default App;

import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";


const appRouter = createBrowserRouter([{
  path:"/",
  element: <Body/>,
  // body has two childrens sidebar and maincontainer
  children: [
    {
      path:"/",
      element: <MainContainer/>
    },
    {
      path: "watch",
      element: <WatchPage/>
    }
  ]
}])
function App() {
   return (
    <Provider store={store}>
    <div>
    <Head/>
{/* componets will change according to my app router */}
    <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  )
}

export default App

/** 
Head
Body
  Sidebar 
    MenuItems
  MainContainer
    ButtonsList
    VideoContainer
      VideoCard 
 */
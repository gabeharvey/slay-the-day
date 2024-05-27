import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyDay from '../components/MyDay.jsx';

const router = createBrowserRouter([
  { path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MyDay />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
)

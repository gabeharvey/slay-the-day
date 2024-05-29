import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyMonth from '../components/MyMonth.jsx';

const router = createBrowserRouter([
  { path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MyMonth />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
)

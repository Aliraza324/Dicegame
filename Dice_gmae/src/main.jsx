import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GamePage from './Components/GamePage.jsx';
import GameDice from './Components/GameDice.jsx';

const router = createBrowserRouter([
 
  {
    path: '/',
    element: <GameDice />,
  },
  {
    path: '/game-page',
    element: <GamePage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

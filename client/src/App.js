import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddArtist from "./components/addartist/add.jsx";
import EditArtist from "./components/updateartist/Edit.jsx";
import ArtistList from "./components/getartist/Artist.jsx";

function App() {
  const route = createBrowserRouter([
    {
      path: "/add",
      element: <AddArtist/>,
    },
    {
      path: "/",
      element: <ArtistList />,
    },
    {
      path: "/edit/:id", // Adjusted path to include a parameter for editing a specific doctor
      element: <EditArtist />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
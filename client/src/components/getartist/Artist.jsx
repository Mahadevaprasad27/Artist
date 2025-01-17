import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const ArtistList = () => {
  const [artists, setArtists] = useState([]);

  // Fetch artists on component load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://artist-xk70.onrender.com/api/getAll");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArtists(data);
      } catch (error) {
        console.error("Error fetching artists:", error);
        toast.error("Failed to fetch artists", { position: "top-right" });
      }
    };

    fetchData();
  }, []);

  // Delete an artist
  const deleteArtist = async (artistId) => {
    try {
      const response = await fetch(`https://artist-xk70.onrender.com/api/delete/${artistId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setArtists((prevArtists) => prevArtists.filter((artist) => artist._id !== artistId));
      toast.success(data.msg, { position: "top-right" });
    } catch (error) {
      console.error("Error deleting artist:", error);
      toast.error("Failed to delete artist");
    }
  };

  return (
    <div className="container mt-5">
      <Link to="/add" className="btn btn-dark mb-3">Add Artist</Link>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>s.no</th>
            <th>Name</th>
            <th>Genre</th>
            <th>Awards</th>
            <th>Album Title</th>
            <th>Records Label</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {artists.map((artist, index) => (
            <tr key={artist._id}>
              <td>{index + 1}</td>
              <td>{artist.name}</td>
              <td>{artist.genre}</td>
              <td>{artist.awards}</td>
              <td>{artist.artist_album}</td>
              <td>{artist.records_label}</td>
              <td>
                {/* Delete Button */}
                <button onClick={() => deleteArtist(artist._id)} className="btn btn-sm btn-danger mr-2">
                  <i className="fa-solid fa-trash"></i> Delete
                </button>

                {/* Edit Button */}
                <Link to={`/edit/${artist._id}`} className="btn btn-sm btn-primary">
                  <i className="fa-solid fa-pen-to-square"></i> Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArtistList;

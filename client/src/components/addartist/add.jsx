import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const AddArtist = () => {
  // Default schema for the artist object
  const defaultArtist = {
    name: '',
    genre: '',
    awards: '',
    artist_album: '',
    records_label: '',
  };

  const [artist, setArtist] = useState(defaultArtist);
  const navigate = useNavigate();

  // Handle input changes
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setArtist({ ...artist, [name]: value });
  };

  // Handle form submission
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/create', artist);
      toast.success(response.data.msg, { position: 'top-right' });
      navigate('/'); // Redirect to the main page
    } catch (error) {
      console.error('Error adding artist:', error);
      toast.error('Failed to add artist');
    }
  };
      

  return (
    <div className="container mt-5">
      <Link to="/" className="btn btn-secondary mb-3">
        Back
      </Link>
      <h1>Add New Artist</h1>
      <form onSubmit={submitForm}>
        {/* Artist Name */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter artist name"
            value={artist.name}
            onChange={inputHandler}
            required
          />
        </div>

        {/* Genre */}
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            className="form-control"
            id="genre"
            name="genre"
            placeholder="Enter artist genre"
            value={artist.genre}
            onChange={inputHandler}
            required
          />
        </div>

        {/* Awards */}
        <div className="form-group">
          <label htmlFor="awards">Awards</label>
          <input
            type="text"
            className="form-control"
            id="awards"
            name="awards"
            placeholder="Enter artist awards"
            value={artist.awards}
            onChange={inputHandler}
          />
        </div>

        {/* Album Title */}
        <div className="form-group">
          <label htmlFor="artist_album">Album Title</label>
          <input
            type="text"
            className="form-control"
            id="artist_album"
            name="artist_album"
            placeholder="Enter album title"
            value={artist.artist_album}
            onChange={inputHandler}
          />
        </div>

        {/* Records Label */}
        <div className="form-group">
          <label htmlFor="records_label">Records Label</label>
          <input
            type="text"
            className="form-control"
            id="records_label"
            name="records_label"
            placeholder="Enter records label"
            value={artist.records_label}
            onChange={inputHandler}
          />
        </div>

        {/* Submit Button */}
        <div>
          <button className="btn btn-primary mt-3" type="submit">
            Add Artist
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArtist;

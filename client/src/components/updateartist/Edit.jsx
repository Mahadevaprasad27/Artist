import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const EditArtist = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [awards, setAwards] = useState('');
  const [artist_album, setAlbumTitle] = useState('');
  const [records_label, setRecordsLabel] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await fetch(`https://artist-xk70.onrender.com/api/getOne/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch artist');
        }
        const data = await response.json();
        setName(data.name);
        setGenre(data.genre);
        setAwards(data.awards);
        setAlbumTitle(data.artist_album);
        setRecordsLabel(data.records_label);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch artist");
      }
    };
    fetchArtist();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedArtist = { name, genre, awards, artist_album, records_label };

    try {
      const response = await fetch(`https://artist-xk70.onrender.com/api/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedArtist)
      });

      if (!response.ok) {
        throw new Error('Failed to update artist');
      }

      const data = await response.json();
      toast.success(data.msg);
      navigate('/');  // Navigate back to the artist list
    } catch (error) {
      console.error(error);
      toast.error("Failed to update artist");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Artist</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required
          />
        </div>
        <div className="mb-3">
          <label>Genre</label>
          <input 
            type="text" 
            className="form-control" 
            value={genre} 
            onChange={(e) => setGenre(e.target.value)} 
            required
          />
        </div>
        <div className="mb-3">
          <label>Awards</label>
          <input 
            type="text" 
            className="form-control" 
            value={awards} 
            onChange={(e) => setAwards(e.target.value)} 
            required
          />
        </div>
        <div className="mb-3">
          <label>Album Title</label>
          <input 
            type="text" 
            className="form-control" 
            value={artist_album} 
            onChange={(e) => setAlbumTitle(e.target.value)} 
            required
          />
        </div>
        <div className="mb-3">
          <label>Records Label</label>
          <input 
            type="text" 
            className="form-control" 
            value={records_label} 
            onChange={(e) => setRecordsLabel(e.target.value)} 
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Artist</button>
      </form>
    </div>
  );
};

export default EditArtist;

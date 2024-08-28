import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Img() {
    const [image, setImage] = useState(null);
    const handleFileChange = (e) => {
      setImage(e.target.files[0]);
    };
    const imageId="66cf433790e49610cd347586"
    const [imageSrc, setImageSrc] = useState(null);
    
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/image/${imageId}`, { responseType: 'arraybuffer' });
        const base64Image = btoa(
            new Uint8Array(response.data)
              .reduce((data, byte) => data + String.fromCharCode(byte), '')
          );
          setImageSrc(`data:${response.headers['content-type']};base64,${base64Image}`);
      } catch (error) {
        console.error('Error fetching image', error);
      }
    };

    fetchImage();
  }, [imageId]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);

    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    } 
  };
  return (
    <div>
            {imageSrc ? <img src={imageSrc} alt="Uploaded" /> : <p>Loading image...</p>}
        <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
    </div>
  )
}

export default Img

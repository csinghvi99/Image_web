import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://picsum.photos/v2/list?page=${page}&limit=6`)
      .then((response) => {
        setImages([...images, ...response.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-card">
            <img src={image.download_url} alt={`Image ${image.id}`}/>
          </div>
        ))}
      </div>
      <button className="load-more-button" onClick={loadMore}>Load More</button>
    </div>
  );
};

export default ImageGallery;

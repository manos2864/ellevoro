import React, {Fragment, useState, useEffect} from 'react';
import css from './Gallery.css';
import LazyImage from '../../../Hoc/LazyImage/LazyImage';
import Modal from '../../Body/Modal/Modal';
import Backdrop from '../../Body/Backdrop/Backdrop';

const Gallery = React.memo(props => {
  const[show, setshow] = useState(false);
  const[clickImage, setclickImage] = useState('');
  const images = [];
  let imageItem = null;

  for (imageItem in props.image) {
    images.push({
      name: imageItem,
      url: props.image[imageItem]
    });
  }

  useEffect(() => {
     window.addEventListener('keydown', (event) => {
       if (event.key === "Escape") {
         galleryHandlerClose();
       }
     });
  })

  const galleryHandlerOpen = (event) => {
    setclickImage(event.target.src);
    setshow(true);
  }

  const galleryHandlerClose = () => {
    setshow(false);
  }

  const item = images.map(ig => {
    return (
      <div key={ig.name} className={["col-lg-3 col-md-4 col-6", css.galleryItem].join(' ')}>
        <div onClick={galleryHandlerOpen} className="d-block mb-4 h-100">
          <LazyImage height={200} offset={100}>
            <img src={ig.url} alt={props.altImage + " " + ig.name} />
          </LazyImage>
        </div>
      </div>
    );
  })

  return(
    <Fragment>
      <Backdrop close={galleryHandlerClose} show={show} />
      <Modal show={show} close={galleryHandlerClose} version="gallery" image={clickImage} />
      {item}
    </Fragment>
  );
})

export default Gallery;

import { Fragment, useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.module.css';
import Searchbar from '../Searchbar';
import { fetchImage, apiOptions } from '../../services/image-api';
import ImageGallery from '../ImageGallery';
import ImageErrorView from '../ImageErrorView';
import Button from '../Button';
import Modal from '../Modal';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const dataModal = {
  url: '',
  alt: '',
};

const App = () => {
  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (imageName === '') {
      return;
    }
    setPage(1);
    setImages([]);
    setStatus(Status.PENDING);

    loaderImages(imageName);
  }, [imageName]);

  const loaderImages = (name, page = 1) => {
    setStatus(Status.PENDING);

    fetchImage(name, page)
      .then(comeImages => {
        if (comeImages.total !== 0) {
          setImages(prevImages => [...prevImages, ...comeImages.hits]);
          setPage(page + 1);
          setStatus(Status.RESOLVED);

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
          return;
        }

        return Promise.reject(new Error(`No such image: ${name}`));
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  };

  const handleFormSubmit = imageName => {
    setImageName(imageName);
  };

  const toggleModal = (urlImage, alt) => {
    setShowModal(showModal => !showModal);
    dataModal.url = urlImage;
    dataModal.alt = alt;
  };

  return (
    <div className={s.App}>
      <Searchbar onSubmit={handleFormSubmit} />

      {status === Status.PENDING && (
        <Fragment>
          {images && <ImageGallery images={images} openModal={toggleModal} />}
          <Loader
            className={s.Loader}
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
          />
        </Fragment>
      )}

      {status === Status.RESOLVED && (
        <Fragment>
          <ImageGallery images={images} openModal={toggleModal} />
          {images.length >= apiOptions.PER_PAGE && (
            <Button loadMoreImages={() => loaderImages(imageName, page)} />
          )}
        </Fragment>
      )}

      {status === Status.REJECTED && <ImageErrorView message={error.message} />}

      {showModal && (
        <Modal
          bigImage={dataModal.url}
          alt={dataModal.alt}
          onClose={toggleModal}
        />
      )}

      <ToastContainer />
    </div>
  );
};

export default App;

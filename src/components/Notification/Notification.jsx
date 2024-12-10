import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

// Додаємо валідацію пропсів
Notification.propTypes = {
  message: PropTypes.string.isRequired, 
};

export default Notification;
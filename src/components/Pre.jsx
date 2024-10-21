import PropTypes from 'prop-types';

function Pre( props ) {

  return <div className={`preloader ${props.load ? "loading" : "loaded"}`}></div>;
};

Pre.propTypes = {

  load: PropTypes.bool.isRequired
};

export default Pre;

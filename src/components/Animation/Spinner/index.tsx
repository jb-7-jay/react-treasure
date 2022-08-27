import './index.scss';

const Spinner = () => {
  return (
    <div className="Spinner">
      <div className="container">
        <h1>Different Different Spinner</h1>
        <div className="main">
          <div className="spinner circuler" />
          <div className="spinner growing" />
          <div className="spinner-container three-pulse">
            <span className="first" />
            <span className="second" />
            <span className="third" />
          </div>
          <div className="squre spinner-container">
            <div className="outer">
              <div className="inner" />
            </div>
          </div>
          <div className="spinner-container wave">
            <span className="wave1" />
            <span className="wave2" />
            <span className="wave3" />
            <span className="wave4" />
            <span className="wave5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;

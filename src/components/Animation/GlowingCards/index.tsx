import './index.scss';

const GlowingCards = () => {
  return (
    <div className="GlowingCards">
      {[1, 2, 3].map((num) => (
        <div key={num} className="box">
          <span className="glass" />
          <div className="content">
            <h2>Glowing Border</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlowingCards;

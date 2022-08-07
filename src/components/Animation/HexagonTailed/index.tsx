import './index.css';

const HexagonTailed = () => {
  return (
    <div className="bg-black h-[100vh]">
      <div className="container-main">
        {Array(11)
          .fill(0)
          .map((_, outerkey) => (
            <div key={outerkey} className="row-main">
              {Array(16)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="hexagon" />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default HexagonTailed;

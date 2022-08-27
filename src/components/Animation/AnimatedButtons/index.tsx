import './index.scss';

const AnimatedButtons = () => {
  const onMouseEnter = (e: any) => {
    console.log(e);
    const data = document.getElementById('b4-bg')?.style;
    if (data) {
      data.top = e.offsetY;
      data.left = e.offsetX;
    }
  };
  return (
    <div className="AnimatedButtons">
      <div className="AnimatedButtons__LinkContainer">
        <a href="#" className="AnimatedButtons__LinkContainer--link1">
          Scaling from center in bottom
        </a>
      </div>
      <div className="AnimatedButtons__LinkContainer">
        <a href="#" className="AnimatedButtons__LinkContainer--link2">
          <span>Scaling from center in bottom</span>
        </a>
      </div>
      <div className="AnimatedButtons__LinkContainer">
        <a href="#" className="AnimatedButtons__LinkContainer--link3">
          <span id="first">Hover Me !!!</span>
          <span id="second">Hovered !!!</span>
        </a>
      </div>
      <div className="AnimatedButtons__LinkContainer">
        <a href="#" className="AnimatedButtons__LinkContainer--link4">
          <span className="special">Hover Bottom Border !!!</span>
        </a>
      </div>

      <div className="AnimatedButtons__Bordered text-center mx-auto bg-darkblue-600 p-3 w-1/2">
        <a className="" href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Button
        </a>
      </div>

      <div className="AnimatedButtons__Advanced">
        <div className="buttons">
          <a href="#" className="button2">
            <span>Jay Bhingradiya</span>
          </a>
          <a href="#" className="button3">
            <span>Jay Bhingradiya</span>
          </a>
          <a href="#" className="button4" id="button4" onMouseEnter={onMouseEnter}>
            <span className="b4-text">Jay Bhingradiya</span>
            <span className="b4-bg" id="b4-bg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnimatedButtons;

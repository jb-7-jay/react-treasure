import { useEffect } from 'react';
import './index.scss';

const onMouseMove = (e: any) => {
  const text: any = document.querySelector('.text');

  if (!text) return;
  text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

  const element = document.querySelectorAll('span');

  for (let i = 0; i < element.length; i++) {
    element[i].style.transform = 'rotate(' + i * 19 + 'deg)';
  }

  text.style.top = e.pageY + 'px';
  text.style.left = e.pageX + 'px';
};

const CursorCircle = () => {
  useEffect(() => {
    onMouseMove({ pageY: 220, pageX: 220 });
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="CursorCircle">
      <section>
        <h2 className="text">Circle-text-effect-</h2>
      </section>
    </div>
  );
};

export default CursorCircle;

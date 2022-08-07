import { HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const StickyFooterButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="fixed flex bottom-5 right-5 text-white border-2 border-white bg-primary-main rounded-full p-4 cursor-pointer z-[1000]"
      onClick={() => navigate('/')}
    >
      <HomeOutlined className="text-2xl flex" />
    </div>
  );
};
export default StickyFooterButton;

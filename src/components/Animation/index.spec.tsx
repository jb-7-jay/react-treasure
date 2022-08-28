import { fireEvent, render, screen } from '@testing-library/react';
import Sample from './Sample';
// import Animation from './index';

describe('Animation', function () {
  it('should Render the Animation Component', () => {
    render(<Sample />);
    fireEvent.click(screen.getByText('Increament'));
  });
});

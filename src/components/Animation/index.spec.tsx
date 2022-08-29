import Animation from './index';
import { renderWithProviders } from '../../test/test-utils';

describe('Animation', function () {
  it('should Render the Animation Component', () => {
    renderWithProviders(<Animation />);
  });
});

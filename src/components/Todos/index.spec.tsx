import { rest } from 'msw';

// import { setupStore } from '../../redux/store';
import { server } from '../../test/server';
import { fireEvent, renderWithProviders, screen } from '../../test/test-utils';
import Todos from './index';

/**
 * TODO:
 *
 * 1) how to wait for the get api response
 * 2) refactor all the mock data and organize them in proper folder
 *    structure
 *
 */

describe('Todo', () => {
  // const store = setupStore();

  it('should render compoenent without error', async () => {
    renderWithProviders(<Todos />);
  });

  it('should fetch all todos', async () => {
    renderWithProviders(<Todos />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(await screen.findByText(/Refined Concrete Bacon/i)).toBeInTheDocument();
  });

  it('should add todo and display recently added todo', async () => {
    renderWithProviders(<Todos />);
    const todoInput = screen.getByTestId('todoInput');

    /**
     *
     * WILL WORK WITH LABEL ONLY
     * expect(screen.getByRole('', { name: 'todoInput' })).toHaveValue('')
     */

    // empty todo input - will trigger post request with 'default todo'
    expect(todoInput).toHaveDisplayValue('');
    fireEvent.click(screen.getByText('Add Todo'));

    // trigger onchange event
    fireEvent.change(todoInput, { target: { value: 'The Boss' } });
    expect(todoInput).toHaveDisplayValue('The Boss');
    fireEvent.click(screen.getByText('Add Todo'));

    expect(await screen.findByText('Loading...')).toBeInTheDocument();

    // update the get request response so we can see recently added todo (mocking)
    server.use(
      rest.get('http://localhost:6080/api/todo', (req, res, ctx) => {
        const mockApiResponse = {
          data: [
            {
              _id: '62a78ecfed7c82f1f44feb50',
              title: 'The Boss',
              description: 'Asperiores id excepturi neque.',
              completed: false,
            },
          ],
        };
        return res(ctx.json(mockApiResponse));
      }),
    );

    expect(await screen.findByText('The Boss')).toBeInTheDocument();
  });

  it('should delete todo', async () => {
    renderWithProviders(<Todos />);

    // wait for the fetch api's response
    expect(await screen.findByText(/Refined Concrete Bacon/i)).toBeInTheDocument();
    expect(screen.queryByText(/Loading\.\.\./i)).not.toBeInTheDocument();

    // find all the buttons and click on the first buttons
    const deleteBtn = screen.getAllByRole('button', { name: 'DELETE' });
    fireEvent.click(deleteBtn[0]);
  });

  it('should throw error while fetching todos', async () => {
    // force msw to return error response
    server.use(
      rest.get('http://localhost:6080/api/todo', (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    renderWithProviders(<Todos />);
    await screen.findByText('Something went wrong');
  });
});

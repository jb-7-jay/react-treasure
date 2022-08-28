import { rest } from 'msw';

/**
 *
 * TODO:
 *
 * 1) refactor this mess
 * 2) mock data should in other file
 * 3) only request and make same request with different response
 * 4) remove unnecessary data
 */

const handlers = [
  rest.get('http://localhost:6080/api/todo', (req, res, ctx) => {
    const mockApiResponse = {
      data: [
        {
          _id: '62a60cd963d3300fa8268e1a',
          title: 'Intelligent Frozen Pants',
          description: 'Dolor eum tenetur dolorem ea consequatur.',
          completed: false,
        },
        {
          _id: '62a78ecfed7c82f1f44feb4e',
          title: 'Refined Concrete Bacon',
          description:
            'Recusandae iure itaque molestias hic porro expedita quaerat dignissimos nam.',
          completed: false,
        },
        {
          _id: '62a78ecfed7c82f1f44feb50',
          title: 'Rustic Frozen Mouse',
          description: 'Asperiores id excepturi neque.',
          completed: false,
        },
      ],
    };
    return res(ctx.json(mockApiResponse));
  }),

  rest.post('http://localhost:6080/api/todo', (req, res, ctx) => {
    const mockApiResponse = {
      status: 200,
      data: {
        title: 'the rock',
        description: 'This is description',
        completed: false,
        _id: '630bd18d7b6bf50b620e8d73',
        __v: 0,
      },
    };
    return res(ctx.json(mockApiResponse));
  }),

  rest.delete('http://localhost:6080/api/todo/:todoId', (req, res, ctx) => {
    const mockApiResponse = {
      status: 200,
      data: 'deleted',
    };
    return res(ctx.json(mockApiResponse));
  }),
];

export { handlers };

import App from '../app';

const app = new App(4);

jest.useFakeTimers();

test('setInterval should be called', () => {
  app.gamePlay();
  expect(setInterval).toHaveBeenCalled();
});

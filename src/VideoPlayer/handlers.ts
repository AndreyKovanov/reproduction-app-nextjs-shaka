interface PlayerError {
  detail: {
    code: string;
  };
}

const isPlayerError = (error: unknown): error is PlayerError =>
  Object.prototype.hasOwnProperty.call(error, 'detail');

export const playerErrorHandler = (event: unknown) => {
  if (isPlayerError(event)) {
    console.error(
      'Video Player Error:',
      event.detail,
      `docs: https://shaka-player-demo.appspot.com/docs/api/shaka.util.Error.html#:~:text=${event.detail.code}`,
    );
  } else {
    console.error('General error event: ', event);
  }
};

export const videoElementErrorHandler = (event: unknown) =>
  console.error('Video Element Error:', event);

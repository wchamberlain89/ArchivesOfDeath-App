interface StatusInit {
  status: 'init';
}

interface StatusLoading {
  status: 'loading';
}

interface StatusLoaded {
  status: 'loaded'
}

interface StatusError {
  status: 'error';
  error: Error;
}

export type Status =
  | StatusInit
  | StatusLoading
  | StatusLoaded
  | StatusError;
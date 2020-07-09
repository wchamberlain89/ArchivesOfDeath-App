interface StatusInit {
  status: 'init';
}

interface StatusLoading {
  status: 'loading';
}

interface StatusError {
  status: 'error';
  error: Error;
}

export type Status =
  | StatusInit
  | StatusLoading
  | StatusError;
export const defaultAction = type => data => ({
  type: type,
  payload: { data }
});

export const defaultError = type => error => ({
  type: type,
  payload: { error }
});

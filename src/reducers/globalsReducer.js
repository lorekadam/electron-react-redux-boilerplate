export default function reducer(
  state = {
    apiUrl:
      process.env.NODE_ENV === 'production'
        ? 'prod'
        : 'http://productemporium.localhost/api/'
  },
  action
) {
  return state;
}

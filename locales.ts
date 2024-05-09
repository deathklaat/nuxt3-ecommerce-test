export default [
  {
    code: 'en',
    name: 'English',
  },
].map((lang) => ({ file: lang.code + '.json', ...lang }));

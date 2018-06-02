export const assertDefined = (subject, name) => {
  console.log('sub', subject);
  if (subject == null) {
    throw(new Error(`${name} not defined`));
  }
};

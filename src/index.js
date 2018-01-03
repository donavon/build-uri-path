const buildUriPath = (strings, ...values) => (
  strings.reduce((partialUri, string, i) => (
    `${partialUri}${encodeURIComponent(values[i - 1])}${string}`
  ))
);

export default buildUriPath;

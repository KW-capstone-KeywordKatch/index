const getProxy = (path = "/proxy") =>
  window.location.hostname === "localhost" ? "" : `${path}`;

export default getProxy;

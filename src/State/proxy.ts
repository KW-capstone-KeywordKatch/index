const getProxy = (path = "/user") =>
  window.location.hostname === "localhost" ? "" : `${path}`;

export default getProxy;

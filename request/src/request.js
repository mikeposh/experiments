import { request } from "./http.js";

const headUrl = (uri) => request.head({ uri });
const getUrl = (uri) => request.head({ uri });

export { getUrl, headUrl };

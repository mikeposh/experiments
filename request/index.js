import { getUrl, headUrl } from './src/request.js';
import { urls } from './src/data.js';

const getUrls = async () => {
  for (const url of urls) {
    try {
      const response = await headUrl(url);
      console.log(url, 'SUCCESS', typeof response, Object.keys(response));
    }
    catch (error) {
      console.log(url, '\n\n---\n\nWE CAUGHT AN ERROR!!!\n\n---\n\n', error.message, '\n\n---\n\n');
    }
  }
};

getUrls();

import axios from 'axios';

export default class DummyYoutubeClient {
  async search({ params }) {
    return params.relatedVideoId ? axios.get('/videos/related.json') : axios.get('/videos/search.json');
  }

  async videos() {
    return axios.get('/videos/popular.json');
  }

  async channels() {
    return axios.get('/videos/channel.json');
  }
}

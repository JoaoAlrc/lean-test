import {apiLeanTech} from '~/services/api';

export default class HomeService {
  static async getItems(id) {
    // const url = `/todos/${id}`;  <-- this route only returns one item, so I get all below
    const url = '/todos';
    try {
      const response = await apiLeanTech.get(url);
      return response.data;
    } catch (err) {
      return err.response.data;
    }
  }
}

import API from "./API";
import _const from 'const';


export default class CategoryAPI extends API {

  static PATH = _const.Routes.APIBlogCategory;

  constructor() {
    super(process.env.REACT_APP_API_URL, CategoryAPI.PATH);
  }
}

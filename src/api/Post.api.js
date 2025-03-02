import API from "./API";
import _const from 'const';


export default class PostAPI extends API {

  static PATH = _const.Routes.APIBlogPost;

  constructor() {
    super(process.env.REACT_APP_API_URL, PostAPI.PATH);
  }
}

import API from "./API";
import _const from 'const';


export default class PostIdsAPI extends API {

  static PATH = _const.Routes.APIBlogPostIds;

  constructor() {
    super(process.env.REACT_APP_API_URL, PostIdsAPI.PATH);
  }
}

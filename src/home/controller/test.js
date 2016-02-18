'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html

    return this.display('test');
  }
}

// export default class extends think.controller.base {
//   * listAction(){
//     let model = this.model("user");
//     let data = yield model.where({name: "thinkjs"}).find();
//     //data returns {name: "thinkjs", email: "admin@thinkjs.org", ...}
//     return data;
//   }
// }

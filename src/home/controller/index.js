'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
   async indexAction(){
     let data = await this.model('user').select();
     var xx = JSON.stringify(data);
     this.assign({
       title: "house",
       css: "index",
       js:"index"
     });
     let n = this.display();
     return n;
   }
   async moreAction() {
     let data = await this.model('house').select();
     return this.success(data);
   }
   async zlAction() {
     let num = this.post('id');
     let model = this.model("zl");
     let data = await model.where({id: num}).find();
     return this.end(data);
   }
   async zhuceAction(){
     let username = this.post('username');
     let qq = this.post('qq');
     let mail = this.post('mail');
     let telephone = this.post('telephone');
     let zhenjian = this.post('zhenjian');
     let pass = this.post('pass');
     let sign = this.post('sign');
     let data = {
       username: username,
       qq:qq,
       mail:mail,
       telephone:telephone,
       zhenjian:zhenjian,
       pass:pass,
       sign:sign
     }
     let result = await this.model('user').add(data);
     return this.success(result);
   }
}

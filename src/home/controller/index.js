'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
   async indexAction(){
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
   async dlAction() {
     let name = this.post('u_name');
     let pass = this.post("u_pass");
     let model = this.model("user");
     let data = await model.where({username:name}).find();
     let msg = "";
     if(data.pass == pass){
       msg = data.sign;
     };
     return this.success(msg);
   }
   async dmAction() {
     let index = this.post('id');
     let model = this.model("dm");
     let data = await model.where({dm_id:index}).select();
     return this.success(data);
   }
   async adddmAction() {
     let index = this.post('id');
     let msg = this.post('msg');
     let name = this.post('name');
     let model = this.model("dm");
     let data = {
       username: name,
       dm_id:index,
       msg:msg
     }
     let result = await this.model('dm').add(data);
     return this.success(result);
   }
}

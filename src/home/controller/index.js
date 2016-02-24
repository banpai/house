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
}

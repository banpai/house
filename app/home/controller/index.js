'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction: function(self){
    //auto render template file index_index.html
    this.assign({
      title: "house_wxr",
      css: "index",
      js:"index"
    });
    return self.display();
  }
});

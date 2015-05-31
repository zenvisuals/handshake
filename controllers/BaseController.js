function BaseController(app, name) {
  var self = this;

  app.post(name, function(req, res, next){
    self._create(req, res, next);
  });

  app.get(name, function(req, res, next){
    self._read(req, res, next);
  });

  app.put(name + '/:id', function(req, res, next){
    self._update(req, res, next);
  });

  app.delete(name + '/:id', function(req, res, next){
    self._delete(req, res, next);
  });

}

BaseController.prototype._create = function(req, res, next){

};

BaseController.prototype._read = function(req, res, next){
  console.log("reading");
};

BaseController.prototype._update = function(req, res, next){

};

BaseController.prototype._delete = function(req, res, next){

};

module.exports = BaseController;

const mongoose =require('mongoose');


//category schema

const categorySchema = mongoose.Schema({
  title:{
    type:String
  },
  description:{
    type:String
  }
});

const Category= module.exports = mongoose.model('Category', categorySchema);

//get category
module.exports.getCategories =function(callback,limit){
  Category.find(callback).limit(limit).sort([['title','ascending']]);
}

// add category
module.exports.addCategory = function(category,callback){
  Category.create(category,callback);
}

//get single cateory buy id
module.exports.getCategoryById = function(id,callback){
  Category.findById(id,callback);
}
//update category
module.exports.updateCategory = function(query,update,options,callback){
  Category.findOneAndUpdate(query,update,options,callback);
}
//delete category
module.exports.removeCategory = function(query,callback){
  Category.deleteOne(query,callback);
}

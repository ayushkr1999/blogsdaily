const mongoose =require('mongoose');


//Aeticle schema

const articleSchema = mongoose.Schema({
  title:{
    type:String
  },

  subtitle:{
    type:String
  },
  category:{
    type:String
  },
  author:{
    type:String
  },
  body:{
    type:String
  },
  created_at:{
    type:Date,
    default: Date.now
  },
  comments:[{
    comment_subject:{
      type:String
    },
    comment_body:{
      type:String
    },
    comment_author:{
      type:String
    },
    comment_email:{
      type:String
    },
    comment_date:{
      type:String
    }
  }]
});

const Article= module.exports = mongoose.model('Article', articleSchema);

//get category
module.exports.getArticles =function(callback,limit){
  Article.find(callback ).limit(limit).sort([['title','ascending']]);
}

// add articel
module.exports.addArticle = function(article,callback){
  Article.create(article,callback);
}

//get single articel buy id
module.exports.getArticleById = function(id,callback){
  Article.findById(id,callback);
}
//update articel
module.exports.updateArticle = function(query,update,options,callback){
  Article.findOneAndUpdate(query,update,options,callback);
}
//delete articel
module.exports.removeArticle = function(query,callback){
  Article.deleteOne(query,callback);
}

//get article by Category
module.exports.getCategoryArticles = function(categoryId,callback){
  let query={category:categoryId}
  Article.find(query,callback).sort([['title','ascending']]);
}
//add comemnt
module.exports.addComment = function(query,comment,callback){
  Article.update(query ,
    {
      $push:{
        comments:comment
       }
    },
    callback
  );
}

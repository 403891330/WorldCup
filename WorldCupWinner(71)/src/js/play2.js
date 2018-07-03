$(function(){
  App.getListTeamByPlayType(2).then(function(result){
      console.log(result[1].c.0)
    
  }).catch(function(){

  });
});

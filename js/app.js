/*
 * MonsterModel provides basic methods to iterate
 * over a collection of "monsters"  
 */
var count = 0;
var MonsterModel = {
  
   /* Collection of available monsters */
   collection : monsters, 
  
   /* Start the iteration over the collection of monsters.
   it sets the first element as the current monster */    
   init : function() {
       $("h2").append(tmpl.replace("IMG",MonsterModel.collection[0].name));
   },
  
   /*   Returns the current monster and sets as current monster
    * the next element in the array.
    * If no more monsters are available, it returns null
    */
   getCurrentMonster : function () { 
       if(count<= MonsterModel.collection.length){
            return MonsterModel.collection[count].name;
       }
       else{
        return false;
       }
       
   },
  
   /* Checks if the name of the current monster 
    * is monsterName. It returns true if the user 
    * correctly named the monster, false otherwise
    */
   catchMonster : function (monsterName){
       
       var name = MonsterModel.getCurrentMonster();
       
       console.log("NAME: "+name)
       
       if(name == monsterName){
        return true;
       }
       else{
        return false;
       }
   }  
           
};

var tmpl ='<img id="monsterPicture" src="img/IMG.png">';

$(document).ready(function(){  
    
    MonsterModel.init();
    
    $("button").on("click", function(){
        
        var name = $("input").val();
        
        console.log(name);
        
        var att = MonsterModel.catchMonster(name);
        
        console.log(att);
        
        if(att){
            $("img").remove();
            count++;
            alert("Catched!!");
            if(count == MonsterModel.collection.length){
            alert("NO MORE MONSTERS!!!!!");
        }
            $("h2").append(tmpl.replace("IMG",MonsterModel.collection[count].name));

            
        }
        else
        {
            alert("Sorry, master");
        }
    
    });
    
    
  
});
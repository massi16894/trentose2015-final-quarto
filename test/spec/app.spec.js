/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the ParlaModel object */

describe("Monster", function() {

  describe(".catchMonster", function(){
        it("return catchMonster", function(){
            var value1 = MonsterModel.catchMonster("bulbasaur");
            var value2 = MonsterModel.catchMonster("ciao");
            expect(value1).toBe(true);
            expect(value2).toBe(false);

        });
      
    });
    
    describe(".getCurrentMonster", function(){
        it("return current monster", function(){
            var value1 = MonsterModel.getCurrentMonster();
            expect(value1).toBe("bulbasaur");

        });
      
    }); 
 
});

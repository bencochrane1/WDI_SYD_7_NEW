describe("Calculator", function() {



    describe(".performOperation", function() {

        var calc;

        beforeEach(function() {
            calc = new Calculator();
        });

        it("performs addition of two numbers", function() {
            var result = calc.performOperation("add",2,3);
            expect(result).toBe(5);
        });

        it("performs subtraction of two numbers", function() {
            var result = calc.performOperation("subtract",5,2);
            expect(result).toBe(3);
        });

        it("performs multiplication of two numbers", function() {
            var result = calc.performOperation("multiply",6,2);
            expect(result).toBe(12);
        });

        it("performs division of two numbers", function() {
            var result = calc.performOperation("divide",4,2);
            expect(result).toBe(2);
        });


    });



    // describe(".add", function(){
    //     it("performs addition of 2 numbers", function() {
    //         var calc = new Calculator();
    //         expect(calc.add(2,3)).toBe(5);
    //     });
    // });
});
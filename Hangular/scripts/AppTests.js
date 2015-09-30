/// <reference path="../typings/jasmine/jasmine.d.ts" />
var Hangular;
(function (Hangular) {
    var Tests;
    (function (Tests) {
        describe("First App Tests", function () {
            it("Should pass a test", function () {
                expect(1).toEqual(1);
            });
            it("Should Fail", function () {
                expect(2).toEqual(1);
            });
        });
    })(Tests = Hangular.Tests || (Hangular.Tests = {}));
})(Hangular || (Hangular = {}));
//# sourceMappingURL=AppTests.js.map
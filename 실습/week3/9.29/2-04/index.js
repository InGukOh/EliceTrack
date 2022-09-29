var fn;
function foo() {
    var a = 5;

    function baz() {
        console.log(a);
    }

    fn = baz;
}

function bar() {
    fn();
}

foo();

bar();

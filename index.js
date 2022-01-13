function receivesAFunction(cbfunk) {
    return cbfunk()
}

function returnsANamedFunction() {
    function receivesAFunction() {

    }
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return function(){}
}


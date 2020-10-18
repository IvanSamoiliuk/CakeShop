function compose(...funcs){
    return function(comp){
        return funcs.reduceRight((wrapped, f) => f(wrapped), comp);
    }
} 

export default compose;
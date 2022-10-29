/* export  */function KonvelteComponentRegister(_this) {
    let _component = _this;
    let _self = new _component({});
    return _self;
}

export function KonvelteComponentEnqueuer(/* reg,  */base, _props = {}){
    let innerReg = /* reg */KonvelteComponentRegister(base);
    let innerBase = innerReg.$$.ctx.at(innerReg.constructor.name)/* [0] */;
    console.log(`${innerBase.name} was invoked`)
        if (typeof innerBase == "function") {
            return (
                new innerBase(_props)
            );
        }
        else {
            console.error("SvelteKonva: the base is not a constructor")
            return false;
        }
}
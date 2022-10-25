/* export  */function KonvelteComponentRegister(_this) {
/* console.log("KonvelteComponentRegister?") */// [PASSED]
    let _component = _this;
    let _self = new _component({});
    return _self;
}

export function KonvelteComponentEnqueuer(/* reg,  */base, _props = {}){
    let innerReg = /* reg */KonvelteComponentRegister(base);
    let innerBase = innerReg.$$.ctx[0];

    return (
        new innerBase(_props)
    );

}
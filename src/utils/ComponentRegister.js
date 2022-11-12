export function ComponentLinker(_component, _component_target, _component_props){
    let constructorRef = (_component.name.charAt(0).toLowerCase() + _component.name.slice(1));
    return (
        (new _component({
        target: _component_target
        })).$$.ctx.at(constructorRef)(_component_props)
    )
}
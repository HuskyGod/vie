class Element {
    constructor (type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children;        
    }
}

function setAttr (node, key, value) {
    switch (key) {
        case 'value':
            if (['INPUT','TEXTAREA'].includes(node.tagName.toUpperCase()))
            {
                node.value = value;
            } else {
                node.setAttribute(key, value)
            }
            break;
        case 'style':
            node.style.cssText = value;
            break;    
        default:
            node.setAttribute(key, value)
            break;    
    }
}

function createElement (type, props, children) {
    return new Element(type, props, children)
};

function render (dom) {
    let el = document.createElement(dom.type);
    for (let key in dom.props) {
        setAttr(el, key, dom.props[key])
    }
    dom.children.forEach((child) => {
        child = (child instanceof Element) ? render(child)
        : document.createTextNode(child);
        el.appendChild(child)
    });
    return el;
}

function renderDom (el, target) {
    target.appendChild(el);
}

export { createElement, render, Element, renderDom }
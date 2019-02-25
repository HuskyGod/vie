// 规则
// 节点类型相同 看属性是否相等 产生一个属性的补丁包
// 新的dom节点不存在了
// 新节点类型不相同 直接替换老的节点
// 文本节点变化

function diff (oldTree, newTree) {
    let patchs = {};
    let index = 0;
    walk(oldTree, newTree, index, patchs)
    return patchs;
}
function diffAttr (oldAttrs, newAttrs) {
    let patch = {};
    for(let key in oldAttrs) {
        if (oldAttrs[key] !== newAttrs[key]) {
            patch[key] = newAttrs[key]; // 有可能是undefined
        }
    }
    for (let key in newAttrs) {
        // 老街店没有新节点的属性
        if (!oldAttrs.hasOwnProperty(key)) {
            patch[key] = newAttrs[key];
        }
    }
    return patch;
}

const ATTRS = 'ATTRS';
const TEXT = 'TEXT';
const REMOVE = 'REMOVE';
const REPLACE = 'REPLACE'

var Index = 0;
function diffChildren (oldChildren, newChildren, index, patchs) {
    oldChildren.forEach((child, idx) => {
        walk(child, newChildren[idx], ++Index, patchs);
    })
}
function isString(node) {
    return Object.prototype.toString.call(node) === '[object String]';
}

function walk (oldNode, newNode, index, patchs) {
    let currentPath = [];
    if (!newNode) {
        currentPath.push({type: REMOVE, index: index})
    } else if (isString(oldNode) && isString(newNode)) {
        if (oldNode !== newNode) {
            currentPath.push({type: TEXT, text: newNode})
        }
    } else if (oldNode.type === newNode.type) {
        let attrs = diffAttr(oldNode.props, newNode.props);
        if (Object.keys(attrs).length) {
            currentPath.push({type: ATTRS, attrs})
        }
        diffChildren(oldNode.children, newNode.children, index, patchs)
    } else {
        currentPath.push({type:REPLACE, newNode})
    }
    if (currentPath.length > 0) {
        patchs[index] = currentPath;
    }
}
export default diff;
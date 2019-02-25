import {createElement, render, renderDom} from './element.js'
import diff from './diff';
import patche from './patche'

let vertualDom = createElement('ul', {class: 'list'}, [
    createElement('li', {class: 'item'}, ['a']),
    createElement('li', {class: 'item'}, ['b']),
]);
let vertualDom2 = createElement('ul', {class: 'list_page'}, [
    createElement('li', {class: 'item'}, ['1']),
    createElement('li', {class: 'item2'}, ['b']),
]);

let el = render(vertualDom);
renderDom(el, window.root);
let patches = diff(vertualDom, vertualDom2);
patche(el, patches)
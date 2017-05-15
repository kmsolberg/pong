import { SVG_NS } from '../settings';

export default class Victory {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
 
 render (svg, win){
  let text = document.createElementNS (SVG_NS, 'text');
  text.setAttributeNS(null, 'x', this.x);
  text.setAttributeNS(null, 'y', this.y);
  text.setAttributeNS(null, 'font-size', this.size);
  text.setAttributeNS(null, 'font-family', 'Silkscreen Web, monotype');
  text.setAttributeNS(null, 'fill', 'white');
  text.textContent = win;

  svg.appendChild(text);

 }
  //...
}

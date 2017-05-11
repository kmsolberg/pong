import { SVG_NS } from '../settings';

export default class Paddle {
  
  constructor(boardHeight, width, height, x, y) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
  }


 render(svg){
   let padd = document.createElementNS(SVG_NS, 'rect');
   padd.setAttributeNS(null, 'width', '10');
   padd.setAttributeNS(null, 'height', '56');
   padd.setAttributeNS(null, 'fill', 'white');
   padd.setAttributeNS(null, 'x', this.x);
   padd.setAttributeNS(null, 'y', this.y);

   svg.appendChild(padd);
 }
}
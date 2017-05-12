import { SVG_NS } from '../settings';

export default class Paddle {
  
  constructor(boardHeight, width, height, x, y, up, down) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
    
    document.addEventListener('keydown', event => {
      switch (event.key) {
        case up:
          this.up()
          break;
        case down:
          this.down ()
          break;
      }
    });
 }
up(){
  if (this.y <= Math.min(this.y, 0)) {
    this.y = 0;
  } else {
    this.y = this.y - this.speed
  }
}

down(){
  let border = this.boardHeight-this.height
  if (this.y >= Math.max(this.y, border)) {
    this.y = (border);
  } else {
  this.y = this.y + this.speed; 
  }
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
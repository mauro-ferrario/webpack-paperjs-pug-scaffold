import PaperBase from "./../components/PaperBase";

export default class TestShape extends PaperBase{
  constructor(container, e, w = 500, h = 500, fullscreen = false){
    super(container, w, h, fullscreen);
  }

  setup(){
    var path = new this.paper.Path();
    path.strokeColor = 'black';
    var start = new this.paper.Point(100, 100);
    path.moveTo(start);
    path.lineTo(start.add([ 200, -150 ]));
    this.paper.view.draw();
  }

  onMouseDown(event){
  }

  onMouseUp(event){
  }

  update(event)
  {
  }

  onResize(){
    super.onResize();
  }
}
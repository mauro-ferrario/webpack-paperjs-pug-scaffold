import paper from 'paper';

export default class PaperBase{
  constructor(canvas, w = 100, h = 100, fullscreen = false, options = {}){
    this.scope = {};
    paper.install(this.scope);
    this.fullscreen = fullscreen;
    this.canvas = canvas;
    paper.setup(canvas);
    this.paper = this.scope.paper;
    this.setup();
    this.addEvents();
    this.addEvent(window, "resize", this.onResize.bind(this));
    this.onResize();
  }

  setup(){
  }

  addEvents(){
    let tool = new this.paper.Tool();
    tool.onMouseDown = this.onMouseDown.bind(this);
    tool.onMouseUp = this.onMouseUp.bind(this);
    paper.view.onFrame = this.update.bind(this);
  }

  onMouseDown(event){
  }

  onMouseUp(event){
  }

  update(event){
  }

  addEvent(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
  }

  onResize(){
    if(this.fullscreen)
      this.resizeFullscreen();
    else
      this.resizeNoFullscreen();
  }

  resizeNoFullscreen(){
  }

  resizeFullscreen(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    this.canvas.style.width = width + "px";
    this.canvas.style.height = height + "px";
    this.paper.view.viewSize.width = width;
    this.paper.view.viewSize.height = height;
  }
}
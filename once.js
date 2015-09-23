window.once=function(evt,cb){
  function ccb(e){
    event=e||window.event;
    if(event){
      cb(event);
      this.removeEventListener(evt,ccb);
    }
  } ;
  this.addEventListener(evt,ccb);
}
window.Element.prototype.once=function(evt,cb){
  function ccb(e){
    event=e||window.event;
    if(event){
      cb(event);
      this.removeEventListener(evt,ccb);
    }
  }
  this.addEventListener(evt,ccb);
}

function changeState(state){
    currentState.end();
    currentState = state;
}

class State{
    constructor(){

    }

    main(){

    }
    render(){

    }
    onClick(evt){

    }
    onMouseMove(evt){
        
    }
    onMouseDown(evt){
        
    }
    onMouseUp(evt){
        
    }
    onMouseWheel(evt){
        
    }
    onKeyDown(evt){

    }
    onKeyUp(evt){

    }
    end(){

    }
}

class MenuState extends State{
    constructor(){
        super();
        this.playButton = new Shape(canvas.width/2-150,canvas.height/2-50,300,100,"black");
    }

    render(){
        clearScreen();
        this.playButton.draw();
    }

    onClick(evt){
        let mousePos = getMousePos(canvas,evt);
        if(isInRect(mousePos.x,mousePos.y,this.playButton.x,this.playButton.y,this.playButton.width,this.playButton.height)){
            changeState(new PlayState());
        }
    }
}

class PlayState extends State{
    constructor(){
        super();
        
        this.flin = new Sprite(createImage("Assets/Sprites/beepbeeplosers.png"),0,0,576,433,0,0,576,433,0,0);
    }
    render(){
        clearScreen();
        this.flin.draw();
    }
}
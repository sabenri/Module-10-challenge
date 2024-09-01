class Shape {
    constructor(){
        this.color = ''
    }
    ShapeColor(color){
        this.color=(color);
    }
}

class Circle extends Shape {
    render(){
        return <Circle r='125' cx='150' cy='150' 
        fill='${this.color}'/>
    }
}

class Square extends Shape {
    render(){
        return <>rect width='500' height='500' x='10' y='10'
        rx='20' ry='20' fill = "${this.color}"</>
    }
}

module.exports= {Circle,Square}
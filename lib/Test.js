const { Circle, Square} = require ('./Shapes');

describe('Circle', () =>{
    test ('that Circle renders a Circle', ()=> {
        const CircleShape = new Circle();
        CircleShape.ShapeColor('bule');
        expect(CircleShape.render()).toEqual('< circle r="125" cx="150" cy="150" fill="blue"/>');
    });
});

describe('Square', () => {
    test('That Square renders a Square',() => {
        const SquareShape = new Square();
        SquareShape.ShapeColor('yellow');
        expect(SquareShape.render()).toEqual('<react width="500" height="500" x="10" y="10" rx"20" ry ="20" fill="yellow"/>');
    });
});
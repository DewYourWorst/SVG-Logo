const {Triangle, Circle, Square} = require("./shapes")


describe("Square test", () => {
    test("test square red background", ()=> {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="red" />')
    })
});

describe("Circle test", () => {
    test("test circle green background", ()=> {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="green" />')
    })
});

describe("Triangle test", () => {
    test("test triangle #ca80ca background", ()=> {
        const shape = new Triangle();
        shape.setColor("#ca80ca");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182 fill="#ca80ca" />')
    })
});

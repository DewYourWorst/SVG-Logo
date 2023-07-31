class SVG{
    constructor(){
        this.textLogo = "";
        this.shapeLogo = "";
    }
    render(){
        return `<svg width = "300" height = "200">${this.textLogo}${this.shapeLogo}</svg>`
    }
    setText(message, color){
        if(message.length > 3){
            throw new Error("Enter no more than 3 characters.")
        };
        this.textLogo = `<text x = "150" y = "125" font-size = "50" text-anchor = "middle" fill = "${color}">${message}</text>`
    }
    setShape(shape){
        this.shapeLogo = shape.render()
    }
};
module.exports = SVG

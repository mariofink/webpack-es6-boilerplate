class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    toString() {
        return `(height: ${this.height} - width: ${this.width})`;
    }
}

export default Rectangle;
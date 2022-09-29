const x = (x, y) => x * y;
const y = (x, y) => {
    return x + y;
};

function z(x, y) {
    return x - y;
}
document.write(x(5, 5));
document.write("<br/>");

document.write(y(5, 5));
document.write("<br/>");

document.write(z(5, 5));


draw = function() {
    fill(mouseX, mouseY, mouseY+mouseX);
    stroke(mouseX, mouseY, mouseY);
    ellipse(mouseX, mouseY, mouseX, mouseY);
};

function calculateEllipseArea(){
    const majorRadious = getInputValueById('ellipse-major-radius');
    const minorRadious = getInputValueById('ellipse-minor-radius');
    const area = 3014 * majorRadious * minorRadious;
    setInnerTextById('ellipse-area',area);
}
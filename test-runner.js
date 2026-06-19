const assert = require('assert');

function testSnapToGrid() {
    function snapToGrid(value, gridSize = 50) {
        const remainder = ((value % gridSize) + gridSize) % gridSize;
        if (remainder < 20) return value - remainder;
        if (remainder > gridSize - 20) return value + (gridSize - remainder);
        return value;
    }
    
    assert.strictEqual(snapToGrid(42), 50, '42 should snap to 50');
    assert.strictEqual(snapToGrid(30), 30, '30 should not snap');
    assert.strictEqual(snapToGrid(65), 50, '65 should snap to 50');
    assert.strictEqual(snapToGrid(-42), -50, '-42 should snap to -50');
    assert.strictEqual(snapToGrid(0), 0, '0 should stay 0');
    assert.strictEqual(snapToGrid(48), 50, '48 should snap to 50');
    console.log('OK snapToGrid tests passed');
}

function testCoordinateConversion() {
    const canvasWidth = 750;
    const canvasHeight = 600;
    const canvasCSSWidth = 375;
    const canvasCSSHeight = 300;
    
    function pageToCanvas(touchX, touchY) {
        const scaleX = canvasWidth / canvasCSSWidth;
        const scaleY = canvasHeight / canvasCSSHeight;
        return { x: touchX * scaleX, y: touchY * scaleY };
    }
    
    function toPhysics(canvasX, canvasY) {
        const cx = canvasWidth / 2;
        const cy = canvasHeight / 2;
        return { x: canvasX - cx, y: cy - canvasY };
    }
    
    const touchX = 187.5;
    const touchY = 150;
    const canvasPos = pageToCanvas(touchX, touchY);
    
    assert.strictEqual(canvasPos.x, 375, 'Canvas X should be 375');
    assert.strictEqual(canvasPos.y, 300, 'Canvas Y should be 300');
    
    const phys = toPhysics(canvasPos.x, canvasPos.y);
    assert.strictEqual(phys.x, 0, 'Physics X should be 0');
    assert.strictEqual(phys.y, 0, 'Physics Y should be 0');
    
    console.log('OK Coordinate conversion tests passed');
}

function testRayExtension() {
    const u = 150;
    const f = 100;
    const lensX = 375;
    const objH = 60;
    
    const v = (u * f) / (u - f);
    const imgX = lensX + v;
    const maxExtendX = 1200;
    
    const ray1EndX = (v > 0 && v < maxExtendX) ? imgX : lensX + maxExtendX;
    assert.strictEqual(ray1EndX, 675, 'Ray1 should extend to image plane at 675');
    
    const ray1Slope = -(objH / 2) / f;
    const ray1EndY = objH / 2 + (ray1EndX - lensX) * ray1Slope;
    assert.strictEqual(ray1EndY, -60, 'Ray1 end Y should be -60');
    
    const incY3 = objH / 2 * (-f / (u - f));
    assert.strictEqual(incY3, -60, 'Ray3 incident Y should be -60');
    
    console.log('OK Ray extension tests passed');
}

function testRay3OldVsNew() {
    const u = 150;
    const f = 100;
    const objH = 60;
    
    const oldIncY3 = 0 - (objH / 2) * (f / u);
    const newIncY3 = objH / 2 * (-f / (u - f));
    
    assert.notStrictEqual(oldIncY3, newIncY3, 'Old and new should be different');
    assert.strictEqual(newIncY3, -60, 'New incY3 should be -60');
    
    console.log('OK Ray3 old vs new test passed');
}

try {
    testSnapToGrid();
    testCoordinateConversion();
    testRayExtension();
    testRay3OldVsNew();
    console.log('\nAll tests passed!');
} catch (e) {
    console.error('Test failed:', e.message);
    process.exit(1);
}

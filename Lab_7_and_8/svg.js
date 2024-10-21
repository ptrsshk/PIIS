const svg = document.getElementById('svg');
const circleCountElem = document.getElementById('circleCount');
const rectangleCountElem = document.getElementById('rectangleCount');

let isDrawing = false;
let startX, startY, currentShape;
let circleCount = 0;
let rectangleCount = 0;

svg.addEventListener('mousedown', event => {
	isDrawing = true;
	startX = event.offsetX;
	startY = event.offsetY;

	const shapeSelector = document.getElementsByName('shape');
	let selectedValue;
	for (const shape of shapeSelector) {
		if (shape.checked) {
			selectedValue = shape.value;
			break;
		}
	}

	if (selectedValue === 'circle') {
		currentShape = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'circle'
		);
		currentShape.setAttribute('cx', startX);
		currentShape.setAttribute('cy', startY);
		currentShape.setAttribute('r', 0);
    currentShape.setAttribute('fill', 'none');
		currentShape.setAttribute('stroke', 'rgba(209, 76, 76)');
		currentShape.setAttribute('stroke-width', '4px');
		svg.appendChild(currentShape);
	} else if (selectedValue === 'rectangle') {
		currentShape = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'rect'
		);
		currentShape.setAttribute('x', startX);
		currentShape.setAttribute('y', startY);
		currentShape.setAttribute('width', 0);
		currentShape.setAttribute('height', 0);
    currentShape.setAttribute('fill', 'none');
		currentShape.setAttribute('stroke', 'rgba(170,89,200)');
    currentShape.setAttribute('stroke-width', '4px');
		svg.appendChild(currentShape);
	}
});

svg.addEventListener('mousemove', event => {
	if (!isDrawing) return;

	const currentX = event.offsetX;
	const currentY = event.offsetY;

	if (currentShape) {
		if (currentShape.tagName === 'circle') {
			const radius = Math.sqrt(
				Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2)
			);
			currentShape.setAttribute('r', radius);
		} else if (currentShape.tagName === 'rect') {
			const width = currentX - startX;
			const height = currentY - startY;

			currentShape.setAttribute('x', Math.min(startX, currentX));
			currentShape.setAttribute('y', Math.min(startY, currentY));
			currentShape.setAttribute('width', Math.abs(width));
			currentShape.setAttribute('height', Math.abs(height));
		}
	}
});

svg.addEventListener('mouseup', () => {
	isDrawing = false;
	if (currentShape) {
		if (currentShape.tagName === 'circle') {
			circleCount++;
			circleCountElem.textContent = circleCount;
		} else if (currentShape.tagName === 'rect') {
			rectangleCount++;
			rectangleCountElem.textContent = rectangleCount;
		}
	}

	currentShape = null;
});

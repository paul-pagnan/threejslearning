import { Main } from './main';

// Init the Main Class
const main = new Main();
const elem = main.init({
    viewport: {
        width: window.innerWidth,
        height: window.innerWidth,
    },
    camera: {
        viewAngle: 45,
        nearClipping: 0.1,
        farClipping: 1000,
    },
});


// Call the render on main every animation frame
const render = () => {
    requestAnimationFrame(render);
    main.render();
}

// Attach the browser event handlers
document.body.appendChild(elem);

// Start the render loop
window.onload = render;

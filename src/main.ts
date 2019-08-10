import * as THREE from 'three';

export class Main {
    private camera: THREE.PerspectiveCamera;
    private scene: THREE.Scene;
    private renderer: THREE.WebGLRenderer;

    // private sceneObjects: any[] = [];

    init(viewOpts: ViewOpts) {
        const { width, height } = viewOpts.viewport;
        
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(width, height);
        
        this.camera = this.createCamera(width, height, viewOpts.camera);
        this.scene = this.createScene();

        return this.renderer.domElement;
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    createScene() {
        const scene = new THREE.Scene();
        return scene;
    }

    createCamera(width: number, height: number, cameraOpts: CameraOpts) {
        const { viewAngle, nearClipping, farClipping } = cameraOpts;
        const mainCamera = new THREE.PerspectiveCamera(viewAngle, width / height, nearClipping, farClipping );
        return mainCamera
    }
}

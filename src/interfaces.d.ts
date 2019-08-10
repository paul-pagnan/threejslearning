interface CameraOpts {
    viewAngle: number;
    nearClipping: number;
    farClipping: number;
}

interface ViewPortOpts {
    width: number;
    height: number;
}

interface ViewOpts {
    viewport: ViewPortOpts;
    camera: CameraOpts;
}

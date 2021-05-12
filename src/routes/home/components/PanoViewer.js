import { createRef, Component, } from "preact";
import Marzipano from "marzipano";

const levels = [
  {
    tileSize: 256,
    size: 256,
    fallbackOnly: true
  },
  {
    tileSize: 512,
    size: 512
  },
  {
    tileSize: 512,
    size: 1024
  },
  {
    tileSize: 512,
    size: 2048
  }
];

class PanoViewer extends Component {
  ref = createRef();

  instance = null;

  scene = null;

  static displayName = "PanoViewer";

  componentDidMount() {
    this.instance = new Marzipano.Viewer(this.ref.current, {});

    console.log(this.instance);

    const source = Marzipano.ImageUrlSource.fromString(
      `/assets/tiles/france/{z}/{f}/{y}/{x}.jpg`,
      { cubeMapPreviewUrl: `/assets/tiles/france/preview.jpg` });
    const geometry = new Marzipano.CubeGeometry(levels);

    const limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180, 120*Math.PI/180);
    const view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

    this.scene = this.instance.createScene({
      source,
      geometry,
      view,
      pinFirstLevel: true
    });

   
    this.scene.switchTo();
  }

  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100vw",
          height: "100vh"
        }}
        ref={this.ref}
      />
    );
  }
}

export default PanoViewer;

import React from 'react';
import { CanvasSpace, World, Create, Particle, Num, Pt } from 'pts/dist/es5';

export default class PtsCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvRef = React.createRef();
    this.space = null;
    this.form = null;
    this.world = null;
  }

  componentDidMount() {
    this.init();
    this._loop();
  }

  componentDidUpdate() {
    this._loop();
  }

  _loop() {
    this.space.play();
  }

  animate(time, ftime) {
    this.world.drawParticles((p, i) => {
      let color = (i === 0) ? "#073B4C" : ["#FFD166", "#06D6A0", "#118AB2", "#EF476F"][i % 4];
      this.form.fillOnly(color).point(p, p.radius, "circle")
    });

    this.world.update(ftime);
  }

  action(type, px, py) {
    if (type == "move") {
      this.world.particle(0).position = new Pt(px, py);
    }
  }

  start() {
    this.world = new World(this.space.innerBound, 1, 0);
    let pts = Create.distributeRandom(this.space.innerBound, 20);

    for (let i = 0, len = pts.length; i < len; i++) {
      let p = new Particle(pts[i]).size((i === 0) ? 20 : 5 + Math.random() * this.space.size.x / 20);
      p.hit(Num.randomRange(-50, 50), Num.randomRange(-25, 25));
      this.world.add(p);
    }

    this.world.particle(0).lock = true;
  }

  init() {
    this.space = new CanvasSpace(this.canvRef).setup({ bgcolor: 'white', resize: true, retina: true });
    this.form = this.space.getForm();
    
    this.space.add(this);
    this.space.bindMouse().bindTouch();
  }

  render() {
    return (
      <div className={this.props.name || ""}>
        <canvas ref={c => (this.canvRef = c)} />
      </div>
    );
  }
};

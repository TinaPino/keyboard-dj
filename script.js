function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const clips = [
{
  key: 'Q',
  clip: 'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/000%20to%20080%20bpm/775[kb]080_major-domo-swinger.aif.mp3' },

{
  key: 'W',
  clip: 'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/000%20to%20080%20bpm/564[kb]080_drop-my-kick-n-clap.aif.mp3' },

{
  key: 'E',
  clip: 'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/000%20to%20080%20bpm/775[kb]080_crakkle-reverse-hit.aif.mp3' },

{
  key: 'A',
  clip: 'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/000%20to%20080%20bpm/1088[kb]080_glitchy-noises.wav.mp3' },

{
  key: 'S',
  clip: 'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/000%20to%20080%20bpm/775[kb]080_lynchpin-percussion-popper.aif.mp3' },

{
  key: 'D',
  clip: 'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/000%20to%20080%20bpm/263[kb]080_queens-beat.wav.mp3' },

{
  key: 'Z',
  clip: 'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/000%20to%20080%20bpm/1037[kb]080_supafly-bendy-hop.aif.mp3' },

{
  key: 'X',
  clip: 'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/000%20to%20080%20bpm/775[kb]080_sharp-verbhit-mystery-vox.aif.mp3' },

{
  key: 'C',
  clip: 'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/000%20to%20080%20bpm/775[kb]080_smooth-verby-shakem-2.aif.mp3' }];



const App = () => React.createElement("div", null,
React.createElement(Topwords, null),
React.createElement("div", { id: "display", className: "display" },
React.createElement("h1", null, React.createElement("i", { class: "fas fa-drum" })),
clips.map((sound, idx) =>
React.createElement(DrumPad, { text: sound.key, key: idx, audio: sound.clip })),

React.createElement(Navbar, null)),

React.createElement(Bottomwords, null));



const Navbar = props => {
  return (
    React.createElement("nav", { className: "fixed-bottom navbar navbar-dark bg-dark" },
    React.createElement("a", { className: "navbar-brand", href: "https://tinapino.github.io", target: "_blank" }, "Home", React.createElement("i", { class: "fas fa-home" })),
    React.createElement("a", { className: "navbar-brand", href: "https://www.freecodecamp.org/tinapino", target: "_blank" }, "freeCodeCamp", React.createElement("i", { class: "fab fa-free-code-camp" })),
    React.createElement("a", { className: "navbar-brand", href: "https://github.com/TinaPino", target: "_blank" }, "Github", React.createElement("i", { class: "fab fa-github" })),
    React.createElement("a", { className: "navbar-brand", href: "https://www.linkedin.com/in/tina-pino-117970108/", target: "_blank" }, "Linked", React.createElement("i", { class: "fab fa-linkedin" })),
    React.createElement("a", { className: "navbar-brand", href: "https://codepen.io/tinapino/pens/public", target: "_blank" }, "C", React.createElement("i", { class: "fab fa-codepen" }), "DEPEN"),

    React.createElement("a", { className: "navbar-brand", href: "https://www.instagram.com/denvertinapino", target: "_blank" }, React.createElement("i", { class: "fab fa-instagram" }), "Instagram")));

};

const Topwords = () => {
  return (
    React.createElement("div", { className: "header text-center" }, " ", React.createElement("i", { class: "fas fa-headphones" }), " Keyboard DJ ", React.createElement("i", { class: "fas fa-compact-disc" }), React.createElement("br", null), " Click any letter below to start. Keep clicking or type letters to hear beats."));
};

const Bottomwords = () => {
  return (
    React.createElement("div", { className: "header text-center" }, " ", React.createElement("p", null, "Type or press multiple letters at once to layer beats. "), React.createElement("p", null, React.createElement("i", { class: "fas fa-music" }))));
};

class DrumPad extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "playSound",











    () => {
      this.audio.current.play();

      const id = this.audio.current.id;

      const parent = this.audio.current.parentNode;
      parent.classList.add('active');

      const display = parent.parentNode;
      display.querySelector('h1').innerText = `${id}`;
    });this.audio = React.createRef();}componentDidMount() {this.audio.current.addEventListener('ended', e => {const parent = e.target.parentNode;parent.classList.remove('active');});}

  render() {
    const { text, audio } = this.props;

    return (
      React.createElement("div", { className: "drum-pad", onClick: this.playSound, id: `drum-${text}` },
      text,
      React.createElement("audio", { ref: this.audio, src: audio, className: "clip", id: text })));



  }}


document.addEventListener('keydown', e => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);

  if (audio) {
    audio.currentTime = 0;
    const parent = audio.parentNode;
    parent.classList.add('active');

    const display = parent.parentNode;
    display.querySelector('h1').innerText = `${id}`;
    audio.play();
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('drum-machine'));
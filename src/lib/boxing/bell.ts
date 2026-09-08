let audioCtx: AudioContext | null = null;

function ctx() {
  if (typeof window === "undefined") return null;
  audioCtx ??= new AudioContext();
  return audioCtx;
}

/** Short metallic ding — one ring for round start, three for the end of a round. */
export function ringBell(times = 1) {
  const ac = ctx();
  if (!ac) return;
  void ac.resume();
  for (let i = 0; i < times; i++) {
    const t = ac.currentTime + i * 0.28;
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    const filter = ac.createBiquadFilter();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(980, t);
    osc.frequency.exponentialRampToValueAtTime(420, t + 0.55);
    filter.type = "highpass";
    filter.frequency.value = 380;
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.18, t + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ac.destination);
    osc.start(t);
    osc.stop(t + 0.72);
  }
}

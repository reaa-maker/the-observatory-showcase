/* ==========================================================================
   THE OBSERVATORY — Ultra-Clean 8-Slide Live Interactive Controller (v5)
   4 Living Veo 3.1 Worlds · 3 Volumetric WebGL2 GPU Shaders · 4-Act Code Cinema
   Generalized One-Click Master Prompts (With 4-Question Kickoff Interviews)
   ========================================================================== */

(function () {
  'use strict';

  const CHAMBERS = [
    {
      num: '01', name: 'VEO 3.1 CINEMA',
      kicker: '01 / 08 · CHARACTER-LOCKED VEO 3.1 CINEMA',
      titleHtml: 'One Guide. <em>Filmed Live.</em>',
      hero: 'media/c01-hero.jpg', loop: 'media/c01-loop.mp4',
      transNext: 'media/c01-to-c02.mp4',
      plateTitle: 'Character-Locked Filmed World',
      summary: 'One locked reference image drives 18 seamless 1080p loops & one-take camera walks.',
      mobileX: '38%',
      notes: 'Slide 01 shows how a single character reference sheet (lumen-ref.jpg) locks visual continuity across 18 1080p Veo 3.1 room loops and continuous camera walks. Use the bottom bar to test individual loops and walks full-screen.'
    },
    {
      num: '02', name: 'AI SOUND STUDIO',
      kicker: '02 / 08 · GOOGLE LYRIA 002 + LOCAL GPU AUDIO',
      titleHtml: 'Music Born <em>On Command.</em>',
      hero: 'media/c02-hero.jpg', loop: 'media/c02-loop.mp4',
      transNext: 'media/c02-to-c03.mp4',
      plateTitle: 'Multi-Track AI Score & Mastering',
      summary: 'Three real -16 LUFS mastered stereo tracks with live interactive waveform scrubbing.',
      mobileX: '50%',
      notes: 'Click any of the three studio tracks to compare cloud orchestral scoring (Lyria 002), modular electronic scoring (Lyria 002), and local Apple Silicon GPU music generation (ACE-Step 1.5), all mastered to -16 LUFS.'
    },
    {
      num: '03', name: 'FOUR LIVING WORLDS',
      kicker: '03 / 08 · FOUR LIVING 1080P VEO 3.1 WORLDS',
      titleHtml: 'Four Worlds. <em>All Alive.</em>',
      hero: 'media/style-a-felt.jpg', loop: 'media/style-a-felt.mp4',
      transNext: 'media/c03-to-c04.mp4',
      plateTitle: '4 Full-Screen Filmed Art Directions',
      summary: 'Switch full-screen between Stop-Motion Felt, Gouache Watercolor, Neon Tokyo Rain & 1969 Apollo Lunar.',
      mobileX: '50%',
      notes: 'Every world on Slide 03 is a living 1080p film: Stop-Motion Felt & Clay, Hand-Painted Gouache Conservatory, 35mm Anamorphic Neon Tokyo Rain, and 1969 70mm Apollo Lunar Observatory.'
    },
    {
      num: '04', name: 'SCROLL PORTAL',
      kicker: '04 / 08 · SCROLL-DRIVEN 3D CAMERA FLIGHT',
      titleHtml: 'Scrub Through <em>Infinity.</em>',
      hero: 'media/scrollworld-dive.jpg', loop: 'media/c04-loop.mp4',
      transNext: 'media/c04-to-c05.mp4',
      plateTitle: 'Frame-Accurate First-Person Portal Dive',
      summary: 'Scroll your mouse wheel or trackpad anywhere on screen to fly through the 3D tunnel.',
      mobileX: '50%',
      notes: 'Scroll your mouse wheel or trackpad anywhere on the screen (or drag the slider / click Auto-Fly) to scrub a GOP-8 encoded 1080p 3D portal flight preloaded as an in-memory Blob.'
    },
    {
      num: '05', name: 'WEBGL2 GPU ENGINE',
      kicker: '05 / 08 · REAL-TIME 60FPS WEBGL2 RAYMARCHING',
      titleHtml: 'Light Sculpted <em>On The GPU.</em>',
      hero: 'media/c05-hero.jpg', loop: 'media/c05-loop.mp4',
      transNext: 'media/c05-to-c06.mp4',
      plateTitle: 'Volumetric Star Lens, Ferrofluid & Reef',
      summary: 'Drag anywhere to orbit 3 real-time 60fps WebGL2 volumetric & raymarched GPU worlds.',
      mobileX: '50%',
      notes: 'Drag anywhere on the screen to orbit with smooth inertia across three real-time 60fps WebGL2 GPU shaders: Relativistic Gargantua Star Lens, Liquid Chrome Ferrofluid, and Bioluminescent Crystal Reef.'
    },
    {
      num: '06', name: 'CODE-COMPILED CINEMA',
      kicker: '06 / 08 · PROGRAMMATIC 1080P MOTION REEL',
      titleHtml: 'Cinema, Compiled <em>From Code.</em>',
      hero: 'media/c06-hero.jpg', loop: 'media/c06-loop.mp4',
      transNext: 'media/c06-to-c07.mp4',
      plateTitle: 'Tracked Neural Ribbons & Multi-Stream Cuts',
      summary: '4-act 1080p film compositing live footage, tracked per-pixel EEG glow, 3-world cuts & audio spectrum.',
      mobileX: '52%',
      notes: 'Watch our 4-act 1080p showreel compiled deterministically from code: motion-tracked per-pixel glowing neural EEG ribbons on live footage, synchronized 3-world split triptych, 72-band audio-reactive polar telemetry, and Matter editorial typography.'
    },
    {
      num: '07', name: 'AUTONOMOUS BROWSER QA',
      kicker: '07 / 08 · LIVE PLAYWRIGHT & FRAME-STRIP PROOF',
      titleHtml: 'Tested Live. <em>Zero Guesswork.</em>',
      hero: 'media/c07-hero.jpg', loop: 'media/c07-loop.mp4',
      transNext: 'media/c07-to-c08.mp4',
      plateTitle: 'Live Browser QA Reel & 7-Walk Frame Audit',
      summary: 'Inspect the real Playwright verification reel, 7-transition frame strips, and desktop/mobile proof.',
      mobileX: '50%',
      notes: 'Switch between the live Playwright QA verification video, the 7-transition frame-by-frame contact sheet that caught and fixed jump cuts, and the desktop 1440x900 vs mobile 390x844 proof.'
    },
    {
      num: '08', name: 'MASTER PROMPTS',
      kicker: '08 / 08 · ONE-CLICK GENERALIZED MASTER PROMPTS',
      titleHtml: 'Activate This <em>Every Time.</em>',
      hero: 'media/c08-hero.jpg', loop: 'media/c08-loop.mp4',
      transNext: null,
      plateTitle: '6 Self-Contained Kickoff & Quality Prompts',
      summary: 'Copy standalone prompts that interview you with 4 creative questions first, build a pilot, and verify live.',
      mobileX: '50%',
      notes: 'Click any of the 6 Master Prompt buttons to copy a complete, generalized prompt that works on any computer or account — instructing the AI to interview you with 4 high-impact questions first, build a pilot sample, and verify live.'
    }
  ];

  const STYLE_TITLES = [
    'Stop-Motion <em>Felt &amp; Clay.</em>',
    'Hand-Painted <em>Conservatory.</em>',
    'Midnight <em>Neon Tokyo.</em>',
    '1969 Apollo <em>Lunar Dome.</em>'
  ];

  // Generalized, self-contained Master Prompts (zero private paths, zero personal keys, works for anyone)
  const MASTER_PROMPTS = {
    deck: `Act as an Executive Creative Director and Principal Creative Technologist. I want to build an interactive filmed web deck where every slide is a living 1080p cinema room linked by continuous one-take camera transitions, with real working interactive demos directly on the main stage.

BEFORE writing any code or generating assets, do a 1-reply Kickoff:
1. State the 1-sentence goal of my deck.
2. Ask me 4 high-impact creative questions (each with your recommended answer):
   - Q1: World Aesthetic & Physical Materials (e.g., brushed brass & dark walnut, stop-motion felt & clay, hand-painted watercolor, retro-futurist NASA 70mm).
   - Q2: Recurring Guide Character or Visual Anchor to lock continuity across every room.
   - Q3: The 5 to 8 Scenes and what live interactive demo sits on the main stage of each scene.
   - Q4: Which video/image/audio tools are available in my environment (e.g., built-in image generator, Vertex Veo/Lyria, fal, or local tools).
3. Wait for my approval, then build a 2-scene interactive pilot at full final quality first.

Quality Rules to enforce on every slide:
- Never build static bullet slides or dump walls of text/code on screen (max 6 words per top-left title plaque; keep 85% of the viewport open for the visual stage).
- Lock one character/style reference image first and feed it into every scene generation for strict continuity.
- Cut seamless room loops (matching start/end frames) and encode transitions with short keyframe intervals (-g 8) for instant browser seeking.
- Put every interactive demo directly on the main stage (never hidden inside a drawer).
- Before saying done, serve the deck locally, test every interactive control across desktop (1440x900) and mobile portrait (390x844) in a real headless browser with 0 console errors, and inspect transition frame strips for jump cuts.`,

    hyperframes: `Act as a Motion Design Director and Programmatic Video Engineer. I want to compile a 1080p (1920x1080, 30fps or 60fps) cinema-grade motion-graphics video deterministically from code (Python/NumPy/SciPy/PIL or HTML5 Canvas + FFmpeg) synced to music.

BEFORE writing any rendering code, do a 1-reply Kickoff:
1. State the 1-sentence concept of the film.
2. Ask me 4 high-impact creative questions (each with your recommended answer):
   - Q1: Duration, aspect ratio (16:9 vs 9:16), and the 3-to-4 distinct visual acts/shots.
   - Q2: Live video footage or generated cinema plates to composite as the base layer (never render flat text on a plain blank background).
   - Q3: Per-pixel tracked data overlays to bake onto the footage (e.g., motion-tracked glowing neural/EEG wave ribbons, multi-stream split-screen choreography, audio-reactive polar frequency spectrum).
   - Q4: Typography & audio bed (e.g., clean Light/Medium grotesque display type with max 6 words per card, exponential ease-out reveals, and -16 LUFS stereo music bed).
3. Wait for my approval, then render 1 still frame per act as a contact sheet for my sign-off before rendering the full MP4.

Quality Rules to enforce:
- Composite real moving cinema footage with Gaussian-bloomed HDR procedural overlays and smooth cubic-bezier / exponential motion curves.
- Keep on-screen typography minimal (<= 6 words per card, >= 1.5s hold) and never clutter the frame.
- Mux the final H.264 MP4 (-crf 16 -pix_fmt yuv420p) with a mastered stereo audio track faded cleanly in and out, and verify the rendered MP4 with an extracted multi-frame contact sheet.`,

    music: `Act as an AI Music Producer and Audio Mastering Engineer. I want to generate, master, and wire custom instrumental music tracks into an interactive web audio studio with real-time waveform scrubbing.

BEFORE generating any audio, do a 1-reply Kickoff:
1. Ask me 4 quick creative questions (each with your recommended answer):
   - Q1: Musical genres & instrumentation across 2-to-3 contrasting tracks (e.g., intimate felt piano & solo cello, analog modular synth & glass marimba, cinematic brass & clockwork percussion).
   - Q2: Tempo (BPM), musical key, and emotional arc.
   - Q3: Available audio generation engines in my environment (e.g., Google Lyria, local Apple Silicon ACE-Step GPU, or Web Audio synthesis fallback).
   - Q4: How the audio should interact with the UI (e.g., A/B track switcher, decoded PCM peak waveform scrubber, automatic volume ducking when videos play).
2. Wait for my approval before generating and mastering.

Quality Rules to enforce:
- Avoid naming living artists in generation prompts; specify exact instruments, BPM, key, and room acoustics instead.
- Master every generated track via FFmpeg loudnorm to broadcast stereo (-16 LUFS integrated, -1.5 dBTP true peak, 48 kHz) with smooth fade-in and fade-out so loops never click.
- Precompute real decoded PCM amplitude peaks into a compact JSON file so the browser renders an authentic, clickable 60fps waveform scrubber.
- Verify in a real browser that clicking Play advances audio.currentTime > 0 with audio.paused === false.`,

    shader: `Act as a Principal Graphics Programmer and Demoscene Technical Artist. I want to build a real-time 60fps interactive WebGL2 GLSL raymarched 3D canvas that runs full-screen in the browser with tactile mouse orbit and live shader controls.

BEFORE writing any shader code, do a 1-reply Kickoff:
1. Ask me 4 high-impact creative questions (each with your recommended answer):
   - Q1: The 2-to-3 switchable 3D GPU scenes (e.g., Relativistic Gargantua black-hole gravitational star lens with volumetric plasma disk; Liquid chrome & gold ferrofluid magnetic metaballs; Bioluminescent deep-sea crystal reef with volumetric god-rays).
   - Q2: Physical lighting & optical effects (e.g., smooth-minimum SDF blending, multi-octave 3D FBM volumetric glow, chromatic dispersion, studio softbox reflections, reflective obsidian floor with soft shadows).
   - Q3: Mouse & touch physics (e.g., smooth inertia orbit damping, cursor magnetic attraction, scroll-wheel zoom).
   - Q4: Minimal floating glass UI controls (2-to-3 scene pills + 2 live uniform sliders that visibly reshape the 3D optics without cluttering the screen).
2. Wait for my approval, then build and screenshot-verify all shader modes in a real headless browser.

Quality Rules to enforce:
- Never ship flat-shaded polygons or harsh screen-derivative artifacts (avoid raw fwidth() step rings). Use smooth analytical Fresnel, multi-sample raymarching, volumetric glow accumulation, and ACES filmic tone mapping.
- Cap devicePixelRatio at 1.5 for rock-solid 60fps performance and respect prefers-reduced-motion.`,

    scroll: `Act as a Creative Front-End Director. I want to build a full-screen scroll-scrubbed 3D video portal where scrolling the mouse wheel or trackpad flies the camera smoothly forward and backward through a 1080p first-person cinema tunnel at 60fps.

BEFORE building, do a 1-reply Kickoff:
1. Ask me 4 quick questions (each with your recommended answer):
   - Q1: The first-person camera journey (entry threshold, mid-flight landmarks, and final horizon destination).
   - Q2: Video generation or 3D render source for the 6-to-8 second continuous forward camera flight.
   - Q3: Depth-stop quick-jump markers (e.g., 0% Entry Gate, 35% Mechanism, 70% Core, 100% Horizon) and Auto-Fly toggle behavior.
   - Q4: Minimal HUD telemetry (depth percentage + current frame readout in a slim floating glass pill bar).
2. Wait for my approval before building.

Quality Rules to enforce:
- Re-encode the flight MP4 with dense keyframes (-g 8 -pix_fmt yuv420p -movflags +faststart) so frame-backward seeking never stutters.
- Preload the MP4 into an in-memory browser Blob (fetch -> r.blob() -> URL.createObjectURL) so simple local HTTP servers without HTTP 206 byte-range support never lock video.currentTime at 0.
- Wire a global window wheel listener + touch/pointer drag + range slider so scrolling anywhere on the screen immediately flies the camera.`,

    qa: `Act as a Principal QA Automation Engineer and Independent Design Critic. Inspect and play-test my live web application or interactive deck in a real headless browser before it ships.

Run this exact verification loop:
1. Start or connect to the local HTTP server and run an automated Playwright tour across:
   - Desktop widescreen (1440x900)
   - Mobile portrait (390x844 — verify no horizontal overflow and all controls remain >= 15px and clickable)
   - Reduced-motion mode (prefers-reduced-motion: reduce)
2. Click every interactive button, tab, track switcher, WebGL canvas drag, video scrubber, and clipboard copy button. Assert programmatically that:
   - consoleErrors.length === 0 and pageErrors.length === 0
   - Audio playback advances audio.currentTime > 0 with paused === false
   - Video scrubbing advances video.currentTime to the target timestamp
3. If the project includes video transitions, extract a 10-frame contact strip across every transition and inspect the full-resolution images for jump cuts, morph glitches, or layout collisions.
4. Score UX/UI cleanliness ruthlessly: flag any text bombs, raw source-code dumps on stage, occluded buttons, or caching bugs (?v= cache-busting), fix every defect found, and re-run the browser tour until every check passes cleanly.`
  };

  let current = 0;
  let activeReelIdx = 0;
  let transitioning = false;
  let reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let consoleVisible = true;
  let activeTrack = 'lyria';
  let waveforms = null;
  let swBlobReady = false;
  let swAutoTimer = 0;
  let glEngine = null;
  let activeStyleIdx = 0;

  const stillEl = document.getElementById('still');
  const loopReels = [document.getElementById('v-loop-a'), document.getElementById('v-loop-b')];
  const vTrans = document.getElementById('v-trans');
  const plaque = document.getElementById('plaque');
  const flightBadge = document.getElementById('flight-badge');
  const stageDeck = document.getElementById('stage-deck');
  const overview = document.getElementById('overview');
  const notesEl = document.getElementById('notes');
  const worldFs = document.getElementById('world-fullscreen');
  const scrollFs = document.getElementById('scroll-fullscreen');
  const glFs = document.getElementById('gl-fullscreen');
  const vScroll = document.getElementById('v-scrollworld');
  const swRange = document.getElementById('sw-range');
  const swHud = document.getElementById('sw-hud');
  const swFramePill = document.getElementById('sw-frame-pill');
  const vHyper = document.getElementById('v-hyper');
  const vQa = document.getElementById('v-qa');

  const aud = {
    lyria: document.getElementById('aud-lyria'),
    lyria_elec: document.getElementById('aud-lyria_elec'),
    acestep: document.getElementById('aud-acestep')
  };
  Object.values(aud).forEach((a) => { a.volume = 0.86; });

  function currentAudio() { return aud[activeTrack]; }

  function updateAudioUI() {
    const a = currentAudio();
    const playing = !a.paused;
    const scoreBtn = document.getElementById('btn-score');
    const scoreLbl = document.getElementById('score-lbl');
    const playBtn = document.getElementById('btn-play-trk');
    const names = { lyria: 'Lyria Orch', lyria_elec: 'Lyria Elec', acestep: 'ACE-Step' };
    scoreBtn.classList.toggle('on', playing);
    scoreLbl.textContent = playing ? `♪ ${names[activeTrack]}` : '♪ Music (M)';
    playBtn.textContent = playing ? `❚❚ Pause` : `▶ Play Track`;
    document.getElementById('trk-lyria').classList.toggle('active', activeTrack === 'lyria');
    document.getElementById('trk-lyria-elec').classList.toggle('active', activeTrack === 'lyria_elec');
    document.getElementById('trk-acestep').classList.toggle('active', activeTrack === 'acestep');
  }

  function playTrack(key, forcePlay) {
    const switching = key !== activeTrack;
    const prev = currentAudio();
    const wasPlaying = !prev.paused;
    if (switching) { prev.pause(); activeTrack = key; }
    const next = currentAudio();
    if (forcePlay || (switching && wasPlaying)) {
      next.play().then(updateAudioUI).catch(updateAudioUI);
    } else if (!switching) {
      if (next.paused) next.play().then(updateAudioUI).catch(updateAudioUI);
      else { next.pause(); updateAudioUI(); }
    } else {
      updateAudioUI();
    }
  }

  function updateMobileFocal(idx) {
    const pos = window.innerWidth <= 860 ? `${CHAMBERS[idx].mobileX} 50%` : '50% 50%';
    stillEl.style.backgroundPosition = pos;
    loopReels.forEach((v) => { v.style.objectPosition = pos; });
  }

  window.addEventListener('resize', () => {
    updateMobileFocal(current);
    if (glEngine && current === 4) glEngine.resize();
  });

  function setConsoleVisible(vis) {
    consoleVisible = vis;
    stageDeck.classList.toggle('on', vis);
    const btn = document.getElementById('btn-inspect');
    btn.classList.toggle('on', vis);
  }

  function activateSlideExperience(idx) {
    document.querySelectorAll('.s-card').forEach((card, i) => {
      card.classList.toggle('active', i === idx);
    });

    worldFs.classList.toggle('on', idx === 2);
    scrollFs.classList.toggle('on', idx === 3);
    glFs.classList.toggle('on', idx === 4);

    if (idx === 2) {
      activateStyleWorld(activeStyleIdx);
    } else {
      document.querySelectorAll('#world-fullscreen video').forEach((v) => v.pause());
    }

    if (idx === 3) {
      ensureScrollBlob();
      setScrollDepth(parseFloat(swRange.value) || 0.18);
    } else {
      stopAutoFly();
    }

    if (idx === 4) {
      if (!glEngine) glEngine = createCrucibleGL();
      setTimeout(() => { glEngine.resize(); glEngine.start(); }, 25);
    } else if (glEngine) {
      glEngine.stop();
    }

    if (idx === 5) {
      vHyper.play().catch(() => {});
    } else {
      vHyper.pause();
    }

    if (idx === 6) {
      vQa.play().catch(() => {});
    } else {
      vQa.pause();
    }
  }

  function setChamberUI(idx) {
    const c = CHAMBERS[idx];
    updateMobileFocal(idx);
    document.getElementById('plaque-kicker').textContent = c.kicker;
    document.getElementById('plaque-title').innerHTML = idx === 2 ? STYLE_TITLES[activeStyleIdx] : c.titleHtml;
    document.getElementById('hud-num').textContent = c.num;
    document.getElementById('hud-name').textContent = c.name;
    document.getElementById('notes-title').textContent = `SLIDE ${c.num} · ${c.name}`;
    document.getElementById('notes-text').textContent = c.notes;
    document.getElementById('btn-prev').disabled = idx === 0;
    document.getElementById('btn-next').disabled = idx === CHAMBERS.length - 1;
    stillEl.style.backgroundImage = `url('${c.hero}')`;
    const blurEl = document.getElementById('blur');
    if (blurEl) blurEl.style.backgroundImage = `url('${c.hero}')`;
    document.querySelectorAll('.bead').forEach((b, i) => b.classList.toggle('active', i === idx));
    document.querySelectorAll('.ov-card').forEach((card, i) => card.classList.toggle('current', i === idx));
    history.replaceState(null, '', `#chamber-${idx + 1}`);
    activateSlideExperience(idx);
  }

  function snapToChamber(idx) {
    transitioning = false;
    current = Math.max(0, Math.min(CHAMBERS.length - 1, idx));
    setConsoleVisible(true);
    setChamberUI(current);
    vTrans.pause();
    vTrans.classList.remove('on');
    flightBadge.classList.remove('on');

    const c = CHAMBERS[current];
    const nextReelIdx = 1 - activeReelIdx;
    const curReel = loopReels[activeReelIdx];
    const nxtReel = loopReels[nextReelIdx];

    if (reducedMotion) {
      loopReels.forEach((v) => { v.classList.remove('on'); v.pause(); });
    } else if (curReel.getAttribute('src') === c.loop) {
      curReel.classList.add('on');
      curReel.play().catch(() => {});
      nxtReel.classList.remove('on');
      nxtReel.pause();
    } else {
      nxtReel.src = c.loop;
      nxtReel.poster = c.hero;
      nxtReel.currentTime = 0;
      nxtReel.classList.add('on');
      nxtReel.play().catch(() => {});
      curReel.classList.remove('on');
      curReel.pause();
      activeReelIdx = nextReelIdx;
    }

    if (c.transNext && vTrans.getAttribute('src') !== c.transNext) {
      vTrans.src = c.transNext;
      vTrans.load();
    }

    plaque.classList.remove('off');
    plaque.classList.add('on');
  }

  function flyForward() {
    if (transitioning || current >= CHAMBERS.length - 1) return;
    const targetIdx = current + 1;
    const transSrc = CHAMBERS[current].transNext;

    if (reducedMotion || !transSrc) {
      snapToChamber(targetIdx);
      return;
    }

    transitioning = true;
    worldFs.classList.remove('on');
    scrollFs.classList.remove('on');
    glFs.classList.remove('on');
    stageDeck.classList.remove('on');
    plaque.classList.remove('on');
    plaque.classList.add('off');
    flightBadge.textContent = `WALKING INTO ${CHAMBERS[targetIdx].name} (CLICK → TO SKIP)`;
    flightBadge.classList.add('on');

    if (vTrans.getAttribute('src') !== transSrc) {
      vTrans.src = transSrc;
    }
    vTrans.currentTime = 0;
    vTrans.classList.add('on');

    const nextReelIdx = 1 - activeReelIdx;
    const nxtReel = loopReels[nextReelIdx];
    const curReel = loopReels[activeReelIdx];
    nxtReel.src = CHAMBERS[targetIdx].loop;
    nxtReel.poster = CHAMBERS[targetIdx].hero;
    nxtReel.load();

    let handedOff = false;
    const finishHandoff = () => {
      if (handedOff) return;
      handedOff = true;
      nxtReel.currentTime = 0;
      nxtReel.classList.add('on');
      nxtReel.play().catch(() => {});
      setTimeout(() => {
        vTrans.classList.remove('on');
        vTrans.pause();
        curReel.classList.remove('on');
        curReel.pause();
        activeReelIdx = nextReelIdx;
        current = targetIdx;
        setConsoleVisible(true);
        setChamberUI(targetIdx);
        flightBadge.classList.remove('on');
        plaque.classList.remove('off');
        plaque.classList.add('on');
        transitioning = false;
        if (CHAMBERS[targetIdx].transNext) {
          vTrans.src = CHAMBERS[targetIdx].transNext;
          vTrans.load();
        }
      }, 240);
    };

    const onTime = () => {
      if (vTrans.duration && vTrans.currentTime >= vTrans.duration - 0.34) {
        vTrans.removeEventListener('timeupdate', onTime);
        finishHandoff();
      }
    };
    const onEnd = () => {
      vTrans.removeEventListener('timeupdate', onTime);
      vTrans.removeEventListener('ended', onEnd);
      finishHandoff();
    };
    vTrans.addEventListener('timeupdate', onTime);
    vTrans.addEventListener('ended', onEnd);
    vTrans.play().catch(() => snapToChamber(targetIdx));
  }

  // Build Chamber Beads + Overview Grid (G)
  const rail = document.getElementById('chamber-rail');
  const ovGrid = document.getElementById('ov-grid');
  CHAMBERS.forEach((c, i) => {
    const bead = document.createElement('button');
    bead.className = 'bead' + (i === 0 ? ' active' : '');
    bead.title = `${c.num} · ${c.name}`;
    bead.setAttribute('aria-label', `Jump to Slide ${c.num}: ${c.name}`);
    bead.addEventListener('click', () => snapToChamber(i));
    rail.appendChild(bead);

    const card = document.createElement('button');
    card.className = 'ov-card' + (i === 0 ? ' current' : '');
    card.innerHTML = `
      <img src="${c.hero}" alt="Slide ${c.num} ${c.name}">
      <div class="ov-body">
        <div class="ov-num">${c.num} · ${c.name}</div>
        <div class="ov-title">${c.plateTitle}</div>
        <div class="ov-cap">${c.summary}</div>
      </div>`;
    card.addEventListener('click', () => {
      overview.classList.remove('on');
      snapToChamber(i);
    });
    ovGrid.appendChild(card);
  });

  // ==================== SLIDE 01: INTERACTIVE VEO 3.1 CLIP SWITCHER ====================
  document.querySelectorAll('[data-veo-src]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-veo-src]').forEach((b) => b.classList.toggle('on', b === btn));
      const src = btn.getAttribute('data-veo-src');
      const poster = btn.getAttribute('data-veo-poster');
      const curReel = loopReels[activeReelIdx];
      curReel.src = src;
      curReel.poster = poster;
      curReel.currentTime = 0;
      curReel.classList.add('on');
      curReel.play().catch(() => {});
      stillEl.style.backgroundImage = `url('${poster}')`;
    });
  });

  // ==================== SLIDE 02: LIVE WAVEFORM RENDERER & SCRUBBER ====================
  const waveCanvas = document.getElementById('wave-canvas');
  const waveCtx = waveCanvas.getContext('2d');
  const fmtTime = (s) => !Number.isFinite(s) ? '0:00' : `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
  function drawWaveform() {
    if (current === 1 && consoleVisible) {
      const a = currentAudio();
      const w = waveCanvas.clientWidth || 640;
      const h = waveCanvas.clientHeight || 68;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (waveCanvas.width !== w * dpr || waveCanvas.height !== h * dpr) {
        waveCanvas.width = w * dpr; waveCanvas.height = h * dpr;
      }
      waveCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      waveCtx.fillStyle = '#070605';
      waveCtx.fillRect(0, 0, w, h);

      const wf = waveforms && waveforms[activeTrack];
      const peaks = wf ? wf.peaks : Array.from({ length: 120 }, (_, i) => 0.25 + 0.5 * Math.abs(Math.sin(i * 0.2)));
      const prog = a.duration ? a.currentTime / a.duration : 0;
      const playing = !a.paused;
      const n = peaks.length, gap = w / n, barW = Math.max(2, gap * 0.64);
      const now = performance.now() * 0.008;
      for (let i = 0; i < n; i++) {
        const pulse = playing ? (1 + 0.14 * Math.sin(now + i * 0.35)) : 1;
        const bh = Math.max(4, Math.min(h - 10, peaks[i] * (h - 14) * pulse));
        const x = i * gap, y = (h - bh) * 0.5;
        const passed = (i / n) <= prog;
        waveCtx.fillStyle = passed
          ? (activeTrack === 'acestep' ? '#D4A85C' : '#5B8DF6')
          : 'rgba(212, 168, 92, 0.24)';
        waveCtx.beginPath();
        waveCtx.roundRect(x, y, barW, bh, 2);
        waveCtx.fill();
      }
      waveCtx.fillStyle = '#F5F1E8';
      waveCtx.fillRect(prog * w - 1, 4, 2.5, h - 8);
      document.getElementById('wave-clock').textContent = `${fmtTime(a.currentTime)} / ${fmtTime(a.duration || (wf ? wf.duration : 30))}`;
    }
    requestAnimationFrame(drawWaveform);
  }
  waveCanvas.addEventListener('pointerdown', (e) => {
    const r = waveCanvas.getBoundingClientRect();
    const u = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    const a = currentAudio();
    if (a.duration) a.currentTime = u * a.duration;
    if (a.paused) playTrack(activeTrack, true);
  });

  // ==================== SLIDE 03: FULL-SCREEN 4 LIVING WORLDS SWITCHER ====================
  function activateStyleWorld(idx) {
    activeStyleIdx = idx;
    document.querySelectorAll('#world-fullscreen .style-media').forEach((el, i) => {
      el.classList.toggle('active', i === idx);
      if (el.tagName === 'VIDEO') {
        if (i === idx && !reducedMotion) el.play().catch(() => {});
        else el.pause();
      }
    });
    document.querySelectorAll('.world-card[data-style]').forEach((b, i) => b.classList.toggle('active', i === idx));
    if (current === 2) {
      document.getElementById('plaque-title').innerHTML = STYLE_TITLES[idx];
    }
  }
  document.querySelectorAll('.world-card[data-style]').forEach((btn) => {
    btn.addEventListener('click', () => activateStyleWorld(parseInt(btn.dataset.style, 10)));
  });

  // ==================== SLIDE 04: FULL-SCREEN SCROLL-DRIVEN 3D PORTAL FLIGHT ====================
  function ensureScrollBlob() {
    if (swBlobReady) return;
    swBlobReady = true;
    fetch('media/scrollworld-dive.mp4')
      .then((r) => r.blob())
      .then((b) => {
        vScroll.src = URL.createObjectURL(b);
        vScroll.load();
      })
      .catch(() => {});
  }
  ensureScrollBlob();

  function setScrollDepth(p) {
    const u = Math.max(0, Math.min(1, p));
    swRange.value = String(u);
    const pct = Math.round(u * 100);
    const dur = vScroll.duration || 6.0;
    const t = u * Math.max(0, dur - 0.04);
    const frame = Math.max(1, Math.min(240, Math.round(u * 239) + 1));
    swHud.textContent = `DEPTH ${pct}%`;
    if (swFramePill) swFramePill.textContent = `FRAME ${String(frame).padStart(3, '0')} / 240`;
    if (vScroll.duration) vScroll.currentTime = t;
  }
  function stopAutoFly() {
    cancelAnimationFrame(swAutoTimer);
    swAutoTimer = 0;
    const btn = document.getElementById('sw-auto');
    if (btn) {
      btn.classList.remove('on');
      btn.textContent = '▶ Auto-Fly';
    }
  }
  swRange.addEventListener('input', (e) => { stopAutoFly(); setScrollDepth(parseFloat(e.target.value)); });
  document.querySelectorAll('.dj-btn[data-depth]').forEach((btn) => {
    btn.addEventListener('click', () => {
      stopAutoFly();
      setScrollDepth(parseFloat(btn.getAttribute('data-depth')));
    });
  });

  window.addEventListener('wheel', (e) => {
    if (current !== 3 || overview.classList.contains('on')) return;
    e.preventDefault();
    stopAutoFly();
    const delta = (Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX) * 0.0009;
    setScrollDepth((parseFloat(swRange.value) || 0) + delta);
  }, { passive: false });

  let swDrag = false, swLastY = 0;
  scrollFs.addEventListener('pointerdown', (e) => {
    swDrag = true;
    swLastY = e.clientY;
    stopAutoFly();
  });
  window.addEventListener('pointermove', (e) => {
    if (!swDrag || current !== 3) return;
    const dy = (swLastY - e.clientY) * 0.0025;
    swLastY = e.clientY;
    setScrollDepth((parseFloat(swRange.value) || 0) + dy);
  });
  window.addEventListener('pointerup', () => { swDrag = false; });

  document.getElementById('sw-auto').addEventListener('click', () => {
    if (swAutoTimer) { stopAutoFly(); return; }
    const btn = document.getElementById('sw-auto');
    btn.classList.add('on');
    btn.textContent = '❚❚ Pause';
    let v = parseFloat(swRange.value) || 0;
    if (v >= 0.98) v = 0;
    const step = () => {
      v += 0.0042;
      if (v >= 1) { setScrollDepth(1); stopAutoFly(); return; }
      setScrollDepth(v);
      swAutoTimer = requestAnimationFrame(step);
    };
    swAutoTimer = requestAnimationFrame(step);
  });

  // ==================== SLIDE 05: 3-SCENE VOLUMETRIC & RAYMARCHED WEBGL2 GPU ENGINE ====================
  function createCrucibleGL() {
    const canvas = document.getElementById('gl-canvas');
    const gl = canvas.getContext('webgl2', { antialias: false });
    if (!gl) return { resize() {}, start() {}, stop() {} };

    const vsSrc = `#version 300 es
      in vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }`;
    const fsSrc = `#version 300 es
      precision highp float;
      out vec4 o;
      uniform vec2 uR;
      uniform float uT;
      uniform vec2 uRot;
      uniform int uMat;
      uniform float uChroma;
      uniform float uTwist;

      mat2 rot(float a){ float s=sin(a), c=cos(a); return mat2(c,-s,s,c); }
      float hash(vec3 p){
        p = fract(p * vec3(443.897, 441.423, 437.195));
        p += dot(p, p.yzx + 19.19);
        return fract((p.x + p.y) * p.z);
      }
      float noise(vec3 p){
        vec3 i = floor(p), f = fract(p);
        f = f*f*(3.0 - 2.0*f);
        return mix(
          mix(mix(hash(i), hash(i+vec3(1,0,0)), f.x), mix(hash(i+vec3(0,1,0)), hash(i+vec3(1,1,0)), f.x), f.y),
          mix(mix(hash(i+vec3(0,0,1)), hash(i+vec3(1,0,1)), f.x), mix(hash(i+vec3(0,1,1)), hash(i+vec3(1,1,1)), f.x), f.y),
          f.z
        );
      }
      float fbm(vec3 p){
        float v = 0.0, a = 0.5;
        for(int i=0;i<4;i++){ v += a * noise(p); p = p * 2.04 + vec3(13.1, 7.7, 5.3); a *= 0.5; }
        return v;
      }
      float smin(float a, float b, float k){
        float h = clamp(0.5 + 0.5*(b-a)/k, 0.0, 1.0);
        return mix(b, a, h) - k*h*(1.0-h);
      }
      float sdTorus(vec3 p, vec2 t){ vec2 q = vec2(length(p.xz)-t.x, p.y); return length(q)-t.y; }
      float sdCapsule(vec3 p, vec3 a, vec3 b, float r){
        vec3 pa = p - a, ba = b - a;
        float h = clamp(dot(pa,ba)/dot(ba,ba), 0.0, 1.0);
        return length(pa - ba*h) - r;
      }

      // Rich procedural 3D starfield & cosmic nebula background
      vec3 starfield(vec3 rd){
        vec3 col = mix(vec3(0.012, 0.015, 0.032), vec3(0.038, 0.025, 0.055), clamp(rd.y*0.5+0.5, 0.0, 1.0));
        float neb = fbm(rd * 3.2 + vec3(0.0, 0.0, uT*0.04));
        col += vec3(0.07, 0.16, 0.42) * pow(neb, 2.4) * 1.4;
        col += vec3(0.32, 0.18, 0.06) * pow(fbm(rd * 5.0 - 2.0), 3.0) * 1.1;
        // Sharp multi-scale stars
        for(int k=0;k<2;k++){
          float sc = (k == 0) ? 75.0 : 140.0;
          vec3 g = rd * sc;
          vec3 id = floor(g), f = fract(g) - 0.5;
          float h = hash(id);
          if(h > 0.94){
            float d = length(f);
            float b = smoothstep(0.24, 0.0, d) * pow((h - 0.94)/0.06, 2.0);
            vec3 sCol = mix(vec3(0.65, 0.82, 1.0), vec3(1.0, 0.88, 0.68), fract(h*37.0));
            col += sCol * b * 3.5;
          }
        }
        return col;
      }

      // SCENE 0: INTERSTELLAR GARGANTUA RELATIVISTIC BLACK HOLE (SHARP KEPLERIAN FILAMENTS)
      vec3 renderGargantua(vec2 uv){
        vec3 ro = vec3(0.0, 0.0, -6.5);
        vec3 rd = normalize(vec3(uv, 1.7));
        // Default near-edge-on inclination (~12 deg) so gravitational lensing forms the iconic double arch
        float tiltY = (uRot.y - 0.10) * 0.65 + 0.19;
        mat2 rx = rot(uRot.x + uT * 0.08);
        mat2 ry = rot(tiltY);
        ro.yz *= ry; ro.xz *= rx;
        rd.yz *= ry; rd.xz *= rx;

        vec3 p = ro;
        vec3 v = rd;
        vec3 accCol = vec3(0.0);
        float trans = 1.0;
        float bhR = 0.68;
        float gm = 0.24 + uChroma * 0.16;
        bool swallowed = false;
        float minR = 1e5;

        for(int i=0;i<96;i++){
          float r2 = dot(p, p);
          float r = sqrt(r2);
          minR = min(minR, r);
          if(r < bhR){ swallowed = true; break; }
          if(r > 11.0) break;

          // Relativistic geodesic bending
          vec3 accel = -gm * p / (r2 * r + 0.015);
          float dt = clamp(0.042 * (r - bhR * 0.75), 0.014, 0.16);
          vec3 pNext = p + v * dt + 0.5 * accel * dt * dt;
          v = normalize(v + accel * dt);

          // Exact equatorial plane crossing check (p.y * pNext.y <= 0.0) + thin volumetric slab
          float diskR = length(p.xz);
          float diskH = abs(p.y);
          if(diskR > 0.92 && diskR < 3.85 && diskH < 0.16){
            float radEnv = smoothstep(0.92, 1.18, diskR) * (1.0 - smoothstep(2.6, 3.85, diskR));
            float vertEnv = exp(-diskH * diskH * 260.0);
            float ang = atan(p.z, p.x);
            float kepler = uT * (3.8 / pow(diskR, 1.15));
            // Razor-sharp concentric relativistic plasma filaments
            float n1 = fbm(vec3(diskR * 5.5, cos(ang + kepler)*2.2, sin(ang + kepler)*2.2));
            float fil1 = pow(0.5 + 0.5 * sin(diskR * 46.0 - uT * 3.0 + n1 * 6.5), 2.2);
            float fil2 = pow(0.5 + 0.5 * cos(diskR * 92.0 + ang * 2.0 + n1 * 9.0), 3.0);
            float intensity = radEnv * vertEnv * (0.25 + 1.15 * fil1 + 0.85 * fil2) * n1 * uTwist * 1.45;

            if(intensity > 0.002){
              // Relativistic Doppler beaming: left side approaching (bluer/white-hot), right side receding (deep fiery orange-amber)
              vec3 tangent = normalize(vec3(-p.z, 0.0, p.x));
              float doppler = dot(tangent, -v);
              float beam = pow(clamp(1.0 + 0.52 * doppler, 0.35, 1.85), 2.4);
              float temp = clamp((diskR - 0.92) / 2.6, 0.0, 1.0);

              vec3 innerHot = vec3(1.0, 0.92, 0.76);
              vec3 midFire  = vec3(1.0, 0.44, 0.09);
              vec3 outerCrimson = vec3(0.55, 0.12, 0.03);
              vec3 blueShift = vec3(0.32, 0.68, 1.0);

              vec3 baseC = mix(innerHot, mix(midFire, outerCrimson, smoothstep(0.2, 1.0, temp)), smoothstep(0.0, 0.55, temp));
              baseC = mix(baseC, blueShift * 1.35 + innerHot * 0.4, clamp(doppler * 0.55 * uChroma, 0.0, 0.75));
              vec3 emit = baseC * beam * 2.4;

              float a = clamp(intensity * dt * 6.5, 0.0, 0.95);
              accCol += trans * emit * a;
              trans *= (1.0 - a * 0.72);
              if(trans < 0.02) break;
            }
          }
          p = pNext;
        }

        vec3 bg = vec3(0.0);
        if(!swallowed){
          bg = starfield(v);
          // Razor-thin incandescent photon ring around the black shadow
          float pRing1 = exp(-abs(minR - 0.72) * 55.0);
          float pRing2 = exp(-abs(minR - 0.76) * 18.0);
          bg += vec3(1.0, 0.88, 0.65) * pRing1 * 2.2 + vec3(0.95, 0.45, 0.12) * pRing2 * 0.85;
        }
        return accCol + trans * bg;
      }

      // SCENE 1: QUANTUM MANDELBULB FRACTAL CATHEDRAL (GOLD FILIGREE & COBALT VEINS)
      vec2 mapMandelbulb(vec3 p){
        vec3 q = p;
        q.xz *= rot(uRot.x + uT * 0.16);
        q.yz *= rot(uRot.y * 0.8 + 0.15);

        vec3 z = q;
        float dr = 1.0;
        float r = 0.0;
        float power = 7.0 + uTwist * 2.5;
        float trap = 1e5;
        for(int i=0;i<7;i++){
          r = length(z);
          if(r > 2.2) break;
          trap = min(trap, abs(z.y) + 0.35 * abs(sin(z.x * 6.0)));
          float theta = acos(clamp(z.z / max(r, 0.0001), -1.0, 1.0));
          float phi = atan(z.y, z.x);
          dr = pow(r, power - 1.0) * power * dr + 1.0;
          float zr = pow(r, power);
          theta *= power;
          phi *= power;
          z = zr * vec3(sin(theta)*cos(phi), sin(phi)*sin(theta), cos(theta)) + q;
        }
        float d = 0.5 * log(max(r, 1.0001)) * r / dr;
        return vec2(d, clamp(trap, 0.0, 1.0));
      }

      vec3 normMandel(vec3 p){
        vec2 e = vec2(0.001, -0.001);
        return normalize(
          e.xyy*mapMandelbulb(p+e.xyy).x +
          e.yyx*mapMandelbulb(p+e.yyx).x +
          e.yxy*mapMandelbulb(p+e.yxy).x +
          e.xxx*mapMandelbulb(p+e.xxx).x
        );
      }

      float calcAOMandel(vec3 pos, vec3 nor){
        float occ = 0.0, sca = 1.0;
        for(int i=0;i<5;i++){
          float h = 0.015 + 0.09 * float(i)/4.0;
          float d = mapMandelbulb(pos + h * nor).x;
          occ += (h - d) * sca;
          sca *= 0.72;
        }
        return clamp(1.0 - 2.6 * occ, 0.0, 1.0);
      }

      vec3 studioEnv(vec3 rd){
        float y = clamp(rd.y*0.5+0.5, 0.0, 1.0);
        vec3 c = mix(vec3(0.012, 0.014, 0.022), vec3(0.06, 0.075, 0.12), y);
        c += vec3(1.55, 1.12, 0.58) * smoothstep(0.65, 0.96, dot(rd, normalize(vec3(-0.7, 0.6, -0.35)))) * 2.8;
        c += vec3(0.35, 0.65, 1.35) * smoothstep(0.68, 0.96, dot(rd, normalize(vec3(0.75, 0.38, -0.45)))) * 2.6;
        c += vec3(1.3, 1.28, 1.22) * smoothstep(0.86, 0.992, dot(rd, normalize(vec3(0.0, 0.96, -0.22)))) * 3.4;
        return c;
      }

      vec3 renderFractalVault(vec2 uv){
        vec3 ro = vec3(0.0, 0.0, -2.55);
        vec3 rd = normalize(vec3(uv, 1.65));
        float d = 0.0, trap = 0.0; bool hit = false;
        float glow = 0.0;
        for(int i=0;i<92;i++){
          vec3 p = ro + rd * d;
          vec2 h = mapMandelbulb(p);
          glow += 0.0028 / (0.025 + abs(h.x));
          if(h.x < 0.0009){ hit = true; trap = h.y; break; }
          d += h.x * 0.82;
          if(d > 6.0) break;
        }
        vec3 col = starfield(rd) * 0.45;
        if(hit){
          vec3 p = ro + rd * d;
          vec3 n = normMandel(p);
          vec3 v = -rd;
          float ao = calcAOMandel(p, n);
          vec3 l1 = normalize(vec3(-1.8, 2.4, -1.6));
          vec3 l2 = normalize(vec3(2.0, -1.2, -1.4));
          float diff1 = max(dot(n, l1), 0.0);
          float diff2 = max(dot(n, l2), 0.0);
          float spec = pow(max(dot(n, normalize(l1 + v)), 0.0), 96.0);
          float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
          vec3 rf = studioEnv(reflect(rd, n));

          // 24k Gold filigree ridges + obsidian body + glowing electric-cobalt crevices
          vec3 goldMat = vec3(0.84, 0.62, 0.26);
          vec3 obsidianMat = vec3(0.04, 0.05, 0.08);
          vec3 baseMat = mix(goldMat, obsidianMat, smoothstep(0.15, 0.65, trap));
          vec3 veinGlow = mix(vec3(0.18, 0.56, 1.0), vec3(0.15, 0.95, 0.75), uChroma) * pow(1.0 - trap, 4.0) * 2.4;

          col = baseMat * (0.18 + 0.85 * diff1 + 0.35 * diff2) * ao;
          col += rf * mix(goldMat, vec3(0.5, 0.75, 1.0), trap) * 0.65 * ao;
          col += vec3(1.0, 0.94, 0.78) * spec * 2.2 * ao;
          col += vec3(0.42, 0.7, 1.0) * fres * 0.85 * ao;
          col += veinGlow * (0.4 + 0.6 * (1.0 - ao));
        }
        col += vec3(0.25, 0.55, 1.0) * glow * 0.06;
        return col;
      }

      // SCENE 2: GYROSCOPIC DYSON CHRONO-ORRERY (5 CONCENTRIC ENGRAVED RINGS + SOLAR CORE)
      vec2 mapOrrery(vec3 p){
        vec3 q = p;
        q.xz *= rot(uRot.x + uT * 0.15);
        q.yz *= rot(uRot.y);

        // Blazing central solar sphere
        float dCore = length(q) - 0.38;
        float d = dCore;
        float mat = 0.0;

        // 5 nested counter-rotating gyroscopic armillary rings with beveled slots
        for(int i=0;i<5;i++){
          float fi = float(i);
          float rad = 0.68 + fi * 0.26;
          vec3 rq = q;
          rq.xz *= rot(uT * (0.55 - fi*0.14) * (mod(fi, 2.0) == 0.0 ? 1.0 : -1.0) + fi*1.1);
          rq.xy *= rot((0.35 + fi * 0.42) * uTwist);
          rq.yz *= rot(uT * 0.25 * (fi + 1.0));
          float ring = sdTorus(rq, vec2(rad, 0.030 - fi*0.002));
          if(ring < d){ d = ring; mat = 1.0 + mod(fi, 2.0); }
        }

        // 3 orbiting planetary sapphire & gold spheres
        for(int k=0;k<3;k++){
          float fk = float(k);
          float a = uT * (1.1 - fk * 0.25) + fk * 2.094;
          float rOrb = 0.94 + fk * 0.52;
          vec3 orbP = vec3(cos(a)*rOrb, 0.22*sin(a*1.5 + fk), sin(a)*rOrb);
          float sp = length(q - orbP) - (0.09 + 0.02*fk);
          if(sp < d){ d = sp; mat = 3.0; }
        }
        return vec2(d, mat);
      }

      vec3 normOrrery(vec3 p){
        vec2 e = vec2(0.0012, -0.0012);
        return normalize(
          e.xyy*mapOrrery(p+e.xyy).x +
          e.yyx*mapOrrery(p+e.yyx).x +
          e.yxy*mapOrrery(p+e.yxy).x +
          e.xxx*mapOrrery(p+e.xxx).x
        );
      }

      vec3 renderDysonOrrery(vec2 uv){
        vec3 ro = vec3(0.0, 0.0, -4.15);
        vec3 rd = normalize(vec3(uv, 1.65));
        float d = 0.0, mat = 0.0; bool hit = false;
        float solarGlow = 0.0, blueGlow = 0.0;
        for(int i=0;i<84;i++){
          vec3 p = ro + rd * d;
          vec2 h = mapOrrery(p);
          if(h.y < 0.5) solarGlow += 0.012 / (0.03 + abs(h.x));
          else if(h.y > 2.5) blueGlow += 0.006 / (0.03 + abs(h.x));
          if(h.x < 0.001){ hit = true; mat = h.y; break; }
          d += h.x * 0.85;
          if(d > 10.0) break;
        }
        vec3 col = starfield(rd) * 0.65;
        if(hit){
          vec3 p = ro + rd * d;
          vec3 n = normOrrery(p);
          vec3 v = -rd;
          vec3 lCore = normalize(-p); // lit from the blazing central star + studio key
          vec3 lKey = normalize(vec3(-1.5, 2.2, -1.8));
          float diffCore = max(dot(n, lCore), 0.0);
          float diffKey = max(dot(n, lKey), 0.0);
          float spec = pow(max(dot(n, normalize(lKey + v)), 0.0), 120.0);
          float specCore = pow(max(dot(n, normalize(lCore + v)), 0.0), 64.0);
          float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
          vec3 rf = studioEnv(reflect(rd, n));

          if(mat < 0.5){
            // Incandescent turbulent solar core
            float gran = fbm(p * 8.0 + uT * 1.5);
            col = mix(vec3(1.0, 0.45, 0.08), vec3(1.0, 0.96, 0.82), gran) * 2.8;
          } else if(mat < 2.5){
            // Precision machined brushed brass (mat 1) & brushed titanium (mat 2)
            vec3 metal = (mat < 1.5) ? vec3(0.82, 0.60, 0.26) : vec3(0.55, 0.62, 0.74);
            col = metal * (0.2 + 0.95 * diffKey + 1.15 * diffCore * vec3(1.0, 0.72, 0.35));
            col += rf * metal * 0.85 + vec3(1.0, 0.94, 0.8) * (spec * 2.4 + specCore * 1.8);
          } else {
            // Orbiting electric-sapphire planetary spheres
            col = vec3(0.15, 0.52, 1.0) * (0.4 + 0.8 * diffKey) + rf * 1.2 + vec3(0.6, 0.88, 1.0) * fres * 1.8 + vec3(1.0) * spec * 2.6;
          }
        }
        col += vec3(1.0, 0.62, 0.18) * solarGlow * 0.075;
        col += vec3(0.28, 0.62, 1.0) * blueGlow * (0.06 + 0.06 * uChroma);
        return col;
      }

      void main(){
        vec2 uv = (gl_FragCoord.xy - 0.5 * uR) / min(uR.x, uR.y);
        uv.y -= 0.06;
        vec3 col;
        if(uMat == 0) col = renderGargantua(uv);
        else if(uMat == 1) col = renderFractalVault(uv);
        else col = renderDysonOrrery(uv);

        // Filmic ACES tone mapping
        col = (col * (2.51 * col + 0.03)) / (col * (2.43 * col + 0.59) + 0.14);
        o = vec4(pow(clamp(col, 0.0, 1.0), vec3(0.92)), 1.0);
      }`;

    const mk = (t, s) => { const sh = gl.createShader(t); gl.shaderSource(sh, s); gl.compileShader(sh); return sh; };
    const prog = gl.createProgram();
    gl.attachShader(prog, mk(gl.VERTEX_SHADER, vsSrc));
    gl.attachShader(prog, mk(gl.FRAGMENT_SHADER, fsSrc));
    gl.linkProgram(prog);
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    const b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uR = gl.getUniformLocation(prog, 'uR');
    const uT = gl.getUniformLocation(prog, 'uT');
    const uRot = gl.getUniformLocation(prog, 'uRot');
    const uMat = gl.getUniformLocation(prog, 'uMat');
    const uChroma = gl.getUniformLocation(prog, 'uChroma');
    const uTwist = gl.getUniformLocation(prog, 'uTwist');

    let raf = 0, run = false, t = 0, rx = 0.35, ry = 0.22, vx = 0, vy = 0, drag = false, lx = 0, ly = 0;
    let mat = 0, chroma = 0.55, twist = 0.85;
    const glHud = document.getElementById('gl-hud');

    canvas.addEventListener('pointerdown', (e) => { drag = true; lx = e.clientX; ly = e.clientY; });
    window.addEventListener('pointermove', (e) => {
      if (!drag) return;
      const dx = (e.clientX - lx) * 0.01;
      const dy = (e.clientY - ly) * 0.01;
      rx += dx;
      ry = Math.max(-1.25, Math.min(1.25, ry + dy));
      vx = dx * 0.65;
      vy = dy * 0.65;
      lx = e.clientX; ly = e.clientY;
      if (glHud) {
        const az = Math.round((rx * 180 / Math.PI) % 360);
        const el = Math.round(ry * 180 / Math.PI);
        glHud.textContent = `ORBIT ${az}° / ${el}° · 60 FPS GPU`;
      }
    });
    window.addEventListener('pointerup', () => { drag = false; });

    document.querySelectorAll('[data-gl-mat]').forEach((btn) => {
      btn.addEventListener('click', () => {
        mat = parseInt(btn.dataset.glMat, 10);
        document.querySelectorAll('[data-gl-mat]').forEach((x) => x.classList.toggle('on', x === btn));
      });
    });
    document.getElementById('gl-chroma').addEventListener('input', (e) => { chroma = parseFloat(e.target.value); });
    document.getElementById('gl-twist').addEventListener('input', (e) => { twist = parseFloat(e.target.value); });

    function frame() {
      if (!run) return;
      if (!reducedMotion) {
        t += 0.016;
        if (!drag) {
          rx += vx;
          ry = Math.max(-1.25, Math.min(1.25, ry + vy));
          vx *= 0.94;
          vy *= 0.94;
        }
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(prog);
      gl.uniform2f(uR, canvas.width, canvas.height);
      gl.uniform1f(uT, t);
      gl.uniform2f(uRot, rx, ry);
      gl.uniform1i(uMat, mat);
      gl.uniform1f(uChroma, chroma);
      gl.uniform1f(uTwist, twist);
      gl.bindVertexArray(vao);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(frame);
    }

    return {
      resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width = Math.max(1, Math.floor(canvas.clientWidth * dpr));
        canvas.height = Math.max(1, Math.floor(canvas.clientHeight * dpr));
      },
      start() { if (!run) { run = true; frame(); } },
      stop() { run = false; cancelAnimationFrame(raf); }
    };
  }

  // ==================== SLIDE 06: 4-ACT CODE-COMPILED SHOWREEL CONTROLS ====================
  document.querySelectorAll('[data-hseek]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-hseek]').forEach((b) => b.classList.toggle('on', b === btn));
      vHyper.currentTime = parseFloat(btn.getAttribute('data-hseek'));
      vHyper.play().catch(() => {});
    });
  });
  document.getElementById('h-step-back').addEventListener('click', () => {
    vHyper.pause();
    vHyper.currentTime = Math.max(0, vHyper.currentTime - (1 / 30));
  });
  document.getElementById('h-step-fwd').addEventListener('click', () => {
    vHyper.pause();
    vHyper.currentTime = Math.min(vHyper.duration || 12, vHyper.currentTime + (1 / 30));
  });
  const btnHyperMute = document.getElementById('btn-hyper-mute');
  btnHyperMute.addEventListener('click', () => {
    vHyper.muted = !vHyper.muted;
    if (!vHyper.muted) {
      currentAudio().pause();
      updateAudioUI();
      vHyper.play().catch(() => {});
    }
    btnHyperMute.classList.toggle('on', !vHyper.muted);
    btnHyperMute.textContent = vHyper.muted ? '🔊 Unmute Score' : '🔇 Mute Score';
  });

  // ==================== SLIDE 07: AUTONOMOUS BROWSER QA TABS ====================
  document.querySelectorAll('[data-qatab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-qatab');
      document.querySelectorAll('[data-qatab]').forEach((b) => b.classList.toggle('primary', b === btn));
      document.querySelectorAll('.qa-view').forEach((v) => v.classList.toggle('active', v.id === `qaview-${target}`));
      if (target === 'reel') vQa.play().catch(() => {});
      else vQa.pause();
    });
  });

  // ==================== GENERALIZED ONE-CLICK MASTER PROMPT COPY ====================
  function copyTextToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    }
    return Promise.resolve(fallbackCopy(text));
  }
  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (_) {}
    document.body.removeChild(ta);
  }

  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-prompt-key');
      const txt = (key && MASTER_PROMPTS[key]) ? MASTER_PROMPTS[key] : (btn.getAttribute('data-copy') || '');
      const orig = btn.getAttribute('data-orig-label') || btn.textContent;
      btn.setAttribute('data-orig-label', orig);
      copyTextToClipboard(txt).then(() => {
        btn.classList.add('copied');
        btn.textContent = '✓ Copied Prompt!';
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.textContent = orig;
        }, 1800);
      });
    });
  });

  // ==================== GLOBAL DOCK & KEYBOARD NAVIGATION ====================
  document.getElementById('btn-next').addEventListener('click', () => {
    if (transitioning) snapToChamber(Math.min(CHAMBERS.length - 1, current + 1));
    else flyForward();
  });
  document.getElementById('btn-prev').addEventListener('click', () => snapToChamber(Math.max(0, current - 1)));
  document.getElementById('btn-inspect').addEventListener('click', () => setConsoleVisible(!consoleVisible));
  document.getElementById('btn-score').addEventListener('click', () => playTrack(activeTrack));
  document.getElementById('btn-play-trk').addEventListener('click', () => playTrack(activeTrack));
  document.getElementById('trk-lyria').addEventListener('click', () => playTrack('lyria', true));
  document.getElementById('trk-lyria-elec').addEventListener('click', () => playTrack('lyria_elec', true));
  document.getElementById('trk-acestep').addEventListener('click', () => playTrack('acestep', true));
  document.getElementById('vol-slider').addEventListener('input', (e) => {
    const v = parseFloat(e.target.value);
    Object.values(aud).forEach((a) => { a.volume = v; });
  });
  document.getElementById('btn-grid').addEventListener('click', () => {
    overview.classList.toggle('on');
  });
  document.getElementById('ov-close').addEventListener('click', () => overview.classList.remove('on'));
  document.getElementById('btn-notes').addEventListener('click', () => {
    notesEl.classList.toggle('on');
    document.getElementById('btn-notes').classList.toggle('on', notesEl.classList.contains('on'));
  });
  document.getElementById('btn-still').addEventListener('click', () => {
    reducedMotion = !reducedMotion;
    document.body.classList.toggle('reduced-motion', reducedMotion);
    document.getElementById('btn-still').classList.toggle('on', reducedMotion);
    snapToChamber(current);
  });

  window.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'Escape') { overview.classList.remove('on'); notesEl.classList.remove('on'); return; }
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      if (transitioning) snapToChamber(Math.min(CHAMBERS.length - 1, current + 1));
      else flyForward();
    }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); snapToChamber(Math.max(0, current - 1)); }
    else if (e.key === 'd' || e.key === 'D') { e.preventDefault(); setConsoleVisible(!consoleVisible); }
    else if (e.key === 'g' || e.key === 'G') { e.preventDefault(); overview.classList.toggle('on'); }
    else if (e.key === 'm' || e.key === 'M') { e.preventDefault(); playTrack(activeTrack); }
    else if (e.key === 'n' || e.key === 'N') { e.preventDefault(); notesEl.classList.toggle('on'); }
    else if (e.key === 'r' || e.key === 'R') { e.preventDefault(); document.getElementById('btn-still').click(); }
    else if (e.key >= '1' && e.key <= '8') { overview.classList.remove('on'); snapToChamber(parseInt(e.key, 10) - 1); }
  });

  window.addEventListener('hashchange', () => {
    const mh = (window.location.hash || '').match(/(\d+)/);
    if (!mh) return;
    const target = Math.max(0, Math.min(CHAMBERS.length - 1, parseInt(mh[1], 10) - 1));
    if (target !== current) snapToChamber(target);
  });

  fetch('media/waveforms.json').then((r) => r.json()).then((d) => { waveforms = d; }).catch(() => {});

  const mHash = (window.location.hash || '').match(/(\d+)/);
  const startIdx = mHash ? Math.max(0, Math.min(CHAMBERS.length - 1, parseInt(mHash[1], 10) - 1)) : 0;
  if (reducedMotion) {
    document.body.classList.add('reduced-motion');
    document.getElementById('btn-still').classList.add('on');
  }
  snapToChamber(startIdx);
  updateAudioUI();
  requestAnimationFrame(drawWaveform);
})();

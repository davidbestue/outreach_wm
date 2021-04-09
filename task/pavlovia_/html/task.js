/************* 
 * Task Test *
 *************/

import { PsychoJS } from 'https://pavlovia.org/lib/core.js';
import * as core from 'https://pavlovia.org/lib/core.js';
import { TrialHandler } from 'https://pavlovia.org/lib/data.js';
import { Scheduler } from 'https://pavlovia.org/lib/util.js';
import * as util from 'https://pavlovia.org/lib/util.js';
import * as visual from 'https://pavlovia.org/lib/visual.js';
import { Sound } from 'https://pavlovia.org/lib/sound.js';

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'task';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionsRoutineBegin);
flowScheduler.add(InstructionsRoutineEachFrame);
flowScheduler.add(InstructionsRoutineEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(feedbackRoutineBegin);
flowScheduler.add(feedbackRoutineEachFrame);
flowScheduler.add(feedbackRoutineEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var InstructionsClock;
var text_3;
var key_resp_3;
var delay_shortClock;
var pos0;
var pos45;
var pos90;
var pos135;
var pos180;
var pos225;
var pos270;
var pos315;
var response;
var mouse;
var text;
var delay_longClock;
var pos0_2;
var pos45_2;
var pos90_2;
var pos135_2;
var pos180_2;
var pos225_2;
var pos270_2;
var pos315_2;
var response_2;
var mouse_2;
var text_4;
var feedbackClock;
var text_2;
var key_resp_2;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '¡Bienvenido!\n\nEn este test de working memory tendrás que memorizar la posición de los diferentes colores.\n\nDespués de memorizarlos deberás hacer click en la posición del color que te indiquemos (el color aparecerá encima de la curz central acabado el tiempo de memorización).\n\nAunque no estés seguro, arriésgate!\n\nEl número de items a recordar así como el tiempo de memorización irán variando para hacerlo más complicado, ¡no te asustes!\n\nLa durada total es de entre 10-15min\n\nCuando lo tengas claro, pulsa  "space"para empezar.',
    font: 'Calibri',
    units : undefined, 
    pos: [(- 0.1), 0.025], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "delay_short"
  delay_shortClock = new util.Clock();
  pos0 = new visual.Rect ({
    win: psychoJS.window, name: 'pos0', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 90, pos: [0.4, 0],
    lineWidth: 0.005, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  pos45 = new visual.Rect ({
    win: psychoJS.window, name: 'pos45', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0.25, 0.25],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  pos90 = new visual.Rect ({
    win: psychoJS.window, name: 'pos90', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, 0.4],
    lineWidth: 0.005, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  pos135 = new visual.Rect ({
    win: psychoJS.window, name: 'pos135', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [(- 0.25), 0.25],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  pos180 = new visual.Rect ({
    win: psychoJS.window, name: 'pos180', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [(- 0.4), 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  pos225 = new visual.Rect ({
    win: psychoJS.window, name: 'pos225', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [(- 0.25), (- 0.25)],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  pos270 = new visual.Rect ({
    win: psychoJS.window, name: 'pos270', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  pos315 = new visual.Rect ({
    win: psychoJS.window, name: 'pos315', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0.25, (- 0.25)],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  response = new visual.Rect ({
    win: psychoJS.window, name: 'response', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -10.0 
  });
  
  // Initialize components for Routine "delay_long"
  delay_longClock = new util.Clock();
  pos0_2 = new visual.Rect ({
    win: psychoJS.window, name: 'pos0_2', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 90, pos: [0.4, 0],
    lineWidth: 0.005, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  pos45_2 = new visual.Rect ({
    win: psychoJS.window, name: 'pos45_2', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0.25, 0.25],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  pos90_2 = new visual.Rect ({
    win: psychoJS.window, name: 'pos90_2', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, 0.4],
    lineWidth: 0.005, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  pos135_2 = new visual.Rect ({
    win: psychoJS.window, name: 'pos135_2', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [(- 0.25), 0.25],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  pos180_2 = new visual.Rect ({
    win: psychoJS.window, name: 'pos180_2', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [(- 0.4), 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  pos225_2 = new visual.Rect ({
    win: psychoJS.window, name: 'pos225_2', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [(- 0.25), (- 0.25)],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  pos270_2 = new visual.Rect ({
    win: psychoJS.window, name: 'pos270_2', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  pos315_2 = new visual.Rect ({
    win: psychoJS.window, name: 'pos315_2', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0.25, (- 0.25)],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  response_2 = new visual.Rect ({
    win: psychoJS.window, name: 'response_2', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -10.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '¡Muchas gracias por participar!\n\n\nPara salir, pulsa "space"\n',
    font: 'Calibri',
    units : undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var InstructionsComponents;
function InstructionsRoutineBegin() {
  //------Prepare to start Routine 'Instructions'-------
  t = 0;
  InstructionsClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_3.keys = undefined;
  key_resp_3.rt = undefined;
  // keep track of which components have finished
  InstructionsComponents = [];
  InstructionsComponents.push(text_3);
  InstructionsComponents.push(key_resp_3);
  
  for (const thisComponent of InstructionsComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function InstructionsRoutineEachFrame() {
  //------Loop for each frame of Routine 'Instructions'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = InstructionsClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_3* updates
  if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_3.tStart = t;  // (not accounting for frame time here)
    text_3.frameNStart = frameN;  // exact frame index
    text_3.setAutoDraw(true);
  }

  
  // *key_resp_3* updates
  if (t >= 5 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_3.tStart = t;  // (not accounting for frame time here)
    key_resp_3.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
  }

  if (key_resp_3.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_3.keys = theseKeys[0].name;  // just the last key pressed
      key_resp_3.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of InstructionsComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEnd() {
  //------Ending Routine 'Instructions'-------
  for (const thisComponent of InstructionsComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
  if (typeof key_resp_3.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
      routineTimer.reset();
      }
  
  key_resp_3.stop();
  // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var trials;
var currentLoop;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'trials_short_delay.xlsx',
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    thisScheduler.add(importConditions(trials));
    thisScheduler.add(delay_shortRoutineBegin);
    thisScheduler.add(delay_shortRoutineEachFrame);
    thisScheduler.add(delay_shortRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

var trials_2;
function trials_2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'trials_long_delay.xlsx',
    seed: undefined, name: 'trials_2'});
  psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
  currentLoop = trials_2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial_2 of trials_2) {
    thisScheduler.add(importConditions(trials_2));
    thisScheduler.add(delay_longRoutineBegin);
    thisScheduler.add(delay_longRoutineEachFrame);
    thisScheduler.add(delay_longRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}

var gotValidClick;
var delay_shortComponents;
function delay_shortRoutineBegin() {
  //------Prepare to start Routine 'delay_short'-------
  t = 0;
  delay_shortClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  pos0.setFillColor(new util.Color(Color0));
  pos0.setLineColor(new util.Color(Color0));
  pos45.setFillColor(new util.Color(Color45));
  pos45.setLineColor(new util.Color(Color45));
  pos90.setFillColor(new util.Color(Color90));
  pos90.setLineColor(new util.Color(Color90));
  pos135.setFillColor(new util.Color(Color135));
  pos135.setLineColor(new util.Color(Color135));
  pos180.setFillColor(new util.Color(Color180));
  pos180.setLineColor(new util.Color(Color180));
  pos225.setFillColor(new util.Color(Color225));
  pos225.setLineColor(new util.Color(Color225));
  pos270.setFillColor(new util.Color(Color270));
  pos270.setLineColor(new util.Color(Color270));
  pos315.setFillColor(new util.Color(Color315));
  pos315.setLineColor(new util.Color(Color315));
  response.setFillColor(new util.Color(Cueresp));
  response.setLineColor(new util.Color(Cueresp));
  // setup some python lists for storing info about the mouse
  // current position of the mouse:
  mouse.x = [];
  mouse.y = [];
  mouse.leftButton = [];
  mouse.midButton = [];
  mouse.rightButton = [];
  mouse.time = [];
  gotValidClick = false; // until a click is received
  // keep track of which components have finished
  delay_shortComponents = [];
  delay_shortComponents.push(pos0);
  delay_shortComponents.push(pos45);
  delay_shortComponents.push(pos90);
  delay_shortComponents.push(pos135);
  delay_shortComponents.push(pos180);
  delay_shortComponents.push(pos225);
  delay_shortComponents.push(pos270);
  delay_shortComponents.push(pos315);
  delay_shortComponents.push(response);
  delay_shortComponents.push(mouse);
  delay_shortComponents.push(text);
  
  for (const thisComponent of delay_shortComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
var prevButtonState;
function delay_shortRoutineEachFrame() {
  //------Loop for each frame of Routine 'delay_short'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = delay_shortClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *pos0* updates
  if (t >= 0.0 && pos0.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos0.tStart = t;  // (not accounting for frame time here)
    pos0.frameNStart = frameN;  // exact frame index
    pos0.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos0.setAutoDraw(false);
  }
  
  // *pos45* updates
  if (t >= 0.0 && pos45.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos45.tStart = t;  // (not accounting for frame time here)
    pos45.frameNStart = frameN;  // exact frame index
    pos45.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos45.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos45.setAutoDraw(false);
  }
  
  // *pos90* updates
  if (t >= 0.0 && pos90.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos90.tStart = t;  // (not accounting for frame time here)
    pos90.frameNStart = frameN;  // exact frame index
    pos90.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos90.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos90.setAutoDraw(false);
  }
  
  // *pos135* updates
  if (t >= 0.0 && pos135.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos135.tStart = t;  // (not accounting for frame time here)
    pos135.frameNStart = frameN;  // exact frame index
    pos135.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos135.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos135.setAutoDraw(false);
  }
  
  // *pos180* updates
  if (t >= 0.0 && pos180.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos180.tStart = t;  // (not accounting for frame time here)
    pos180.frameNStart = frameN;  // exact frame index
    pos180.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos180.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos180.setAutoDraw(false);
  }
  
  // *pos225* updates
  if (t >= 0.0 && pos225.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos225.tStart = t;  // (not accounting for frame time here)
    pos225.frameNStart = frameN;  // exact frame index
    pos225.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos225.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos225.setAutoDraw(false);
  }
  
  // *pos270* updates
  if (t >= 0.0 && pos270.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos270.tStart = t;  // (not accounting for frame time here)
    pos270.frameNStart = frameN;  // exact frame index
    pos270.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos270.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos270.setAutoDraw(false);
  }
  
  // *pos315* updates
  if (t >= 0.0 && pos315.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos315.tStart = t;  // (not accounting for frame time here)
    pos315.frameNStart = frameN;  // exact frame index
    pos315.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos315.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos315.setAutoDraw(false);
  }
  
  // *response* updates
  if (t >= 7 && response.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    response.tStart = t;  // (not accounting for frame time here)
    response.frameNStart = frameN;  // exact frame index
    response.setAutoDraw(true);
  }

  // *mouse* updates
  if (t >= 7 && mouse.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    mouse.tStart = t;  // (not accounting for frame time here)
    mouse.frameNStart = frameN;  // exact frame index
    mouse.status = PsychoJS.Status.STARTED;
    prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
    }
  if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
    let buttons = mouse.getPressed();
    if (!buttons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
      prevButtonState = buttons;
      if (buttons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
        const xys = mouse.getPos();
        mouse.x.push(xys[0]);
        mouse.y.push(xys[1]);
        mouse.leftButton.push(buttons[0]);
        mouse.midButton.push(buttons[1]);
        mouse.rightButton.push(buttons[2]);
        mouse.time.push(globalClock.getTime());
        // abort routine on response
        continueRoutine = false;
      }
    }
  }
  
  // *text* updates
  if (t >= 0 && text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text.tStart = t;  // (not accounting for frame time here)
    text.frameNStart = frameN;  // exact frame index
    text.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of delay_shortComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function delay_shortRoutineEnd() {
  //------Ending Routine 'delay_short'-------
  for (const thisComponent of delay_shortComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // store data for thisExp (ExperimentHandler)
  if (mouse.x) {  psychoJS.experiment.addData('mouse.x', mouse.x[0])};
  if (mouse.y) {  psychoJS.experiment.addData('mouse.y', mouse.y[0])};
  if (mouse.leftButton) {  psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton[0])};
  if (mouse.midButton) {  psychoJS.experiment.addData('mouse.midButton', mouse.midButton[0])};
  if (mouse.rightButton) {  psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton[0])};
  if (mouse.time) {  psychoJS.experiment.addData('mouse.time', mouse.time[0])};
  
  // the Routine "delay_short" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var delay_longComponents;
function delay_longRoutineBegin() {
  //------Prepare to start Routine 'delay_long'-------
  t = 0;
  delay_longClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  pos0_2.setFillColor(new util.Color(Color0));
  pos0_2.setLineColor(new util.Color(Color0));
  pos45_2.setFillColor(new util.Color(Color45));
  pos45_2.setLineColor(new util.Color(Color45));
  pos90_2.setFillColor(new util.Color(Color90));
  pos90_2.setLineColor(new util.Color(Color90));
  pos135_2.setFillColor(new util.Color(Color135));
  pos135_2.setLineColor(new util.Color(Color135));
  pos180_2.setFillColor(new util.Color(Color180));
  pos180_2.setLineColor(new util.Color(Color180));
  pos225_2.setFillColor(new util.Color(Color225));
  pos225_2.setLineColor(new util.Color(Color225));
  pos270_2.setFillColor(new util.Color(Color270));
  pos270_2.setLineColor(new util.Color(Color270));
  pos315_2.setFillColor(new util.Color(Color315));
  pos315_2.setLineColor(new util.Color(Color315));
  response_2.setFillColor(new util.Color(Cueresp));
  response_2.setLineColor(new util.Color(Cueresp));
  // setup some python lists for storing info about the mouse_2
  gotValidClick = false; // until a click is received
  // keep track of which components have finished
  delay_longComponents = [];
  delay_longComponents.push(pos0_2);
  delay_longComponents.push(pos45_2);
  delay_longComponents.push(pos90_2);
  delay_longComponents.push(pos135_2);
  delay_longComponents.push(pos180_2);
  delay_longComponents.push(pos225_2);
  delay_longComponents.push(pos270_2);
  delay_longComponents.push(pos315_2);
  delay_longComponents.push(response_2);
  delay_longComponents.push(mouse_2);
  delay_longComponents.push(text_4);
  
  for (const thisComponent of delay_longComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function delay_longRoutineEachFrame() {
  //------Loop for each frame of Routine 'delay_long'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = delay_longClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *pos0_2* updates
  if (t >= 0.0 && pos0_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos0_2.tStart = t;  // (not accounting for frame time here)
    pos0_2.frameNStart = frameN;  // exact frame index
    pos0_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos0_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos0_2.setAutoDraw(false);
  }
  
  // *pos45_2* updates
  if (t >= 0.0 && pos45_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos45_2.tStart = t;  // (not accounting for frame time here)
    pos45_2.frameNStart = frameN;  // exact frame index
    pos45_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos45_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos45_2.setAutoDraw(false);
  }
  
  // *pos90_2* updates
  if (t >= 0.0 && pos90_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos90_2.tStart = t;  // (not accounting for frame time here)
    pos90_2.frameNStart = frameN;  // exact frame index
    pos90_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos90_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos90_2.setAutoDraw(false);
  }
  
  // *pos135_2* updates
  if (t >= 0.0 && pos135_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos135_2.tStart = t;  // (not accounting for frame time here)
    pos135_2.frameNStart = frameN;  // exact frame index
    pos135_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos135_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos135_2.setAutoDraw(false);
  }
  
  // *pos180_2* updates
  if (t >= 0.0 && pos180_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos180_2.tStart = t;  // (not accounting for frame time here)
    pos180_2.frameNStart = frameN;  // exact frame index
    pos180_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos180_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos180_2.setAutoDraw(false);
  }
  
  // *pos225_2* updates
  if (t >= 0.0 && pos225_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos225_2.tStart = t;  // (not accounting for frame time here)
    pos225_2.frameNStart = frameN;  // exact frame index
    pos225_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos225_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos225_2.setAutoDraw(false);
  }
  
  // *pos270_2* updates
  if (t >= 0.0 && pos270_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos270_2.tStart = t;  // (not accounting for frame time here)
    pos270_2.frameNStart = frameN;  // exact frame index
    pos270_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos270_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos270_2.setAutoDraw(false);
  }
  
  // *pos315_2* updates
  if (t >= 0.0 && pos315_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos315_2.tStart = t;  // (not accounting for frame time here)
    pos315_2.frameNStart = frameN;  // exact frame index
    pos315_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos315_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos315_2.setAutoDraw(false);
  }
  
  // *response_2* updates
  if (t >= 14 && response_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    response_2.tStart = t;  // (not accounting for frame time here)
    response_2.frameNStart = frameN;  // exact frame index
    response_2.setAutoDraw(true);
  }

  // *mouse_2* updates
  if (t >= 14 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    mouse_2.tStart = t;  // (not accounting for frame time here)
    mouse_2.frameNStart = frameN;  // exact frame index
    mouse_2.status = PsychoJS.Status.STARTED;
    mouse_2.mouseClock.reset();
    prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
    }
  if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
    let buttons = mouse_2.getPressed();
    if (!buttons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
      prevButtonState = buttons;
      if (buttons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
        // abort routine on response
        continueRoutine = false;
      }
    }
  }
  
  // *text_4* updates
  if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_4.tStart = t;  // (not accounting for frame time here)
    text_4.frameNStart = frameN;  // exact frame index
    text_4.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of delay_longComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function delay_longRoutineEnd() {
  //------Ending Routine 'delay_long'-------
  for (const thisComponent of delay_longComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // store data for thisExp (ExperimentHandler)
  const xys = mouse_2.getPos();
  const buttons = mouse_2.getPressed();
  psychoJS.experiment.addData('mouse_2.x', xys[0]);
  psychoJS.experiment.addData('mouse_2.y', xys[1]);
  psychoJS.experiment.addData('mouse_2.leftButton', buttons[0]);
  psychoJS.experiment.addData('mouse_2.midButton', buttons[1]);
  psychoJS.experiment.addData('mouse_2.rightButton', buttons[2]);
  // the Routine "delay_long" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var feedbackComponents;
function feedbackRoutineBegin() {
  //------Prepare to start Routine 'feedback'-------
  t = 0;
  feedbackClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_2.keys = undefined;
  key_resp_2.rt = undefined;
  // keep track of which components have finished
  feedbackComponents = [];
  feedbackComponents.push(text_2);
  feedbackComponents.push(key_resp_2);
  
  for (const thisComponent of feedbackComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function feedbackRoutineEachFrame() {
  //------Loop for each frame of Routine 'feedback'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = feedbackClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_2* updates
  if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_2.tStart = t;  // (not accounting for frame time here)
    text_2.frameNStart = frameN;  // exact frame index
    text_2.setAutoDraw(true);
  }

  
  // *key_resp_2* updates
  if (t >= 2 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_2.tStart = t;  // (not accounting for frame time here)
    key_resp_2.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
  }

  if (key_resp_2.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_2.keys = theseKeys[0].name;  // just the last key pressed
      key_resp_2.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of feedbackComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEnd() {
  //------Ending Routine 'feedback'-------
  for (const thisComponent of feedbackComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
  if (typeof key_resp_2.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
      routineTimer.reset();
      }
  
  key_resp_2.stop();
  // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


function endLoopIteration({thisScheduler, isTrials=true}) {
  // ------Prepare for next entry------
  return function () {
    // ------Check if user ended loop early------
    if (currentLoop.finished) {
      // Check for and save orphaned data
      if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
        psychoJS.experiment.nextEntry();
      }
      thisScheduler.stop();
    } else if (isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}

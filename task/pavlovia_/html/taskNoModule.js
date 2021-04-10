/************* 
 * Task Test *
 *************/

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
const trials_shortLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_shortLoopBegin, trials_shortLoopScheduler);
flowScheduler.add(trials_shortLoopScheduler);
flowScheduler.add(trials_shortLoopEnd);
const trials_interLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_interLoopBegin, trials_interLoopScheduler);
flowScheduler.add(trials_interLoopScheduler);
flowScheduler.add(trials_interLoopEnd);
const trials_longLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_longLoopBegin, trials_longLoopScheduler);
flowScheduler.add(trials_longLoopScheduler);
flowScheduler.add(trials_longLoopEnd);
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
var text_instr;
var key_resp_instr;
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
var cross_short;
var delay_intermediateClock;
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
var cross_inter;
var delay_longClock;
var pos0_3;
var pos45_3;
var pos90_3;
var pos135_3;
var pos180_3;
var pos225_3;
var pos270_3;
var pos315_3;
var response_3;
var mouse_3;
var cross_long;
var feedbackClock;
var final_text;
var final_key;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  text_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instr',
    text: '¡Bienvenido!\n\nEn este test de working memory tendrás que memorizar la posición de los diferentes colores.\n\nDespués de memorizarlos deberás hacer click en la posición del color que te indiquemos (el color aparecerá encima de la cruz central acabado el tiempo de memorización).\n\nAunque no estés seguro, arriésgate!\n\nEl número de items a recordar así como el tiempo de memorización irán variando para hacerlo más complicado, ¡no te asustes!\n\nLa duración total es de entre 10-15min\n\nCuando lo tengas claro, pulsa  "space"para empezar.',
    font: 'Calibri',
    units : undefined, 
    pos: [0, 0.025], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_instr = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
  cross_short = new visual.TextStim({
    win: psychoJS.window,
    name: 'cross_short',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -10.0 
  });
  
  // Initialize components for Routine "delay_intermediate"
  delay_intermediateClock = new util.Clock();
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
  cross_inter = new visual.TextStim({
    win: psychoJS.window,
    name: 'cross_inter',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -10.0 
  });
  
  // Initialize components for Routine "delay_long"
  delay_longClock = new util.Clock();
  pos0_3 = new visual.Rect ({
    win: psychoJS.window, name: 'pos0_3', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 90, pos: [0.4, 0],
    lineWidth: 0.005, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  pos45_3 = new visual.Rect ({
    win: psychoJS.window, name: 'pos45_3', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0.25, 0.25],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  pos90_3 = new visual.Rect ({
    win: psychoJS.window, name: 'pos90_3', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, 0.4],
    lineWidth: 0.005, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  pos135_3 = new visual.Rect ({
    win: psychoJS.window, name: 'pos135_3', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [(- 0.25), 0.25],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  pos180_3 = new visual.Rect ({
    win: psychoJS.window, name: 'pos180_3', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [(- 0.4), 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  pos225_3 = new visual.Rect ({
    win: psychoJS.window, name: 'pos225_3', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [(- 0.25), (- 0.25)],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  pos270_3 = new visual.Rect ({
    win: psychoJS.window, name: 'pos270_3', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  pos315_3 = new visual.Rect ({
    win: psychoJS.window, name: 'pos315_3', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0.25, (- 0.25)],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  response_3 = new visual.Rect ({
    win: psychoJS.window, name: 'response_3', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  cross_long = new visual.TextStim({
    win: psychoJS.window,
    name: 'cross_long',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -10.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  final_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'final_text',
    text: '¡Muchas gracias por participar!\n\n\nPara salir, pulsa "space"\n',
    font: 'Calibri',
    units : undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  final_key = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
  key_resp_instr.keys = undefined;
  key_resp_instr.rt = undefined;
  // keep track of which components have finished
  InstructionsComponents = [];
  InstructionsComponents.push(text_instr);
  InstructionsComponents.push(key_resp_instr);
  
  InstructionsComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
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
  
  // *text_instr* updates
  if (t >= 0.0 && text_instr.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_instr.tStart = t;  // (not accounting for frame time here)
    text_instr.frameNStart = frameN;  // exact frame index
    text_instr.setAutoDraw(true);
  }

  
  // *key_resp_instr* updates
  if (t >= 5 && key_resp_instr.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_instr.tStart = t;  // (not accounting for frame time here)
    key_resp_instr.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_instr.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_instr.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_instr.clearEvents(); });
  }

  if (key_resp_instr.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp_instr.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_instr.keys = theseKeys[0].name;  // just the last key pressed
      key_resp_instr.rt = theseKeys[0].rt;
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
  InstructionsComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
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
  InstructionsComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('key_resp_instr.keys', key_resp_instr.keys);
  if (typeof key_resp_instr.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_instr.rt', key_resp_instr.rt);
      routineTimer.reset();
      }
  
  key_resp_instr.stop();
  // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var trials_short;
var currentLoop;
var trialIterator;
function trials_shortLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_short = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'trials_short_delay3.xlsx',
    seed: undefined, name: 'trials_short'});
  psychoJS.experiment.addLoop(trials_short); // add the loop to the experiment
  currentLoop = trials_short;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = trials_short[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisTrials_short = result.value;
    thisScheduler.add(importConditions(trials_short));
    thisScheduler.add(delay_shortRoutineBegin);
    thisScheduler.add(delay_shortRoutineEachFrame);
    thisScheduler.add(delay_shortRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function trials_shortLoopEnd() {
  psychoJS.experiment.removeLoop(trials_short);

  return Scheduler.Event.NEXT;
}

var trials_inter;
function trials_interLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_inter = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'trials_inter_delay3.xlsx',
    seed: undefined, name: 'trials_inter'});
  psychoJS.experiment.addLoop(trials_inter); // add the loop to the experiment
  currentLoop = trials_inter;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = trials_inter[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisTrials_inter = result.value;
    thisScheduler.add(importConditions(trials_inter));
    thisScheduler.add(delay_intermediateRoutineBegin);
    thisScheduler.add(delay_intermediateRoutineEachFrame);
    thisScheduler.add(delay_intermediateRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function trials_interLoopEnd() {
  psychoJS.experiment.removeLoop(trials_inter);

  return Scheduler.Event.NEXT;
}

var trials_long;
function trials_longLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_long = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'trials_long_delay3.xlsx',
    seed: undefined, name: 'trials_long'});
  psychoJS.experiment.addLoop(trials_long); // add the loop to the experiment
  currentLoop = trials_long;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = trials_long[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisTrials_long = result.value;
    thisScheduler.add(importConditions(trials_long));
    thisScheduler.add(delay_longRoutineBegin);
    thisScheduler.add(delay_longRoutineEachFrame);
    thisScheduler.add(delay_longRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function trials_longLoopEnd() {
  psychoJS.experiment.removeLoop(trials_long);

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
  pos0.setFillColor(new util.Color([Color0_r, Color0_g, Color0_b]));
  pos0.setLineColor(new util.Color([Color0_r, Color0_g, Color0_b]));
  pos45.setFillColor(new util.Color([Color45_r, Color45_g, Color45_b]));
  pos45.setLineColor(new util.Color([Color45_r, Color45_g, Color45_b]));
  pos90.setFillColor(new util.Color([Color90_r, Color90_g, Color90_b]));
  pos90.setLineColor(new util.Color([Color90_r, Color90_g, Color90_b]));
  pos135.setFillColor(new util.Color([Color135_r, Color135_g, Color135_b]));
  pos135.setLineColor(new util.Color([Color135_r, Color135_g, Color135_b]));
  pos180.setFillColor(new util.Color([Color180_r, Color180_g, Color180_b]));
  pos180.setLineColor(new util.Color([Color180_r, Color180_g, Color180_b]));
  pos225.setFillColor(new util.Color([Color225_r, Color225_g, Color225_b]));
  pos225.setLineColor(new util.Color([Color225_r, Color225_g, Color225_b]));
  pos270.setFillColor(new util.Color([Color270_r, Color270_g, Color270_b]));
  pos270.setLineColor(new util.Color([Color270_r, Color270_g, Color270_b]));
  pos315.setFillColor(new util.Color([Color315_r, Color315_g, Color315_b]));
  pos315.setLineColor(new util.Color([Color315_r, Color315_g, Color315_b]));
  response.setFillColor(new util.Color([Cueresp_r, Cueresp_g, Cueresp_b]));
  response.setLineColor(new util.Color([Cueresp_r, Cueresp_g, Cueresp_b]));
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
  delay_shortComponents.push(cross_short);
  
  delay_shortComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
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
  if (t >= 6 && response.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    response.tStart = t;  // (not accounting for frame time here)
    response.frameNStart = frameN;  // exact frame index
    response.setAutoDraw(true);
  }

  // *mouse* updates
  if (t >= 6 && mouse.status === PsychoJS.Status.NOT_STARTED) {
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
  
  // *cross_short* updates
  if (t >= 0 && cross_short.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    cross_short.tStart = t;  // (not accounting for frame time here)
    cross_short.frameNStart = frameN;  // exact frame index
    cross_short.setAutoDraw(true);
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
  delay_shortComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
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
  delay_shortComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
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

var delay_intermediateComponents;
function delay_intermediateRoutineBegin() {
  //------Prepare to start Routine 'delay_intermediate'-------
  t = 0;
  delay_intermediateClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  pos0_2.setFillColor(new util.Color([Color0_r, Color0_g, Color0_b]));
  pos0_2.setLineColor(new util.Color([Color0_r, Color0_g, Color0_b]));
  pos45_2.setFillColor(new util.Color([Color45_r, Color45_g, Color45_b]));
  pos45_2.setLineColor(new util.Color([Color45_r, Color45_g, Color45_b]));
  pos90_2.setFillColor(new util.Color([Color90_r, Color90_g, Color90_b]));
  pos90_2.setLineColor(new util.Color([Color90_r, Color90_g, Color90_b]));
  pos135_2.setFillColor(new util.Color([Color135_r, Color135_g, Color135_b]));
  pos135_2.setLineColor(new util.Color([Color135_r, Color135_g, Color135_b]));
  pos180_2.setFillColor(new util.Color([Color180_r, Color180_g, Color180_b]));
  pos180_2.setLineColor(new util.Color([Color180_r, Color180_g, Color180_b]));
  pos225_2.setFillColor(new util.Color([Color225_r, Color225_g, Color225_b]));
  pos225_2.setLineColor(new util.Color([Color225_r, Color225_g, Color225_b]));
  pos270_2.setFillColor(new util.Color([Color270_r, Color270_g, Color270_b]));
  pos270_2.setLineColor(new util.Color([Color270_r, Color270_g, Color270_b]));
  pos315_2.setFillColor(new util.Color([Color315_r, Color315_g, Color315_b]));
  pos315_2.setLineColor(new util.Color([Color315_r, Color315_g, Color315_b]));
  response_2.setFillColor(new util.Color([Cueresp_r, Cueresp_g, Cueresp_b]));
  response_2.setLineColor(new util.Color([Cueresp_r, Cueresp_g, Cueresp_b]));
  // setup some python lists for storing info about the mouse_2
  gotValidClick = false; // until a click is received
  // keep track of which components have finished
  delay_intermediateComponents = [];
  delay_intermediateComponents.push(pos0_2);
  delay_intermediateComponents.push(pos45_2);
  delay_intermediateComponents.push(pos90_2);
  delay_intermediateComponents.push(pos135_2);
  delay_intermediateComponents.push(pos180_2);
  delay_intermediateComponents.push(pos225_2);
  delay_intermediateComponents.push(pos270_2);
  delay_intermediateComponents.push(pos315_2);
  delay_intermediateComponents.push(response_2);
  delay_intermediateComponents.push(mouse_2);
  delay_intermediateComponents.push(cross_inter);
  
  delay_intermediateComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function delay_intermediateRoutineEachFrame() {
  //------Loop for each frame of Routine 'delay_intermediate'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = delay_intermediateClock.getTime();
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
  if (t >= 9 && response_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    response_2.tStart = t;  // (not accounting for frame time here)
    response_2.frameNStart = frameN;  // exact frame index
    response_2.setAutoDraw(true);
  }

  // *mouse_2* updates
  if (t >= 9 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
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
  
  // *cross_inter* updates
  if (t >= 0.0 && cross_inter.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    cross_inter.tStart = t;  // (not accounting for frame time here)
    cross_inter.frameNStart = frameN;  // exact frame index
    cross_inter.setAutoDraw(true);
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
  delay_intermediateComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function delay_intermediateRoutineEnd() {
  //------Ending Routine 'delay_intermediate'-------
  delay_intermediateComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // store data for thisExp (ExperimentHandler)
  const xys = mouse_2.getPos();
  const buttons = mouse_2.getPressed();
  psychoJS.experiment.addData('mouse_2.x', xys[0]);
  psychoJS.experiment.addData('mouse_2.y', xys[1]);
  psychoJS.experiment.addData('mouse_2.leftButton', buttons[0]);
  psychoJS.experiment.addData('mouse_2.midButton', buttons[1]);
  psychoJS.experiment.addData('mouse_2.rightButton', buttons[2]);
  // the Routine "delay_intermediate" was not non-slip safe, so reset the non-slip timer
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
  pos0_3.setFillColor(new util.Color([Color0_r, Color0_g, Color0_b]));
  pos0_3.setLineColor(new util.Color([Color0_r, Color0_g, Color0_b]));
  pos45_3.setFillColor(new util.Color([Color45_r, Color45_g, Color45_b]));
  pos45_3.setLineColor(new util.Color([Color45_r, Color45_g, Color45_b]));
  pos90_3.setFillColor(new util.Color([Color90_r, Color90_g, Color90_b]));
  pos90_3.setLineColor(new util.Color([Color90_r, Color90_g, Color90_b]));
  pos135_3.setFillColor(new util.Color([Color135_r, Color135_g, Color135_b]));
  pos135_3.setLineColor(new util.Color([Color135_r, Color135_g, Color135_b]));
  pos180_3.setFillColor(new util.Color([Color180_r, Color180_g, Color180_b]));
  pos180_3.setLineColor(new util.Color([Color180_r, Color180_g, Color180_b]));
  pos225_3.setFillColor(new util.Color([Color225_r, Color225_g, Color225_b]));
  pos225_3.setLineColor(new util.Color([Color225_r, Color225_g, Color225_b]));
  pos270_3.setFillColor(new util.Color([Color270_r, Color270_g, Color270_b]));
  pos270_3.setLineColor(new util.Color([Color270_r, Color270_g, Color270_b]));
  pos315_3.setFillColor(new util.Color([Color315_r, Color315_g, Color315_b]));
  pos315_3.setLineColor(new util.Color([Color315_r, Color315_g, Color315_b]));
  response_3.setFillColor(new util.Color([Cueresp_r, Cueresp_g, Cueresp_b]));
  response_3.setLineColor(new util.Color([Cueresp_r, Cueresp_g, Cueresp_b]));
  // setup some python lists for storing info about the mouse_3
  // current position of the mouse:
  mouse_3.x = [];
  mouse_3.y = [];
  mouse_3.leftButton = [];
  mouse_3.midButton = [];
  mouse_3.rightButton = [];
  mouse_3.time = [];
  gotValidClick = false; // until a click is received
  // keep track of which components have finished
  delay_longComponents = [];
  delay_longComponents.push(pos0_3);
  delay_longComponents.push(pos45_3);
  delay_longComponents.push(pos90_3);
  delay_longComponents.push(pos135_3);
  delay_longComponents.push(pos180_3);
  delay_longComponents.push(pos225_3);
  delay_longComponents.push(pos270_3);
  delay_longComponents.push(pos315_3);
  delay_longComponents.push(response_3);
  delay_longComponents.push(mouse_3);
  delay_longComponents.push(cross_long);
  
  delay_longComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function delay_longRoutineEachFrame() {
  //------Loop for each frame of Routine 'delay_long'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = delay_longClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *pos0_3* updates
  if (t >= 0.0 && pos0_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos0_3.tStart = t;  // (not accounting for frame time here)
    pos0_3.frameNStart = frameN;  // exact frame index
    pos0_3.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos0_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos0_3.setAutoDraw(false);
  }
  
  // *pos45_3* updates
  if (t >= 0.0 && pos45_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos45_3.tStart = t;  // (not accounting for frame time here)
    pos45_3.frameNStart = frameN;  // exact frame index
    pos45_3.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos45_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos45_3.setAutoDraw(false);
  }
  
  // *pos90_3* updates
  if (t >= 0.0 && pos90_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos90_3.tStart = t;  // (not accounting for frame time here)
    pos90_3.frameNStart = frameN;  // exact frame index
    pos90_3.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos90_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos90_3.setAutoDraw(false);
  }
  
  // *pos135_3* updates
  if (t >= 0.0 && pos135_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos135_3.tStart = t;  // (not accounting for frame time here)
    pos135_3.frameNStart = frameN;  // exact frame index
    pos135_3.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos135_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos135_3.setAutoDraw(false);
  }
  
  // *pos180_3* updates
  if (t >= 0.0 && pos180_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos180_3.tStart = t;  // (not accounting for frame time here)
    pos180_3.frameNStart = frameN;  // exact frame index
    pos180_3.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos180_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos180_3.setAutoDraw(false);
  }
  
  // *pos225_3* updates
  if (t >= 0.0 && pos225_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos225_3.tStart = t;  // (not accounting for frame time here)
    pos225_3.frameNStart = frameN;  // exact frame index
    pos225_3.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos225_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos225_3.setAutoDraw(false);
  }
  
  // *pos270_3* updates
  if (t >= 0.0 && pos270_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos270_3.tStart = t;  // (not accounting for frame time here)
    pos270_3.frameNStart = frameN;  // exact frame index
    pos270_3.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos270_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos270_3.setAutoDraw(false);
  }
  
  // *pos315_3* updates
  if (t >= 0.0 && pos315_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pos315_3.tStart = t;  // (not accounting for frame time here)
    pos315_3.frameNStart = frameN;  // exact frame index
    pos315_3.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (pos315_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    pos315_3.setAutoDraw(false);
  }
  
  // *response_3* updates
  if (t >= 12 && response_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    response_3.tStart = t;  // (not accounting for frame time here)
    response_3.frameNStart = frameN;  // exact frame index
    response_3.setAutoDraw(true);
  }

  // *mouse_3* updates
  if (t >= 12 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    mouse_3.tStart = t;  // (not accounting for frame time here)
    mouse_3.frameNStart = frameN;  // exact frame index
    mouse_3.status = PsychoJS.Status.STARTED;
    prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
    }
  if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
    let buttons = mouse_3.getPressed();
    if (!buttons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
      prevButtonState = buttons;
      if (buttons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
        const xys = mouse_3.getPos();
        mouse_3.x.push(xys[0]);
        mouse_3.y.push(xys[1]);
        mouse_3.leftButton.push(buttons[0]);
        mouse_3.midButton.push(buttons[1]);
        mouse_3.rightButton.push(buttons[2]);
        mouse_3.time.push(globalClock.getTime());
        // abort routine on response
        continueRoutine = false;
      }
    }
  }
  
  // *cross_long* updates
  if (t >= 0 && cross_long.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    cross_long.tStart = t;  // (not accounting for frame time here)
    cross_long.frameNStart = frameN;  // exact frame index
    cross_long.setAutoDraw(true);
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
  delay_longComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
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
  delay_longComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // store data for thisExp (ExperimentHandler)
  if (mouse_3.x) {  psychoJS.experiment.addData('mouse_3.x', mouse_3.x[0])};
  if (mouse_3.y) {  psychoJS.experiment.addData('mouse_3.y', mouse_3.y[0])};
  if (mouse_3.leftButton) {  psychoJS.experiment.addData('mouse_3.leftButton', mouse_3.leftButton[0])};
  if (mouse_3.midButton) {  psychoJS.experiment.addData('mouse_3.midButton', mouse_3.midButton[0])};
  if (mouse_3.rightButton) {  psychoJS.experiment.addData('mouse_3.rightButton', mouse_3.rightButton[0])};
  if (mouse_3.time) {  psychoJS.experiment.addData('mouse_3.time', mouse_3.time[0])};
  
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
  final_key.keys = undefined;
  final_key.rt = undefined;
  // keep track of which components have finished
  feedbackComponents = [];
  feedbackComponents.push(final_text);
  feedbackComponents.push(final_key);
  
  feedbackComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function feedbackRoutineEachFrame() {
  //------Loop for each frame of Routine 'feedback'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = feedbackClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *final_text* updates
  if (t >= 0.0 && final_text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    final_text.tStart = t;  // (not accounting for frame time here)
    final_text.frameNStart = frameN;  // exact frame index
    final_text.setAutoDraw(true);
  }

  
  // *final_key* updates
  if (t >= 2 && final_key.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    final_key.tStart = t;  // (not accounting for frame time here)
    final_key.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { final_key.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { final_key.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { final_key.clearEvents(); });
  }

  if (final_key.status === PsychoJS.Status.STARTED) {
    let theseKeys = final_key.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      final_key.keys = theseKeys[0].name;  // just the last key pressed
      final_key.rt = theseKeys[0].rt;
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
  feedbackComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
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
  feedbackComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('final_key.keys', final_key.keys);
  if (typeof final_key.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('final_key.rt', final_key.rt);
      routineTimer.reset();
      }
  
  final_key.stop();
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

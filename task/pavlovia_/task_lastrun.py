#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v3.2.3),
    on abril 09, 2021, at 15:08
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '3.2.3'
expName = 'working memory'  # from the Builder filename that created this script
expInfo = {'participant': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\David\\Documents\\GitHub\\outreach_wm\\task\\pavlovia_\\task_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1920, 1080], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Instructions"
InstructionsClock = core.Clock()
text_instr = visual.TextStim(win=win, name='text_instr',
    text='¡Bienvenido!\n\nEn este test de working memory tendrás que memorizar la posición de los diferentes colores.\n\nDespués de memorizarlos deberás hacer click en la posición del color que te indiquemos (el color aparecerá encima de la curz central acabado el tiempo de memorización).\n\nAunque no estés seguro, arriésgate!\n\nEl número de items a recordar así como el tiempo de memorización irán variando para hacerlo más complicado, ¡no te asustes!\n\nLa durada total es de entre 10-15min\n\nCuando lo tengas claro, pulsa  "space"para empezar.',
    font='Calibri',
    pos=(0, 0.025), height=0.04, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_instr = keyboard.Keyboard()

# Initialize components for Routine "delay_short"
delay_shortClock = core.Clock()
pos0 = visual.Rect(
    win=win, name='pos0',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=90, pos=(0.4, 0),
    lineWidth=0.005, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)
pos45 = visual.Rect(
    win=win, name='pos45',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(0.25, 0.25),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
pos90 = visual.Rect(
    win=win, name='pos90',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(0, 0.4),
    lineWidth=0.005, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-2.0, interpolate=True)
pos135 = visual.Rect(
    win=win, name='pos135',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(-0.25, 0.25),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-3.0, interpolate=True)
pos180 = visual.Rect(
    win=win, name='pos180',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(-0.4, 0),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-4.0, interpolate=True)
pos225 = visual.Rect(
    win=win, name='pos225',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(-0.25, -0.25),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-5.0, interpolate=True)
pos270 = visual.Rect(
    win=win, name='pos270',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(0, -0.4),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-6.0, interpolate=True)
pos315 = visual.Rect(
    win=win, name='pos315',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(0.25, -0.25),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-7.0, interpolate=True)
response = visual.Rect(
    win=win, name='response',
    width=(0.1,0.1)[0], height=(0.1,0.1)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-8.0, interpolate=True)
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()
cross_short = visual.TextStim(win=win, name='cross_short',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-10.0);

# Initialize components for Routine "delay_intermediate"
delay_intermediateClock = core.Clock()
pos0_2 = visual.Rect(
    win=win, name='pos0_2',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=90, pos=(0.4, 0),
    lineWidth=0.005, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)
pos45_2 = visual.Rect(
    win=win, name='pos45_2',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(0.25, 0.25),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
pos90_2 = visual.Rect(
    win=win, name='pos90_2',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(0, 0.4),
    lineWidth=0.005, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-2.0, interpolate=True)
pos135_2 = visual.Rect(
    win=win, name='pos135_2',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(-0.25, 0.25),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-3.0, interpolate=True)
pos180_2 = visual.Rect(
    win=win, name='pos180_2',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(-0.4, 0),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-4.0, interpolate=True)
pos225_2 = visual.Rect(
    win=win, name='pos225_2',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(-0.25, -0.25),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-5.0, interpolate=True)
pos270_2 = visual.Rect(
    win=win, name='pos270_2',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(0, -0.4),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-6.0, interpolate=True)
pos315_2 = visual.Rect(
    win=win, name='pos315_2',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(0.25, -0.25),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-7.0, interpolate=True)
response_2 = visual.Rect(
    win=win, name='response_2',
    width=(0.1,0.1)[0], height=(0.1,0.1)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-8.0, interpolate=True)
mouse_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_2.mouseClock = core.Clock()
cross_inter = visual.TextStim(win=win, name='cross_inter',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-10.0);

# Initialize components for Routine "delay_long"
delay_longClock = core.Clock()
pos0_3 = visual.Rect(
    win=win, name='pos0_3',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=90, pos=(0.4, 0),
    lineWidth=0.005, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)
pos45_3 = visual.Rect(
    win=win, name='pos45_3',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(0.25, 0.25),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
pos90_3 = visual.Rect(
    win=win, name='pos90_3',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(0, 0.4),
    lineWidth=0.005, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-2.0, interpolate=True)
pos135_3 = visual.Rect(
    win=win, name='pos135_3',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(-0.25, 0.25),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-3.0, interpolate=True)
pos180_3 = visual.Rect(
    win=win, name='pos180_3',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(-0.4, 0),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-4.0, interpolate=True)
pos225_3 = visual.Rect(
    win=win, name='pos225_3',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(-0.25, -0.25),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-5.0, interpolate=True)
pos270_3 = visual.Rect(
    win=win, name='pos270_3',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(0, -0.4),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-6.0, interpolate=True)
pos315_3 = visual.Rect(
    win=win, name='pos315_3',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(0.25, -0.25),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-7.0, interpolate=True)
response_3 = visual.Rect(
    win=win, name='response_3',
    width=(0.1,0.1)[0], height=(0.1,0.1)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-8.0, interpolate=True)
mouse_3 = event.Mouse(win=win)
x, y = [None, None]
mouse_3.mouseClock = core.Clock()
cross_long = visual.TextStim(win=win, name='cross_long',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-10.0);

# Initialize components for Routine "feedback"
feedbackClock = core.Clock()
final_text = visual.TextStim(win=win, name='final_text',
    text='¡Muchas gracias por participar!\n\n\nPara salir, pulsa "space"\n',
    font='Calibri',
    pos=(0, 0), height=0.025, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
final_key = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Instructions"-------
# update component parameters for each repeat
key_resp_instr.keys = []
key_resp_instr.rt = []
# keep track of which components have finished
InstructionsComponents = [text_instr, key_resp_instr]
for thisComponent in InstructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
InstructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1
continueRoutine = True

# -------Run Routine "Instructions"-------
while continueRoutine:
    # get current time
    t = InstructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=InstructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_instr* updates
    if text_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_instr.frameNStart = frameN  # exact frame index
        text_instr.tStart = t  # local t and not account for scr refresh
        text_instr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_instr, 'tStartRefresh')  # time at next scr refresh
        text_instr.setAutoDraw(True)
    
    # *key_resp_instr* updates
    waitOnFlip = False
    if key_resp_instr.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
        # keep track of start time/frame for later
        key_resp_instr.frameNStart = frameN  # exact frame index
        key_resp_instr.tStart = t  # local t and not account for scr refresh
        key_resp_instr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_instr, 'tStartRefresh')  # time at next scr refresh
        key_resp_instr.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_instr.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_instr.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_instr.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_instr.getKeys(keyList=['space'], waitRelease=False)
        if len(theseKeys):
            theseKeys = theseKeys[0]  # at least one key was pressed
            
            # check for quit:
            if "escape" == theseKeys:
                endExpNow = True
            key_resp_instr.keys = theseKeys.name  # just the last key pressed
            key_resp_instr.rt = theseKeys.rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in InstructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instructions"-------
for thisComponent in InstructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_instr.started', text_instr.tStartRefresh)
thisExp.addData('text_instr.stopped', text_instr.tStopRefresh)
# check responses
if key_resp_instr.keys in ['', [], None]:  # No response was made
    key_resp_instr.keys = None
thisExp.addData('key_resp_instr.keys',key_resp_instr.keys)
if key_resp_instr.keys != None:  # we had a response
    thisExp.addData('key_resp_instr.rt', key_resp_instr.rt)
thisExp.addData('key_resp_instr.started', key_resp_instr.tStartRefresh)
thisExp.addData('key_resp_instr.stopped', key_resp_instr.tStopRefresh)
thisExp.nextEntry()
# the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_short = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('trials_short_delay3.xlsx'),
    seed=None, name='trials_short')
thisExp.addLoop(trials_short)  # add the loop to the experiment
thisTrials_short = trials_short.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_short.rgb)
if thisTrials_short != None:
    for paramName in thisTrials_short:
        exec('{} = thisTrials_short[paramName]'.format(paramName))

for thisTrials_short in trials_short:
    currentLoop = trials_short
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_short.rgb)
    if thisTrials_short != None:
        for paramName in thisTrials_short:
            exec('{} = thisTrials_short[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "delay_short"-------
    # update component parameters for each repeat
    pos0.setFillColor([Color0_r, Color0_g, Color0_b])
    pos0.setLineColor([Color0_r, Color0_g, Color0_b])
    pos45.setFillColor([Color45_r, Color45_g, Color45_b])
    pos45.setLineColor([Color45_r, Color45_g, Color45_b])
    pos90.setFillColor([Color90_r, Color90_g, Color90_b])
    pos90.setLineColor([Color90_r, Color90_g, Color90_b])
    pos135.setFillColor([Color135_r, Color135_g, Color135_b])
    pos135.setLineColor([Color135_r, Color135_g, Color135_b])
    pos180.setFillColor([Color180_r, Color180_g, Color180_b])
    pos180.setLineColor([Color180_r, Color180_g, Color180_b])
    pos225.setFillColor([Color225_r, Color225_g, Color225_b])
    pos225.setLineColor([Color225_r, Color225_g, Color225_b])
    pos270.setFillColor([Color270_r, Color270_g, Color270_b])
    pos270.setLineColor([Color270_r, Color270_g, Color270_b])
    pos315.setFillColor([Color315_r, Color315_g, Color315_b])
    pos315.setLineColor([Color315_r, Color315_g, Color315_b])
    response.setFillColor([Cueresp_r, Cueresp_g, Cueresp_b])
    response.setLineColor([Cueresp_r, Cueresp_g, Cueresp_b])
    # setup some python lists for storing info about the mouse
    mouse.x = []
    mouse.y = []
    mouse.leftButton = []
    mouse.midButton = []
    mouse.rightButton = []
    mouse.time = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    delay_shortComponents = [pos0, pos45, pos90, pos135, pos180, pos225, pos270, pos315, response, mouse, cross_short]
    for thisComponent in delay_shortComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    delay_shortClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "delay_short"-------
    while continueRoutine:
        # get current time
        t = delay_shortClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=delay_shortClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *pos0* updates
        if pos0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos0.frameNStart = frameN  # exact frame index
            pos0.tStart = t  # local t and not account for scr refresh
            pos0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos0, 'tStartRefresh')  # time at next scr refresh
            pos0.setAutoDraw(True)
        if pos0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos0.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos0.tStop = t  # not accounting for scr refresh
                pos0.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos0, 'tStopRefresh')  # time at next scr refresh
                pos0.setAutoDraw(False)
        
        # *pos45* updates
        if pos45.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos45.frameNStart = frameN  # exact frame index
            pos45.tStart = t  # local t and not account for scr refresh
            pos45.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos45, 'tStartRefresh')  # time at next scr refresh
            pos45.setAutoDraw(True)
        if pos45.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos45.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos45.tStop = t  # not accounting for scr refresh
                pos45.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos45, 'tStopRefresh')  # time at next scr refresh
                pos45.setAutoDraw(False)
        
        # *pos90* updates
        if pos90.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos90.frameNStart = frameN  # exact frame index
            pos90.tStart = t  # local t and not account for scr refresh
            pos90.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos90, 'tStartRefresh')  # time at next scr refresh
            pos90.setAutoDraw(True)
        if pos90.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos90.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos90.tStop = t  # not accounting for scr refresh
                pos90.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos90, 'tStopRefresh')  # time at next scr refresh
                pos90.setAutoDraw(False)
        
        # *pos135* updates
        if pos135.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos135.frameNStart = frameN  # exact frame index
            pos135.tStart = t  # local t and not account for scr refresh
            pos135.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos135, 'tStartRefresh')  # time at next scr refresh
            pos135.setAutoDraw(True)
        if pos135.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos135.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos135.tStop = t  # not accounting for scr refresh
                pos135.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos135, 'tStopRefresh')  # time at next scr refresh
                pos135.setAutoDraw(False)
        
        # *pos180* updates
        if pos180.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos180.frameNStart = frameN  # exact frame index
            pos180.tStart = t  # local t and not account for scr refresh
            pos180.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos180, 'tStartRefresh')  # time at next scr refresh
            pos180.setAutoDraw(True)
        if pos180.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos180.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos180.tStop = t  # not accounting for scr refresh
                pos180.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos180, 'tStopRefresh')  # time at next scr refresh
                pos180.setAutoDraw(False)
        
        # *pos225* updates
        if pos225.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos225.frameNStart = frameN  # exact frame index
            pos225.tStart = t  # local t and not account for scr refresh
            pos225.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos225, 'tStartRefresh')  # time at next scr refresh
            pos225.setAutoDraw(True)
        if pos225.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos225.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos225.tStop = t  # not accounting for scr refresh
                pos225.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos225, 'tStopRefresh')  # time at next scr refresh
                pos225.setAutoDraw(False)
        
        # *pos270* updates
        if pos270.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos270.frameNStart = frameN  # exact frame index
            pos270.tStart = t  # local t and not account for scr refresh
            pos270.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos270, 'tStartRefresh')  # time at next scr refresh
            pos270.setAutoDraw(True)
        if pos270.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos270.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos270.tStop = t  # not accounting for scr refresh
                pos270.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos270, 'tStopRefresh')  # time at next scr refresh
                pos270.setAutoDraw(False)
        
        # *pos315* updates
        if pos315.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos315.frameNStart = frameN  # exact frame index
            pos315.tStart = t  # local t and not account for scr refresh
            pos315.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos315, 'tStartRefresh')  # time at next scr refresh
            pos315.setAutoDraw(True)
        if pos315.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos315.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos315.tStop = t  # not accounting for scr refresh
                pos315.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos315, 'tStopRefresh')  # time at next scr refresh
                pos315.setAutoDraw(False)
        
        # *response* updates
        if response.status == NOT_STARTED and tThisFlip >= 6-frameTolerance:
            # keep track of start time/frame for later
            response.frameNStart = frameN  # exact frame index
            response.tStart = t  # local t and not account for scr refresh
            response.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response, 'tStartRefresh')  # time at next scr refresh
            response.setAutoDraw(True)
        # *mouse* updates
        if mouse.status == NOT_STARTED and t >= 6-frameTolerance:
            # keep track of start time/frame for later
            mouse.frameNStart = frameN  # exact frame index
            mouse.tStart = t  # local t and not account for scr refresh
            mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
            mouse.status = STARTED
            prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
        if mouse.status == STARTED:  # only update if started and not finished!
            buttons = mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    x, y = mouse.getPos()
                    mouse.x.append(x)
                    mouse.y.append(y)
                    buttons = mouse.getPressed()
                    mouse.leftButton.append(buttons[0])
                    mouse.midButton.append(buttons[1])
                    mouse.rightButton.append(buttons[2])
                    mouse.time.append(globalClock.getTime())
                    # abort routine on response
                    continueRoutine = False
        
        # *cross_short* updates
        if cross_short.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            cross_short.frameNStart = frameN  # exact frame index
            cross_short.tStart = t  # local t and not account for scr refresh
            cross_short.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cross_short, 'tStartRefresh')  # time at next scr refresh
            cross_short.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in delay_shortComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "delay_short"-------
    for thisComponent in delay_shortComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_short.addData('pos0.started', pos0.tStartRefresh)
    trials_short.addData('pos0.stopped', pos0.tStopRefresh)
    trials_short.addData('pos45.started', pos45.tStartRefresh)
    trials_short.addData('pos45.stopped', pos45.tStopRefresh)
    trials_short.addData('pos90.started', pos90.tStartRefresh)
    trials_short.addData('pos90.stopped', pos90.tStopRefresh)
    trials_short.addData('pos135.started', pos135.tStartRefresh)
    trials_short.addData('pos135.stopped', pos135.tStopRefresh)
    trials_short.addData('pos180.started', pos180.tStartRefresh)
    trials_short.addData('pos180.stopped', pos180.tStopRefresh)
    trials_short.addData('pos225.started', pos225.tStartRefresh)
    trials_short.addData('pos225.stopped', pos225.tStopRefresh)
    trials_short.addData('pos270.started', pos270.tStartRefresh)
    trials_short.addData('pos270.stopped', pos270.tStopRefresh)
    trials_short.addData('pos315.started', pos315.tStartRefresh)
    trials_short.addData('pos315.stopped', pos315.tStopRefresh)
    trials_short.addData('response.started', response.tStartRefresh)
    trials_short.addData('response.stopped', response.tStopRefresh)
    # store data for trials_short (TrialHandler)
    if len(mouse.x): trials_short.addData('mouse.x', mouse.x[0])
    if len(mouse.y): trials_short.addData('mouse.y', mouse.y[0])
    if len(mouse.leftButton): trials_short.addData('mouse.leftButton', mouse.leftButton[0])
    if len(mouse.midButton): trials_short.addData('mouse.midButton', mouse.midButton[0])
    if len(mouse.rightButton): trials_short.addData('mouse.rightButton', mouse.rightButton[0])
    if len(mouse.time): trials_short.addData('mouse.time', mouse.time[0])
    trials_short.addData('mouse.started', mouse.tStart)
    trials_short.addData('mouse.stopped', mouse.tStop)
    trials_short.addData('cross_short.started', cross_short.tStartRefresh)
    trials_short.addData('cross_short.stopped', cross_short.tStopRefresh)
    # the Routine "delay_short" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials_short'


# set up handler to look after randomisation of conditions etc
trials_inter = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('trials_inter_delay3.xlsx'),
    seed=None, name='trials_inter')
thisExp.addLoop(trials_inter)  # add the loop to the experiment
thisTrials_inter = trials_inter.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_inter.rgb)
if thisTrials_inter != None:
    for paramName in thisTrials_inter:
        exec('{} = thisTrials_inter[paramName]'.format(paramName))

for thisTrials_inter in trials_inter:
    currentLoop = trials_inter
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_inter.rgb)
    if thisTrials_inter != None:
        for paramName in thisTrials_inter:
            exec('{} = thisTrials_inter[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "delay_intermediate"-------
    # update component parameters for each repeat
    pos0_2.setFillColor([Color0_r, Color0_g, Color0_b])
    pos0_2.setLineColor([Color0_r, Color0_g, Color0_b])
    pos45_2.setFillColor([Color45_r, Color45_g, Color45_b])
    pos45_2.setLineColor([Color45_r, Color45_g, Color45_b])
    pos90_2.setFillColor([Color90_r, Color90_g, Color90_b])
    pos90_2.setLineColor([Color90_r, Color90_g, Color90_b])
    pos135_2.setFillColor([Color135_r, Color135_g, Color135_b])
    pos135_2.setLineColor([Color135_r, Color135_g, Color135_b])
    pos180_2.setFillColor([Color180_r, Color180_g, Color180_b])
    pos180_2.setLineColor([Color180_r, Color180_g, Color180_b])
    pos225_2.setFillColor([Color225_r, Color225_g, Color225_b])
    pos225_2.setLineColor([Color225_r, Color225_g, Color225_b])
    pos270_2.setFillColor([Color270_r, Color270_g, Color270_b])
    pos270_2.setLineColor([Color270_r, Color270_g, Color270_b])
    pos315_2.setFillColor([Color315_r, Color315_g, Color315_b])
    pos315_2.setLineColor([Color315_r, Color315_g, Color315_b])
    response_2.setFillColor([Cueresp_r, Cueresp_g, Cueresp_b])
    response_2.setLineColor([Cueresp_r, Cueresp_g, Cueresp_b])
    # setup some python lists for storing info about the mouse_2
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    delay_intermediateComponents = [pos0_2, pos45_2, pos90_2, pos135_2, pos180_2, pos225_2, pos270_2, pos315_2, response_2, mouse_2, cross_inter]
    for thisComponent in delay_intermediateComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    delay_intermediateClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "delay_intermediate"-------
    while continueRoutine:
        # get current time
        t = delay_intermediateClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=delay_intermediateClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *pos0_2* updates
        if pos0_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos0_2.frameNStart = frameN  # exact frame index
            pos0_2.tStart = t  # local t and not account for scr refresh
            pos0_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos0_2, 'tStartRefresh')  # time at next scr refresh
            pos0_2.setAutoDraw(True)
        if pos0_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos0_2.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos0_2.tStop = t  # not accounting for scr refresh
                pos0_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos0_2, 'tStopRefresh')  # time at next scr refresh
                pos0_2.setAutoDraw(False)
        
        # *pos45_2* updates
        if pos45_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos45_2.frameNStart = frameN  # exact frame index
            pos45_2.tStart = t  # local t and not account for scr refresh
            pos45_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos45_2, 'tStartRefresh')  # time at next scr refresh
            pos45_2.setAutoDraw(True)
        if pos45_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos45_2.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos45_2.tStop = t  # not accounting for scr refresh
                pos45_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos45_2, 'tStopRefresh')  # time at next scr refresh
                pos45_2.setAutoDraw(False)
        
        # *pos90_2* updates
        if pos90_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos90_2.frameNStart = frameN  # exact frame index
            pos90_2.tStart = t  # local t and not account for scr refresh
            pos90_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos90_2, 'tStartRefresh')  # time at next scr refresh
            pos90_2.setAutoDraw(True)
        if pos90_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos90_2.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos90_2.tStop = t  # not accounting for scr refresh
                pos90_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos90_2, 'tStopRefresh')  # time at next scr refresh
                pos90_2.setAutoDraw(False)
        
        # *pos135_2* updates
        if pos135_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos135_2.frameNStart = frameN  # exact frame index
            pos135_2.tStart = t  # local t and not account for scr refresh
            pos135_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos135_2, 'tStartRefresh')  # time at next scr refresh
            pos135_2.setAutoDraw(True)
        if pos135_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos135_2.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos135_2.tStop = t  # not accounting for scr refresh
                pos135_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos135_2, 'tStopRefresh')  # time at next scr refresh
                pos135_2.setAutoDraw(False)
        
        # *pos180_2* updates
        if pos180_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos180_2.frameNStart = frameN  # exact frame index
            pos180_2.tStart = t  # local t and not account for scr refresh
            pos180_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos180_2, 'tStartRefresh')  # time at next scr refresh
            pos180_2.setAutoDraw(True)
        if pos180_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos180_2.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos180_2.tStop = t  # not accounting for scr refresh
                pos180_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos180_2, 'tStopRefresh')  # time at next scr refresh
                pos180_2.setAutoDraw(False)
        
        # *pos225_2* updates
        if pos225_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos225_2.frameNStart = frameN  # exact frame index
            pos225_2.tStart = t  # local t and not account for scr refresh
            pos225_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos225_2, 'tStartRefresh')  # time at next scr refresh
            pos225_2.setAutoDraw(True)
        if pos225_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos225_2.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos225_2.tStop = t  # not accounting for scr refresh
                pos225_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos225_2, 'tStopRefresh')  # time at next scr refresh
                pos225_2.setAutoDraw(False)
        
        # *pos270_2* updates
        if pos270_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos270_2.frameNStart = frameN  # exact frame index
            pos270_2.tStart = t  # local t and not account for scr refresh
            pos270_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos270_2, 'tStartRefresh')  # time at next scr refresh
            pos270_2.setAutoDraw(True)
        if pos270_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos270_2.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos270_2.tStop = t  # not accounting for scr refresh
                pos270_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos270_2, 'tStopRefresh')  # time at next scr refresh
                pos270_2.setAutoDraw(False)
        
        # *pos315_2* updates
        if pos315_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos315_2.frameNStart = frameN  # exact frame index
            pos315_2.tStart = t  # local t and not account for scr refresh
            pos315_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos315_2, 'tStartRefresh')  # time at next scr refresh
            pos315_2.setAutoDraw(True)
        if pos315_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos315_2.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos315_2.tStop = t  # not accounting for scr refresh
                pos315_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos315_2, 'tStopRefresh')  # time at next scr refresh
                pos315_2.setAutoDraw(False)
        
        # *response_2* updates
        if response_2.status == NOT_STARTED and tThisFlip >= 9-frameTolerance:
            # keep track of start time/frame for later
            response_2.frameNStart = frameN  # exact frame index
            response_2.tStart = t  # local t and not account for scr refresh
            response_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response_2, 'tStartRefresh')  # time at next scr refresh
            response_2.setAutoDraw(True)
        # *mouse_2* updates
        if mouse_2.status == NOT_STARTED and t >= 9-frameTolerance:
            # keep track of start time/frame for later
            mouse_2.frameNStart = frameN  # exact frame index
            mouse_2.tStart = t  # local t and not account for scr refresh
            mouse_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_2, 'tStartRefresh')  # time at next scr refresh
            mouse_2.status = STARTED
            mouse_2.mouseClock.reset()
            prevButtonState = mouse_2.getPressed()  # if button is down already this ISN'T a new click
        if mouse_2.status == STARTED:  # only update if started and not finished!
            buttons = mouse_2.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # abort routine on response
                    continueRoutine = False
        
        # *cross_inter* updates
        if cross_inter.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cross_inter.frameNStart = frameN  # exact frame index
            cross_inter.tStart = t  # local t and not account for scr refresh
            cross_inter.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cross_inter, 'tStartRefresh')  # time at next scr refresh
            cross_inter.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in delay_intermediateComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "delay_intermediate"-------
    for thisComponent in delay_intermediateComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_inter.addData('pos0_2.started', pos0_2.tStartRefresh)
    trials_inter.addData('pos0_2.stopped', pos0_2.tStopRefresh)
    trials_inter.addData('pos45_2.started', pos45_2.tStartRefresh)
    trials_inter.addData('pos45_2.stopped', pos45_2.tStopRefresh)
    trials_inter.addData('pos90_2.started', pos90_2.tStartRefresh)
    trials_inter.addData('pos90_2.stopped', pos90_2.tStopRefresh)
    trials_inter.addData('pos135_2.started', pos135_2.tStartRefresh)
    trials_inter.addData('pos135_2.stopped', pos135_2.tStopRefresh)
    trials_inter.addData('pos180_2.started', pos180_2.tStartRefresh)
    trials_inter.addData('pos180_2.stopped', pos180_2.tStopRefresh)
    trials_inter.addData('pos225_2.started', pos225_2.tStartRefresh)
    trials_inter.addData('pos225_2.stopped', pos225_2.tStopRefresh)
    trials_inter.addData('pos270_2.started', pos270_2.tStartRefresh)
    trials_inter.addData('pos270_2.stopped', pos270_2.tStopRefresh)
    trials_inter.addData('pos315_2.started', pos315_2.tStartRefresh)
    trials_inter.addData('pos315_2.stopped', pos315_2.tStopRefresh)
    trials_inter.addData('response_2.started', response_2.tStartRefresh)
    trials_inter.addData('response_2.stopped', response_2.tStopRefresh)
    # store data for trials_inter (TrialHandler)
    x, y = mouse_2.getPos()
    buttons = mouse_2.getPressed()
    trials_inter.addData('mouse_2.x', x)
    trials_inter.addData('mouse_2.y', y)
    trials_inter.addData('mouse_2.leftButton', buttons[0])
    trials_inter.addData('mouse_2.midButton', buttons[1])
    trials_inter.addData('mouse_2.rightButton', buttons[2])
    trials_inter.addData('mouse_2.started', mouse_2.tStart)
    trials_inter.addData('mouse_2.stopped', mouse_2.tStop)
    trials_inter.addData('cross_inter.started', cross_inter.tStartRefresh)
    trials_inter.addData('cross_inter.stopped', cross_inter.tStopRefresh)
    # the Routine "delay_intermediate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials_inter'


# set up handler to look after randomisation of conditions etc
trials_long = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('trials_long_delay3.xlsx'),
    seed=None, name='trials_long')
thisExp.addLoop(trials_long)  # add the loop to the experiment
thisTrials_long = trials_long.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_long.rgb)
if thisTrials_long != None:
    for paramName in thisTrials_long:
        exec('{} = thisTrials_long[paramName]'.format(paramName))

for thisTrials_long in trials_long:
    currentLoop = trials_long
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_long.rgb)
    if thisTrials_long != None:
        for paramName in thisTrials_long:
            exec('{} = thisTrials_long[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "delay_long"-------
    # update component parameters for each repeat
    pos0_3.setFillColor([Color0_r, Color0_g, Color0_b])
    pos0_3.setLineColor([Color0_r, Color0_g, Color0_b])
    pos45_3.setFillColor([Color45_r, Color45_g, Color45_b])
    pos45_3.setLineColor([Color45_r, Color45_g, Color45_b])
    pos90_3.setFillColor([Color90_r, Color90_g, Color90_b])
    pos90_3.setLineColor([Color90_r, Color90_g, Color90_b])
    pos135_3.setFillColor([Color135_r, Color135_g, Color135_b])
    pos135_3.setLineColor([Color135_r, Color135_g, Color135_b])
    pos180_3.setFillColor([Color180_r, Color180_g, Color180_b])
    pos180_3.setLineColor([Color180_r, Color180_g, Color180_b])
    pos225_3.setFillColor([Color225_r, Color225_g, Color225_b])
    pos225_3.setLineColor([Color225_r, Color225_g, Color225_b])
    pos270_3.setFillColor([Color270_r, Color270_g, Color270_b])
    pos270_3.setLineColor([Color270_r, Color270_g, Color270_b])
    pos315_3.setFillColor([Color315_r, Color315_g, Color315_b])
    pos315_3.setLineColor([Color315_r, Color315_g, Color315_b])
    response_3.setFillColor([Cueresp_r, Cueresp_g, Cueresp_b])
    response_3.setLineColor([Cueresp_r, Cueresp_g, Cueresp_b])
    # setup some python lists for storing info about the mouse_3
    mouse_3.x = []
    mouse_3.y = []
    mouse_3.leftButton = []
    mouse_3.midButton = []
    mouse_3.rightButton = []
    mouse_3.time = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    delay_longComponents = [pos0_3, pos45_3, pos90_3, pos135_3, pos180_3, pos225_3, pos270_3, pos315_3, response_3, mouse_3, cross_long]
    for thisComponent in delay_longComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    delay_longClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "delay_long"-------
    while continueRoutine:
        # get current time
        t = delay_longClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=delay_longClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *pos0_3* updates
        if pos0_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos0_3.frameNStart = frameN  # exact frame index
            pos0_3.tStart = t  # local t and not account for scr refresh
            pos0_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos0_3, 'tStartRefresh')  # time at next scr refresh
            pos0_3.setAutoDraw(True)
        if pos0_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos0_3.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos0_3.tStop = t  # not accounting for scr refresh
                pos0_3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos0_3, 'tStopRefresh')  # time at next scr refresh
                pos0_3.setAutoDraw(False)
        
        # *pos45_3* updates
        if pos45_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos45_3.frameNStart = frameN  # exact frame index
            pos45_3.tStart = t  # local t and not account for scr refresh
            pos45_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos45_3, 'tStartRefresh')  # time at next scr refresh
            pos45_3.setAutoDraw(True)
        if pos45_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos45_3.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos45_3.tStop = t  # not accounting for scr refresh
                pos45_3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos45_3, 'tStopRefresh')  # time at next scr refresh
                pos45_3.setAutoDraw(False)
        
        # *pos90_3* updates
        if pos90_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos90_3.frameNStart = frameN  # exact frame index
            pos90_3.tStart = t  # local t and not account for scr refresh
            pos90_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos90_3, 'tStartRefresh')  # time at next scr refresh
            pos90_3.setAutoDraw(True)
        if pos90_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos90_3.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos90_3.tStop = t  # not accounting for scr refresh
                pos90_3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos90_3, 'tStopRefresh')  # time at next scr refresh
                pos90_3.setAutoDraw(False)
        
        # *pos135_3* updates
        if pos135_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos135_3.frameNStart = frameN  # exact frame index
            pos135_3.tStart = t  # local t and not account for scr refresh
            pos135_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos135_3, 'tStartRefresh')  # time at next scr refresh
            pos135_3.setAutoDraw(True)
        if pos135_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos135_3.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos135_3.tStop = t  # not accounting for scr refresh
                pos135_3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos135_3, 'tStopRefresh')  # time at next scr refresh
                pos135_3.setAutoDraw(False)
        
        # *pos180_3* updates
        if pos180_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos180_3.frameNStart = frameN  # exact frame index
            pos180_3.tStart = t  # local t and not account for scr refresh
            pos180_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos180_3, 'tStartRefresh')  # time at next scr refresh
            pos180_3.setAutoDraw(True)
        if pos180_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos180_3.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos180_3.tStop = t  # not accounting for scr refresh
                pos180_3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos180_3, 'tStopRefresh')  # time at next scr refresh
                pos180_3.setAutoDraw(False)
        
        # *pos225_3* updates
        if pos225_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos225_3.frameNStart = frameN  # exact frame index
            pos225_3.tStart = t  # local t and not account for scr refresh
            pos225_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos225_3, 'tStartRefresh')  # time at next scr refresh
            pos225_3.setAutoDraw(True)
        if pos225_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos225_3.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos225_3.tStop = t  # not accounting for scr refresh
                pos225_3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos225_3, 'tStopRefresh')  # time at next scr refresh
                pos225_3.setAutoDraw(False)
        
        # *pos270_3* updates
        if pos270_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos270_3.frameNStart = frameN  # exact frame index
            pos270_3.tStart = t  # local t and not account for scr refresh
            pos270_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos270_3, 'tStartRefresh')  # time at next scr refresh
            pos270_3.setAutoDraw(True)
        if pos270_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos270_3.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos270_3.tStop = t  # not accounting for scr refresh
                pos270_3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos270_3, 'tStopRefresh')  # time at next scr refresh
                pos270_3.setAutoDraw(False)
        
        # *pos315_3* updates
        if pos315_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pos315_3.frameNStart = frameN  # exact frame index
            pos315_3.tStart = t  # local t and not account for scr refresh
            pos315_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pos315_3, 'tStartRefresh')  # time at next scr refresh
            pos315_3.setAutoDraw(True)
        if pos315_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pos315_3.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                pos315_3.tStop = t  # not accounting for scr refresh
                pos315_3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos315_3, 'tStopRefresh')  # time at next scr refresh
                pos315_3.setAutoDraw(False)
        
        # *response_3* updates
        if response_3.status == NOT_STARTED and tThisFlip >= 12-frameTolerance:
            # keep track of start time/frame for later
            response_3.frameNStart = frameN  # exact frame index
            response_3.tStart = t  # local t and not account for scr refresh
            response_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response_3, 'tStartRefresh')  # time at next scr refresh
            response_3.setAutoDraw(True)
        # *mouse_3* updates
        if mouse_3.status == NOT_STARTED and t >= 12-frameTolerance:
            # keep track of start time/frame for later
            mouse_3.frameNStart = frameN  # exact frame index
            mouse_3.tStart = t  # local t and not account for scr refresh
            mouse_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_3, 'tStartRefresh')  # time at next scr refresh
            mouse_3.status = STARTED
            prevButtonState = mouse_3.getPressed()  # if button is down already this ISN'T a new click
        if mouse_3.status == STARTED:  # only update if started and not finished!
            buttons = mouse_3.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    x, y = mouse_3.getPos()
                    mouse_3.x.append(x)
                    mouse_3.y.append(y)
                    buttons = mouse_3.getPressed()
                    mouse_3.leftButton.append(buttons[0])
                    mouse_3.midButton.append(buttons[1])
                    mouse_3.rightButton.append(buttons[2])
                    mouse_3.time.append(globalClock.getTime())
                    # abort routine on response
                    continueRoutine = False
        
        # *cross_long* updates
        if cross_long.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            cross_long.frameNStart = frameN  # exact frame index
            cross_long.tStart = t  # local t and not account for scr refresh
            cross_long.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cross_long, 'tStartRefresh')  # time at next scr refresh
            cross_long.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in delay_longComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "delay_long"-------
    for thisComponent in delay_longComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_long.addData('pos0_3.started', pos0_3.tStartRefresh)
    trials_long.addData('pos0_3.stopped', pos0_3.tStopRefresh)
    trials_long.addData('pos45_3.started', pos45_3.tStartRefresh)
    trials_long.addData('pos45_3.stopped', pos45_3.tStopRefresh)
    trials_long.addData('pos90_3.started', pos90_3.tStartRefresh)
    trials_long.addData('pos90_3.stopped', pos90_3.tStopRefresh)
    trials_long.addData('pos135_3.started', pos135_3.tStartRefresh)
    trials_long.addData('pos135_3.stopped', pos135_3.tStopRefresh)
    trials_long.addData('pos180_3.started', pos180_3.tStartRefresh)
    trials_long.addData('pos180_3.stopped', pos180_3.tStopRefresh)
    trials_long.addData('pos225_3.started', pos225_3.tStartRefresh)
    trials_long.addData('pos225_3.stopped', pos225_3.tStopRefresh)
    trials_long.addData('pos270_3.started', pos270_3.tStartRefresh)
    trials_long.addData('pos270_3.stopped', pos270_3.tStopRefresh)
    trials_long.addData('pos315_3.started', pos315_3.tStartRefresh)
    trials_long.addData('pos315_3.stopped', pos315_3.tStopRefresh)
    trials_long.addData('response_3.started', response_3.tStartRefresh)
    trials_long.addData('response_3.stopped', response_3.tStopRefresh)
    # store data for trials_long (TrialHandler)
    if len(mouse_3.x): trials_long.addData('mouse_3.x', mouse_3.x[0])
    if len(mouse_3.y): trials_long.addData('mouse_3.y', mouse_3.y[0])
    if len(mouse_3.leftButton): trials_long.addData('mouse_3.leftButton', mouse_3.leftButton[0])
    if len(mouse_3.midButton): trials_long.addData('mouse_3.midButton', mouse_3.midButton[0])
    if len(mouse_3.rightButton): trials_long.addData('mouse_3.rightButton', mouse_3.rightButton[0])
    if len(mouse_3.time): trials_long.addData('mouse_3.time', mouse_3.time[0])
    trials_long.addData('mouse_3.started', mouse_3.tStart)
    trials_long.addData('mouse_3.stopped', mouse_3.tStop)
    trials_long.addData('cross_long.started', cross_long.tStartRefresh)
    trials_long.addData('cross_long.stopped', cross_long.tStopRefresh)
    # the Routine "delay_long" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials_long'


# ------Prepare to start Routine "feedback"-------
# update component parameters for each repeat
final_key.keys = []
final_key.rt = []
# keep track of which components have finished
feedbackComponents = [final_text, final_key]
for thisComponent in feedbackComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
feedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1
continueRoutine = True

# -------Run Routine "feedback"-------
while continueRoutine:
    # get current time
    t = feedbackClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=feedbackClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *final_text* updates
    if final_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        final_text.frameNStart = frameN  # exact frame index
        final_text.tStart = t  # local t and not account for scr refresh
        final_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(final_text, 'tStartRefresh')  # time at next scr refresh
        final_text.setAutoDraw(True)
    
    # *final_key* updates
    waitOnFlip = False
    if final_key.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
        # keep track of start time/frame for later
        final_key.frameNStart = frameN  # exact frame index
        final_key.tStart = t  # local t and not account for scr refresh
        final_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(final_key, 'tStartRefresh')  # time at next scr refresh
        final_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(final_key.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(final_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if final_key.status == STARTED and not waitOnFlip:
        theseKeys = final_key.getKeys(keyList=['space'], waitRelease=False)
        if len(theseKeys):
            theseKeys = theseKeys[0]  # at least one key was pressed
            
            # check for quit:
            if "escape" == theseKeys:
                endExpNow = True
            final_key.keys = theseKeys.name  # just the last key pressed
            final_key.rt = theseKeys.rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in feedbackComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "feedback"-------
for thisComponent in feedbackComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('final_text.started', final_text.tStartRefresh)
thisExp.addData('final_text.stopped', final_text.tStopRefresh)
# check responses
if final_key.keys in ['', [], None]:  # No response was made
    final_key.keys = None
thisExp.addData('final_key.keys',final_key.keys)
if final_key.keys != None:  # we had a response
    thisExp.addData('final_key.rt', final_key.rt)
thisExp.addData('final_key.started', final_key.tStartRefresh)
thisExp.addData('final_key.stopped', final_key.tStopRefresh)
thisExp.nextEntry()
# the Routine "feedback" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()

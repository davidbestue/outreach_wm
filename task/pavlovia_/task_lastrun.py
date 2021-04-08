#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v3.2.3),
    on abril 08, 2021, at 17:11
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, hardware
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

# Initialize components for Routine "Instructions_2"
Instructions_2Clock = core.Clock()
text_3 = visual.TextStim(win=win, name='text_3',
    text='¡Bienvenido!\n\nEn este test de working memory tendrás que \nmemorizar la posición de los diferentes colores.\n\n\nEl número de itema a recordar irá variando!\n\n\nPulsa "space"para continuar',
    font='Calibri',
    pos=(-0.25, 0), height=0.025, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_3 = keyboard.Keyboard()

# Initialize components for Routine "trial_2"
trial_2Clock = core.Clock()
pos0 = visual.Polygon(
    win=win, name='pos0',
    edges=100, size=(0.1, 0.1),
    ori=90, pos=(0.5, 0),
    lineWidth=0.005, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)
pos45 = visual.Polygon(
    win=win, name='pos45',
    edges=100, size=(0.1, 0.1),
    ori=0, pos=(0.25, 0.25),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
pos90 = visual.Polygon(
    win=win, name='pos90',
    edges=100, size=(0.1, 0.1),
    ori=0, pos=(0, 0.5),
    lineWidth=0.005, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-2.0, interpolate=True)
pos135 = visual.Polygon(
    win=win, name='pos135',
    edges=100, size=(0.1, 0.1),
    ori=0, pos=(-0.25, 0.25),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-3.0, interpolate=True)
pos180 = visual.Polygon(
    win=win, name='pos180',
    edges=100, size=(0.1, 0.1),
    ori=0, pos=(-0.50, 0),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-4.0, interpolate=True)
pos225 = visual.Polygon(
    win=win, name='pos225',
    edges=100, size=(-0.25, -0.25),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-5.0, interpolate=True)
pos270 = visual.Polygon(
    win=win, name='pos270',
    edges=100, size=(0.1, 0.1),
    ori=0, pos=(0, -0.5),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-6.0, interpolate=True)
pos315 = visual.Polygon(
    win=win, name='pos315',
    edges=100, size=(0.1, 0.1),
    ori=0, pos=(0.25, -0.25),
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-7.0, interpolate=True)
mouse_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_2.mouseClock = core.Clock()

# Initialize components for Routine "feedback"
feedbackClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='¡Muchas gracias por participar!\n\n\nPara salir, pulsa "space"\n',
    font='Calibri',
    pos=(0, 0), height=0.025, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_2 = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Instructions_2"-------
# update component parameters for each repeat
key_resp_3.keys = []
key_resp_3.rt = []
# keep track of which components have finished
Instructions_2Components = [text_3, key_resp_3]
for thisComponent in Instructions_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Instructions_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1
continueRoutine = True

# -------Run Routine "Instructions_2"-------
while continueRoutine:
    # get current time
    t = Instructions_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Instructions_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_3* updates
    if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_3.frameNStart = frameN  # exact frame index
        text_3.tStart = t  # local t and not account for scr refresh
        text_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
        text_3.setAutoDraw(True)
    
    # *key_resp_3* updates
    waitOnFlip = False
    if key_resp_3.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
        # keep track of start time/frame for later
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.tStart = t  # local t and not account for scr refresh
        key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_3.getKeys(keyList=['space'], waitRelease=False)
        if len(theseKeys):
            theseKeys = theseKeys[0]  # at least one key was pressed
            
            # check for quit:
            if "escape" == theseKeys:
                endExpNow = True
            key_resp_3.keys = theseKeys.name  # just the last key pressed
            key_resp_3.rt = theseKeys.rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Instructions_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instructions_2"-------
for thisComponent in Instructions_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_3.started', text_3.tStartRefresh)
thisExp.addData('text_3.stopped', text_3.tStopRefresh)
# check responses
if key_resp_3.keys in ['', [], None]:  # No response was made
    key_resp_3.keys = None
thisExp.addData('key_resp_3.keys',key_resp_3.keys)
if key_resp_3.keys != None:  # we had a response
    thisExp.addData('key_resp_3.rt', key_resp_3.rt)
thisExp.addData('key_resp_3.started', key_resp_3.tStartRefresh)
thisExp.addData('key_resp_3.stopped', key_resp_3.tStopRefresh)
thisExp.nextEntry()
# the Routine "Instructions_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('Trials_.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "trial_2"-------
    # update component parameters for each repeat
    pos0.setFillColor(Color0)
    pos0.setLineColor(Color0)
    pos45.setFillColor(Color45)
    pos45.setLineColor(Color45)
    pos90.setFillColor(Color90)
    pos90.setLineColor(Color90)
    pos135.setFillColor(Color135)
    pos135.setLineColor(Color135)
    pos180.setFillColor(Color180)
    pos180.setLineColor(Color180)
    pos225.setFillColor(Color225)
    pos225.setLineColor(Color225)
    pos270.setFillColor(Color270)
    pos270.setLineColor(Color270)
    pos315.setFillColor(Color315)
    pos315.setLineColor(Color315)
    # setup some python lists for storing info about the mouse_2
    mouse_2.x = []
    mouse_2.y = []
    mouse_2.leftButton = []
    mouse_2.midButton = []
    mouse_2.rightButton = []
    mouse_2.time = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    trial_2Components = [pos0, pos45, pos90, pos135, pos180, pos225, pos270, pos315, mouse_2]
    for thisComponent in trial_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trial_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "trial_2"-------
    while continueRoutine:
        # get current time
        t = trial_2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trial_2Clock)
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
            if tThisFlipGlobal > pos0.tStartRefresh + 2-frameTolerance:
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
            if tThisFlipGlobal > pos45.tStartRefresh + 2-frameTolerance:
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
            if tThisFlipGlobal > pos90.tStartRefresh + 2-frameTolerance:
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
            if tThisFlipGlobal > pos135.tStartRefresh + 2-frameTolerance:
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
            if tThisFlipGlobal > pos180.tStartRefresh + 2-frameTolerance:
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
            if tThisFlipGlobal > pos225.tStartRefresh + 2-frameTolerance:
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
            if tThisFlipGlobal > pos270.tStartRefresh + 2-frameTolerance:
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
            if tThisFlipGlobal > pos315.tStartRefresh + 2-frameTolerance:
                # keep track of stop time/frame for later
                pos315.tStop = t  # not accounting for scr refresh
                pos315.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pos315, 'tStopRefresh')  # time at next scr refresh
                pos315.setAutoDraw(False)
        # *mouse_2* updates
        if mouse_2.status == NOT_STARTED and t >= 1.5-frameTolerance:
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
                    x, y = mouse_2.getPos()
                    mouse_2.x.append(x)
                    mouse_2.y.append(y)
                    buttons = mouse_2.getPressed()
                    mouse_2.leftButton.append(buttons[0])
                    mouse_2.midButton.append(buttons[1])
                    mouse_2.rightButton.append(buttons[2])
                    mouse_2.time.append(mouse_2.mouseClock.getTime())
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trial_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial_2"-------
    for thisComponent in trial_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('pos0.started', pos0.tStartRefresh)
    trials.addData('pos0.stopped', pos0.tStopRefresh)
    trials.addData('pos45.started', pos45.tStartRefresh)
    trials.addData('pos45.stopped', pos45.tStopRefresh)
    trials.addData('pos90.started', pos90.tStartRefresh)
    trials.addData('pos90.stopped', pos90.tStopRefresh)
    trials.addData('pos135.started', pos135.tStartRefresh)
    trials.addData('pos135.stopped', pos135.tStopRefresh)
    trials.addData('pos180.started', pos180.tStartRefresh)
    trials.addData('pos180.stopped', pos180.tStopRefresh)
    trials.addData('pos225.started', pos225.tStartRefresh)
    trials.addData('pos225.stopped', pos225.tStopRefresh)
    trials.addData('pos270.started', pos270.tStartRefresh)
    trials.addData('pos270.stopped', pos270.tStopRefresh)
    trials.addData('pos315.started', pos315.tStartRefresh)
    trials.addData('pos315.stopped', pos315.tStopRefresh)
    # store data for trials (TrialHandler)
    trials.addData('mouse_2.x', mouse_2.x)
    trials.addData('mouse_2.y', mouse_2.y)
    trials.addData('mouse_2.leftButton', mouse_2.leftButton)
    trials.addData('mouse_2.midButton', mouse_2.midButton)
    trials.addData('mouse_2.rightButton', mouse_2.rightButton)
    trials.addData('mouse_2.time', mouse_2.time)
    trials.addData('mouse_2.started', mouse_2.tStart)
    trials.addData('mouse_2.stopped', mouse_2.tStop)
    # the Routine "trial_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials'


# ------Prepare to start Routine "feedback"-------
# update component parameters for each repeat
key_resp_2.keys = []
key_resp_2.rt = []
# keep track of which components have finished
feedbackComponents = [text_2, key_resp_2]
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
    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        text_2.setAutoDraw(True)
    
    # *key_resp_2* updates
    waitOnFlip = False
    if key_resp_2.status == NOT_STARTED and tThisFlip >= 15-frameTolerance:
        # keep track of start time/frame for later
        key_resp_2.frameNStart = frameN  # exact frame index
        key_resp_2.tStart = t  # local t and not account for scr refresh
        key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
        key_resp_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_2.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_2.getKeys(keyList=['space'], waitRelease=False)
        if len(theseKeys):
            theseKeys = theseKeys[0]  # at least one key was pressed
            
            # check for quit:
            if "escape" == theseKeys:
                endExpNow = True
            key_resp_2.keys = theseKeys.name  # just the last key pressed
            key_resp_2.rt = theseKeys.rt
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
thisExp.addData('text_2.started', text_2.tStartRefresh)
thisExp.addData('text_2.stopped', text_2.tStopRefresh)
# check responses
if key_resp_2.keys in ['', [], None]:  # No response was made
    key_resp_2.keys = None
thisExp.addData('key_resp_2.keys',key_resp_2.keys)
if key_resp_2.keys != None:  # we had a response
    thisExp.addData('key_resp_2.rt', key_resp_2.rt)
thisExp.addData('key_resp_2.started', key_resp_2.tStartRefresh)
thisExp.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
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


# -*- coding: utf-8 -*-
"""
@author: David Bestue
"""

import numpy as np
import random
import pandas as pd


### rgb in psychopy goes from -1 (0) to 1 (255)

no_stim = [0,0,0] # grey
c1=[-1,-1,1]  ### dark blue
c2=[-1,1,-1] ### green
c3=[-1,1,1]  ####cyan
c4=[1,-1,-1]  #red
c5=[1,-1,1]  #pink
c6=[1,1,-1]  #yellow
c7=[1,1,1]  #white


pos_colors = [c1,c2,c3,c4,c5,c6,c7]
pos_locs = np.arange(1,9,1)

delay_short=2
delay_long=9

low_load = 3
high_load = 7

trials_each = 8# 6-7min aprox 16 ##12-15 min aprox


##file 1: short delay
outputs_short=[]

for delay in [delay_short, delay_long]:
    outputs_ = []
    for loads in [low_load, high_load]:
        for t in range(trials_each):
            number_grey_pos = 8-loads
            list_grey = [no_stim for i in range(number_grey_pos)]
            list_colors = random.sample(pos_colors,loads) 
            list_trial = list_grey + list_colors 
            #
            random.shuffle(list_trial) 
            #
            pos_locs = np.arange(0,8,1)
            candidate_targets = pos_locs[np.array([list_trial[i] !=[0,0,0] for i in range(8)])   ]  ##locations with color
            target_ = random.choice(list(candidate_targets))
            response_cue = list_trial[target_]
            #
            target_angle = np.arange(0,360,45)[target_]
            #
            output = list_trial + [response_cue] + [target_angle] + [loads] + [delay] + [t]
            outputs_.append(output)

    ###
    trials = pd.DataFrame(outputs_)
    trials.columns=['Color0', 'Color45', 'Color90', 'Color135', 'Color180', 'Color225', 'Color270', 'Color315', 'Cueresp', 'target_angle', 'load', 'delay', 'trial']
    if delay==delay_short:
        trials.to_excel('trials_short_delay.xlsx')
    else:
        trials.to_excel('trials_long_delay.xlsx')






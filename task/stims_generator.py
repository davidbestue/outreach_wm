
# -*- coding: utf-8 -*-
"""
@author: David Bestue
"""

import numpy as np


### rgb in psychopy goes from -1 (0) to 1 (255)

no_stim = [0,0,0] # grey
c1=[-1,-1,1]  ### dark blue
c2=[-1,1,-1] ### green
c3=[-1,1,1]  ####cyan
c4=[1,-1,-1]  #red
c5=[1,-1,1]  #pink
c6=[1,1,-1]  #yellow
c7=[1,1,1]  #white
#c8=[0.5,0.5,0.5]


delay_short=2
delay_long=9

low_load = 3
high_load = 7

trials_each = 15 ##12 min aprox


##file 1: short delay


for loads in [low_load, high_load]:
	for t in range(trials_each):


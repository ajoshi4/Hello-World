import random
from turtle import *
penup()
goto(-150,-150)    
pendown()
for i in range(20):
        penup()
        forward(10)
        pendown()
        for i in range(150):
           forward(i+1)
           left(1)
           pencolor((i)/150, 0.5, (150-i)/150)
           forward(i+2)
           circle(i, i)

           pencolor((i)/300, 0 , (150-i)/300)
           penup()
           right(182)
           pencolor((150-i)/150, 0.5 , (i)/150)
           forward (i+3)
           circle(i, 360-i)
           pendown()
           pencolor((150-i)/300, 1 , (i)/150)
           tracer(False)
        backward(20)
  
done()

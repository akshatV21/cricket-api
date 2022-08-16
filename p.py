import os
from random import randint

for j in range(randint(1, 10)):
    with open('file.txt', 'a') as file:
        file.write('d')
    os.system('git add .')
    os.system('git commit -m "code refactoring"')

os.system('git push')
print("all done")
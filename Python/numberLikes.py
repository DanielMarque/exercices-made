
def likes(names):

    size = len(names)

    if len(names) == 0:
        return "no one likes this"

    if len(names) == 1:
        return names[0], "likes this"

    if len(names) == 2:
        return names[0], "and", names[1], "likes this"

    if len(names) == 3:
        return names[0],names[1],"and",names[2], "likes this"

    if len(names) >= 4:
        return names[0], names[1],"and", size-2, "likes this"

names = ['Alex', 'Jacob', 'Mark', 'Max','dasd']
print(likes(names))
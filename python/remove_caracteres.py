def limpar(arg):
    ret = ""
    for c in arg:
        if c in "abcdefghijklmnopqrstuvwxyz0123456789":
            ret += c
    return ret

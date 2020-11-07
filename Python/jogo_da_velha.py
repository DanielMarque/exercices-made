
def printBoard(board):
        print(board['top-L'] + ' | ' + board['top-M'] + ' | ' + board['top-R'])
        print('-+-+-')
        print(board['mid-L'] + ' | ' + board['mid-M'] + ' | ' + board['mid-R'])
        print('-+-+-')
        print(board['bot-L'] + ' | ' + board['bot-M'] + ' | ' + board['bot-R'])

tabuleiro = {
    "top-L":"O","top-M":"","top-R":"",
    "mid-L":"","mid-M":"O","mid-R":"",
    "bot-L":"","bot-M":"","bot-R":"O",
}
print(tabuleiro)
printBoard(tabuleiro)


''' Um Programa que conta quantos caracteres possui uma string.'''

import pprint

mensagem = 'Era uma noite quente de verão, onde apenas os pingos de chuva eram esperados.'
count = {}

for character in mensagem:
    count.setdefault(character, 0)
    count[character] = count[character] + 1


pprint.pprint(count)

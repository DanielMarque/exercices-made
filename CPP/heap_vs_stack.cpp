#include <stdio.h>
#include <stdlib.h>
#include <string.h>


/**
 * Função que aloca uma área de memória no Heap. Em seu stack frame, essa
 * função não terá parâmetros. No entanto, existirão o endereço de retorno
 * da função, uma variável na pilha com o endereço do dado alocado no Heap
 * e o frame pointer que aponta para antigo topo da pilha, que nesse caso
 * será o stack frame da função main.
 */
char *
allocation_example ()
{
    /* Alocamos memória no Heap. 12 é o tamanho da string */
    char *my_string = malloc(13 * sizeof(char));

    memcpy(my_string, "Don't panic!", 12);
    my_string[12] = '\0';

    return my_string;
}


/**
 * Função principal do programa e primeira função a ser empilhada na Stack de
 * funções. Ela possui uma variável local, chamada answer, que armazena um
 * inteiro cujo valor é 42. Além disso, ela faz a chamada para a função
 * allocation_example que empilha um stack frame para essa função na Pilha
 * de funções. Como retorno da execução da função, temos apenas um ponteiro
 * para um endereço de memória no Heap que contém os dados da variável
 * new_string.
 *
 * Ao final imprimimos os valores de nossas variáveis criadas tanto na Stack
 * quanto no Heap. Além disso, ao chamar a função printf fazemos novamente
 * empilhamento na Stack de funções.
 */
int main (int argc, char* argv[])
{
    int answer = 42;

    char *new_string = allocation_example();

    printf("%s\n", new_string);
    printf("%d\n", answer);

    return EXIT_SUCCESS;
}

import java.util.Scanner;

class APX1_Q1_2021 { 
    
    Scanner input = new Scanner(System.in);		
    Boolean primeiroElemento = null;
    boolean tudoIgual = true;
    Boolean[] resultado;
    Boolean retorno; 
    //String usado = "";
    String palavra = "";
    String[][] lista = {{"A", "C", "P", "R", "C"},
              {"X", "S", "O", "P", "c"},
              {"V", "O", "V", "N", "I"},
              {"W", "G", "F", "M", "N"},
              {"Q", "A", "T", "I", "T"}};	    
    
    public Boolean verificaPalavra() {
      palavra = input.next();
      String usado = "";
      while (!palavra.equals("FIM")) {
        
        if(palavra == usado) {
          System.exit(0);		
          break;
        }		
        String[] letras = palavra.split("");
        resultado = new Boolean[letras.length];
        for(int i = 0;i < lista.length; i++) {
          for(int j = 0;j < lista[i].length; j++) {										
            for(int k = 0;k < letras.length; k++) {
              if(letras[k].equals(lista[i][j])) {							
                resultado[k] = true;
              }
            }					
          }				
        };			
        try {
          for (int l = 0 ; l < resultado.length; l++) {
                if (l == 0){
                    primeiroElemento = resultado[l];
                }
                if (!resultado[l].equals(primeiroElemento)){
                    tudoIgual = false;
                }
            }
          if (tudoIgual){
            retorno = true;
            this.getTrue();
            usado = palavra;
            palavra = input.next();
            
          }else{
            this.getFalse();
            retorno = false;
            System.exit(0);	
            break;					
          }
        }catch(Exception e) {
          retorno = false;
          System.exit(0);	
          break;			
        }			
      }
      return retorno; 
    }

    public Boolean getTrue() {
      return true;
    }
    
    public Boolean getFalse() {
      return false;
    }  
}
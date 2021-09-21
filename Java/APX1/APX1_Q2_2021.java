import java.time.LocalDate;
import java.time.Period;

class Imovel {
	
	public int metro;
	public String date;
	public String local;	
	public int numCod;
	public int precoMetro;
	public int resultIdade;
	public int resultMetro;	
	
	public Imovel(int metro, String date, String local) {
		this.metro = metro;
		this.date = date;
		this.local = local;
		this.numCod = 0;
	}
	
	
	public int getValorMetro() {	// Retorna Valor do Metro
		
		if(this.local == "centro") {
			resultMetro = 1000;
			
		}else if(this.local == "periferia") {
			resultMetro = 500;
		}		
		return resultMetro;
	}
	
	public double getValorVenal() {	// Retorna Idade Imóvel
		int valorMetro = this.getValorMetro();	
		float retorno = 0;
		double ajuda = 0;
		
		this.date = this.date.replace("/", "-");
		String a = this.date.substring(0, 1);
		String b = this.date.substring(2, 3);
		String c = this.date.substring(4, 8);
		String format = (c + "-" + "0"+ b + "-" +"0"+ a);		
		LocalDate startDate = LocalDate.parse(format);		
		LocalDate endDate = LocalDate.now();
		Period period = Period.between(startDate, endDate);		
		resultIdade = period.getYears();
		
		if(resultIdade < 10) {
			retorno = this.getValorMetro();
			
		}else if(resultIdade > 10 && resultIdade < 30) {
			
			retorno = (80/100) * valorMetro;
			
		}else if(resultIdade > 30) {
			
			retorno = 60f/100f;
			ajuda = retorno * valorMetro;			
		}		
		return ajuda;
	}	
	
	
	public int getCodigo() {
		this.numCod ++;
		return this.numCod;		
	}
	
	public double getValorIPTU() {
		
		double aliquota = 0.1;
		
		return this.getValorVenal() * aliquota;
	}
}



public class APX1_Q2_2021 {

	public static void main(String[] args) {
		Imovel i1 = new Imovel(100, "1/1/1980", "centro");
		System.out.println("IPTU do imóvel " + i1.getCodigo() + ": R$ " + i1.getValorIPTU());			
	}

}
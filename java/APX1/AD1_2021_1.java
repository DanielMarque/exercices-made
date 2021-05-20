import java.util.ArrayList;

class Post {
	
	public String postagem;
	public Post maiscurtido;
	private ArrayList<String> listaPostagens = new ArrayList<String>(); 
		
	public Post(String postagem) {
		this.postagem = postagem;		
	}	
	
	public String toString() {
		return this.postagem;
	}
}

class Rede {
	
	public Amigo amigo;	
	private int curtida;
	private String post;
	private ArrayList<Amigo> listaDeAmigos = new ArrayList<Amigo>();	
	private ArrayList<String> listaCurtidas = new ArrayList<String>(); 
	private ArrayList<String> maisCurtido = new ArrayList<String>(); 
		
	public Rede() {		
	}
	
	public Rede(String post) {
		this.post = post;
	}
	
	public void adicionarAmigo(Amigo amigo) {		
		listaDeAmigos.add(amigo);
	}	
	
	public String timeline() {		
		
		listaDeAmigos.forEach(amigo -> {  				
			amigo.listaDeCurtidas.forEach(curtir -> {
				listaCurtidas.add(curtir.postagem);
			});
		});
		 
		
		listaDeAmigos.forEach(nome-> {					
			System.out.print(nome.nomeAmigo +":"+ "\n");
			nome.listaDePostagens.forEach(post->{
				
				listaCurtidas.forEach(curtida -> {
					if(curtida.equals(post.postagem)) {
						this.curtida += 1;
					}
				});
				System.out.print(post +": "+ curtida +" curtidas"+"\n");
				this.maisCurtido.add(post.postagem);
				this.curtida = 0;								
			});			
			
		});
		
		System.out.print("\n");			
		return "";
	}	
	
	public ArrayList<Amigo> getAmigos(){
		return this.listaDeAmigos;
	}
	
}



class Amigo {
	
	public String nomeAmigo;			
	public ArrayList<Post> listaDePostagens = new ArrayList<Post>(); 
	public ArrayList<Post> listaDeCurtidas = new ArrayList<Post>(); 
	
	public Amigo (String nomeAmigo) {
		this.nomeAmigo = nomeAmigo;
	}
	
	public void postar(Post postagem) {			
		this.listaDePostagens.add(postagem);		
	}	
	
	public void curtir(Post curtida) {			
		this.listaDeCurtidas.add(curtida);		
	}		
	
	public Post retornaPostMaisCurtido() {				
		
		System.out.print(this.listaDePostagens.get(0) + "\n");			
		return new Post("");
	}

}

public class AD1_2021_1 {

	public static void main(String[] args) {
		
		Amigo fulano = new Amigo("Fulano");
		Amigo ciclano = new Amigo("Ciclano");
		Amigo beltrano = new Amigo("Beltrano");
		
		Rede paraiso = new Rede();
		paraiso.adicionarAmigo(fulano);
		paraiso.adicionarAmigo(ciclano);
		paraiso.adicionarAmigo(beltrano);
		
		Post bomdia = new Post("Bom dia!");
		Post boatarde = new Post("Boa tarde!");
		Post boanoite = new Post("Boa noite!");
		
		fulano.postar(bomdia);
		fulano.postar(boatarde);
		ciclano.postar(boanoite);
		
		beltrano.curtir(bomdia);
		beltrano.curtir(boatarde);
		beltrano.curtir(boanoite);
		fulano.curtir(boanoite);
		
		System.out.println("Timeline:");
		System.out.println(paraiso.timeline());	
		System.out.println("Post mais curtido de um usuário:");
		Post maiscurtido = ciclano.retornaPostMaisCurtido();
		System.out.println(maiscurtido);
	}
}
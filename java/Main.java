import java.util.ArrayList;
import java.util.List;

class Rede {
	
	public Amigo amigo;	
	public Post poste;	
	private int curtida;
	List<Amigo> listaAmigos = new ArrayList<Amigo>();
	List<String> listaCurtidas = new ArrayList<String>();
	
	public void adicionarAmigo(Amigo amigo) {		
		listaAmigos.add(amigo);
	}	
	
	public void timeline() {		
		
		listaAmigos.forEach(amigo -> {  				// Pega a lista de curtidas
			amigo.listaCurtidas.forEach(like -> {
				listaCurtidas.add(like);
			});
		});
		
		listaAmigos.forEach(item -> {//			
			System.out.print(item.listaAmigos.get(0) + ":" +"\n"); //Nome do Amigo			
			
			item.listaPosts.forEach(post -> {				// Postagem do Amigo//	
				
				listaCurtidas.forEach(postagem -> {
					if(postagem.equals(post)) {
						this.curtida += 1;
					}
				});
				
				System.out.print(post + " " + curtida +" curtidas" +"\n");
				this.curtida = 0;
			});				
		});	
		//System.out.print(listaCurtidas);	
	}
}



class Post {
	
	public String postagem;	
	ArrayList<String> listaPostagens = new ArrayList<String>();
	
	public Post(String postagem) {
		this.postagem = postagem;
		this.listaPostagens.add(this.postagem);		
	}		
}


class Amigo {
	
	public String nomeAmigo;
	public Post post;
	public Rede rede;
	public String postagem;
	
	ArrayList<String> listaCurtidas = new ArrayList<String>();
	ArrayList<String> listaPosts = new ArrayList<String>();
	ArrayList<String> listaAmigos = new ArrayList<String>();
	public String maisCurtido;
	
			
	public Amigo(String nomeAmigo) {
		this.nomeAmigo = nomeAmigo;	
		this.listaAmigos.add(nomeAmigo);
	}	
	
	public void postar(Post post) {		
		this.listaPosts.add(post.postagem);		
	}
	
	public void curtir(Post post) {			
		this.postagem = post.postagem;
		this.listaCurtidas.add(this.postagem);		
	}		
	
	public List<String> getCurtidas() {
		return rede.listaCurtidas;
	}
	
	public String retornaPostMaisCurtido() {			
		
		return maisCurtido;
	}
}


public class Main {
	
	public static void main (String [] args) {		
		Amigo fulano = new Amigo("Fulano");
		Amigo ciclano = new Amigo("Ciclano");
		Amigo beltrano = new Amigo("Beltrano");		
		
		Rede paraiso = new Rede();
		paraiso.adicionarAmigo(fulano);
		paraiso.adicionarAmigo(ciclano);
		paraiso.adicionarAmigo(beltrano);
		
		Post bomdia = new Post("Bom dia!");
		Post boatarde = new Post("Boa tarde!");
		Post boanoite = new Post("Boa Noite!");
		
		fulano.postar(bomdia);
		fulano.postar(boatarde);
		ciclano.postar(boanoite);		
		
		beltrano.curtir(bomdia);
		beltrano.curtir(boatarde);
		beltrano.curtir(boanoite);
		fulano.curtir(boanoite);		
		
		System.out.println("Timeline:");
		paraiso.timeline();
		System.out.println("Post mais curtido de um usuário:");
		// Post maiscurtido = ciclano.retornaPostMaisCurtido();
		// System.out.println(maiscurtido);			
	}
}
/**
 * Classe que contem as informações importantes sobre o resultado da busca pela #tag
 * @author André Oliveira
 *
 */
public class TweetResult {
	private String tag; /// #tag que foi buscada
	private String search; /// resultado da busca em formato json
	private int total; /// total de tweets da busca
	private int totalPT;/// total de tweets da busca em portugues
	private int[] totalHours;/// total de tweets agrupados por hora do dia (24 posições)
	
	/**
	 * construtor da classe, recebe as principais informações da busca
	 * @param hashTag - #tag que ofi buscada
	 * @param s - resultado da busca em formato json
	 * @param t - total de tweets da busca
	 * @param tPT - total de tweets em portugues  da busca
	 * @param h - total de tweets agrupados por hora do dia (24 posicoes)
	 */
	public TweetResult(String hashTag, String s, int t, int tPT, int[] h)
	{
		tag = hashTag;
		search = s;
		total = t;
		totalPT = tPT;
		totalHours = h;
	}
	
	public String getHashTag(){return tag;}
	public String getSearch(){return search;}
	public int getTotalPT(){return totalPT;}
	public int getTotal(){return total;}
	public int[] getTotalHours(){return totalHours;}
}

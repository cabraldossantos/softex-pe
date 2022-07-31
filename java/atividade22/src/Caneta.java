public class Caneta {
    private static int quantidadeDeCanetas = 0;
    
    String modelo;
    String cor;
    float ponta;
    int carga;
    boolean tampada;
    
    public Caneta() {
        obterQuantidadeDeCanetas();
    }
            
    public static int obterQuantidadeDeCanetas()  {
        return quantidadeDeCanetas++;
    }
    
    void estado() {
        System.out.println("Modelo: " + this.modelo);
        System.out.println("Uma caneta " + this.cor);
        System.out.println("Ponta: " + this.ponta);
        System.out.println("Carga: " + this.carga);
        System.out.println("Está tampada? " + this.tampada);
    }
    
    void rabiscar() {
        if (this.tampada == true) {
            System.out.println("ERRO! Não posso rebiscar.");
        } else {
            System.out.println("Estou rabiscando.");
        }
    }
    
    void tampar() {
        this.tampada = true;
    }
    
    void destampar() {
        this.tampada = false;
    }
}

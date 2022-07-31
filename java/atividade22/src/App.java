public class App {
    public static void main(String[] args) throws Exception {
        Caneta c1 = new Caneta();
        c1.cor = "Azul";
        c1.ponta = 0.5f;
        c1.tampada = false;
        c1.carga = 25;
        c1.tampar();
        c1.estado();
        c1.rabiscar();
        
        Caneta c2 = new Caneta();
        c2.modelo = "Esferográfica";
        c2.cor = "Preta";
        c2.carga = 5;
        c2.destampar();
        c2.estado();
        c2.rabiscar();
        
        Caneta c3 = new Caneta();
        c3.cor = "Vermelha";
        
        Caneta c4 = new Caneta();
        c4.cor = "Verde";
        
        Caneta c5 = new Caneta();
        c5.cor = "Laranja";
        
        System.out.println(Caneta.obterQuantidadeDeCanetas());
    }
}

public class App {
    /**
     * @param args
     * @throws Exception
     */
    public static void main(String[] args) throws Exception {
        System.out.println("CANETA 1");
        Caneta c1 = new Caneta(2.0f);
        c1.setPonta(0.5f);
        c1.setTampada(false);
        c1.setCarga(25);
        c1.tampar();
        c1.getEstado();
        c1.rabiscar();

        System.out.println("\nCANETA 2");
        Caneta c2 = new Caneta(0.7f);
        c2.setCarga(55);
        c2.destampar();
        c2.getEstado();
        c2.rabiscar();
        
        System.out.println("\nCANETA 2");
        Caneta c3 = new Caneta(2.1f);
        c3.setCarga(5);

        System.out.printf("\nQuantidade de canetas criadas: %S.\n", String.valueOf(Caneta.obterQuantidadeDeCanetas()));
    }
}

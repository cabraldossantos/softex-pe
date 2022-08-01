public class App {
    public static void main(String[] args) throws Exception {
        String valor = "SOFTEX - Java";

        System.out.println("MÉTODOS: compareTo e compareToIgnoreCase.");
        System.out.println(valor.compareTo("SOFTEX - Java") == 0 ? true : false);
        System.out.println(valor.compareTo("SOFTEX - JAVA") == 0 ? true : false);
        System.out.println(valor.compareToIgnoreCase("SOFTEX - JAVA") == 0 ? true : false);
        
        System.out.println("\nMÉTODOS: endsWith e startsWith.");
        System.out.println(valor.endsWith("Java"));
        System.out.println(valor.startsWith("SOF"));
        System.out.println(valor.startsWith("TE", 3));

        System.out.println("\nMÉTODO: split.");
        String[] valorComSplit = valor.split("-");
        for(String s : valorComSplit){
            System.out.println(s.trim());
        }
    }
}

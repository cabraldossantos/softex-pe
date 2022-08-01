import com.cabral.cliente.Cliente;
import com.cabral.empresa.Empresa;

public class App {
    /**
     * @param args
     * @throws Exception
     */    
    public static void main(String[] args) throws Exception {
        Empresa empresa = new Empresa();
        empresa.setRazaoSocial("ASSOCIACAO PARA PROMOCAO DA EXCELENCIA DO SOFTWARE BRASILEIRO - SOFTEX");

        Cliente cliente1 = new Cliente();
        cliente1.setNome("Abdias Souza");
        cliente1.setCodigo("C0001");


        Cliente cliente2 = new Cliente();
        cliente2.setNome("Zafira Hermínia");

        System.out.println(empresa.atenderCliente(cliente1));
        System.out.println(empresa.atenderCliente(cliente2));
    }
}

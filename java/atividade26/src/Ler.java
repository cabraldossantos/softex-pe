import java.util.ArrayList;

import com.cabral.empacotamento.Empacotamento;
import com.cabral.pessoa.Pessoa;

  public class Ler {

    /**
     * @param args
     */
    public static void main(String[] args) {
        // desserialização: recuperando os objetos gravados no arquivo binário "dados.dat"
        ArrayList<Object> pessoa = Empacotamento.lerArquivoBinario("dados.dat");

        int i = 1;
        for (Object item: pessoa) {
            System.out.printf("Ficha nro....: %d.\n", i++);
            System.out.printf("Nome.........: %s\n", ((Pessoa)item).getNome());
            System.out.printf("Peso Corporal: %.2f kgs\n", ((Pessoa)item).getPesoCorporal());
            System.out.printf("Altura.......: %.2f metros\n", ((Pessoa)item).getAltura());
            System.out.printf("IMC..........: %.2f\n", ((Pessoa)item).IMC());
            System.out.printf("Interpretacao: %s\n\n", ((Pessoa)item).interpretaIMC());
        }
    }
}
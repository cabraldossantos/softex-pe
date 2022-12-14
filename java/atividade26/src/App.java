import java.util.ArrayList;
import java.util.Scanner;

import com.cabral.empacotamento.Empacotamento;
import com.cabral.pessoa.Pessoa;

public class App {
    /**
     * @param args
     * @throws Exception
     */
    public static void main(String[] args) throws Exception {
        Scanner ler = new Scanner(System.in);

        String nome;
        double pc;
        double alt;

        // 1) desserialização: recuperando os objetos gravados no arquivo binário "dados.dat"
        ArrayList<Object> pessoa = Empacotamento.lerArquivoBinario("dados.dat");

        // 2) entrada de dados
        while (true) {
            System.out.printf("Ficha nro: %d.\n", (pessoa.size()+1));
            System.out.printf("Informe o nome da pessoa, FIM para encerrar:\n");
            nome = ler.nextLine();
            if (nome.equalsIgnoreCase("FIM"))
            break;

            System.out.printf("\nInforme o peso corporal (em kg)...............: ");
            pc = ler.nextDouble();

            System.out.printf("Informe a altura (em metros: 1,77 por exemplo): ");
            alt = ler.nextDouble();

            pessoa.add(new Pessoa(nome, pc, alt)); // adiciona um novo objeto a lista

            ler.nextLine(); // esvazia o buffer do teclado
            System.out.printf("\n");
        }

        // 3) serialização: gravando o objeto no arquivo binário "dados.dat"
        Empacotamento.gravarArquivoBinario(pessoa, "dados.dat");

        ler.close();
    }
}

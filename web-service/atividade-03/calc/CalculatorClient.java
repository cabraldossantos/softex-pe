package calc;

import javax.xml.namespace.QName;
import javax.xml.ws.Service;
import java.net.URL;

class CalculatorClient {
    public static void main(String args[]) throws Exception {
        URL url = new URL("http://127.0.0.1:8080/calc?wsdl");
        QName qname = new QName("http://calc/","CalculatorServerImplService");
        Service ws = Service.create(url, qname);
        CalculatorServer calc = ws.getPort(CalculatorServer.class);

        System.out.println("Soma (5+1): " + calc.add(5,1));
        System.out.println("Subtracao (5-1): " + calc.subtract(5,1));
        System.out.println("Multiplicacao (5*1): " + calc.multiply(5,1));
        System.out.println("Divisao (5/1): " + calc.share(5,1));
    }
}

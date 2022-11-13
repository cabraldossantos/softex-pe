package calc;

import java.util.Date;
import javax.jws.WebService;

@WebService(endpointInterface = "calc.CalculatorServer")
public class CalculatorServerImpl implements CalculatorServer {
    public float add(float num1, float num2) {
        return num1 + num2;
    }

    public float subtract(float num1, float num2) {
        return num1 - num2;
    }

    public float multiply(float num1, float num2) {
        return num1 * num2;
    }

    public float share(float num1, float num2) {
        return num1 / num2;
    }
}
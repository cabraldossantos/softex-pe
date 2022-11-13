package calc;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;

@WebService
@SOAPBinding(style = Style.RPC)
public interface CalculatorServer {
    @WebMethod float add(float number1, float number2);
    @WebMethod float subtract(float number1, float number2);
    @WebMethod float multiply(float number1, float number2);
    @WebMethod float share(float number1, float number2);
}

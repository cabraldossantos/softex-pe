package com.cabral.empresa;

import com.cabral.cliente.Cliente;

public class Empresa {
    private String razaoSocial;

    public String getRazaoSocial() {
        return razaoSocial;
    }

    public void setRazaoSocial(String razaoSocial) {
        this.razaoSocial = razaoSocial;
    }
    
    public String atenderCliente(Cliente cliente) {
        String atender = "Cliente " + cliente.getNome() + " não possui código. Logo não é possível atendê-lo(a).";
        if (cliente.getCodigo() != null ) {
            atender = "Cliente "+cliente.getNome()+" em atendimento.";
        }
        return atender;
    }
}

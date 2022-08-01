package com.cabral.cliente;

import com.cabral.pessoa.Pessoa;

public class Cliente extends Pessoa {
    private String codigo;

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }
}

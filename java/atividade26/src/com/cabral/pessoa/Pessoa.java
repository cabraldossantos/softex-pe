package com.cabral.pessoa;

import java.io.Serializable;

public class Pessoa implements Serializable {
    private String nome;
    private double pesoCorporal;
    private double altura;

    public Pessoa(String nome, double pesoCorporal, double altura) {
        this.nome = nome;
        this.pesoCorporal = pesoCorporal;
        this.altura = altura;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public double getPesoCorporal() {
        return pesoCorporal;
    }
    public void setPesoCorporal(double pesoCorporal) {
        this.pesoCorporal = pesoCorporal;
    }
    public double getAltura() {
        return altura;
    }
    public void setAltura(double altura) {
        this.altura = altura;
    }
 
    public double IMC() {
        return (getPesoCorporal() / (getAltura() * getAltura()));
    }

    /**
     * @return Baixo peso; Peso adequado; Sobrepeso; ou Obesidade. 
     */
    public String interpretaIMC() {
        double valorIMC = IMC();
        if (valorIMC < 18.5)
            return ("Baixo peso.");
        else if (valorIMC < 25.0)
            return ("Pesso adequado.");
        else if (valorIMC < 30.0)
            return ("Sobrepeso.");
        else
            return ("Obesidade.");
    }
}

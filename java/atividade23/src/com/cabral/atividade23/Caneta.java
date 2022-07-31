package com.cabral.atividade23;

public class Caneta {
    private static int quantidadeDeCanetas = 0;
    
    private String modelo;
    private String cor;
    private float ponta;
    private int carga;
    private boolean tampada;
    

    public static int getQuantidadeDeCanetas() {
        return quantidadeDeCanetas;
    }

    public static void setQuantidadeDeCanetas(int quantidadeDeCanetas) {
        Caneta.quantidadeDeCanetas = quantidadeDeCanetas;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public float getPonta() {
        return ponta;
    }

    public void setPonta(float ponta) {
        this.ponta = ponta;
    }

    public int getCarga() {
        return carga;
    }

    public void setCarga(int carga) {
        this.carga = carga;
    }

    public boolean isTampada() {
        return tampada;
    }

    public void setTampada(boolean tampada) {
        this.tampada = tampada;
    }

    /**
     * @param ponta
     */
    public Caneta(float ponta) {
        if(ponta > 2.0f) {
            System.out.println("Objeto Caneta não pode possuir ponta superior a 2.0.");
            System.exit(0);
        }
        this.setPonta(ponta);
        obterQuantidadeDeCanetas();
    }
            
    public static int obterQuantidadeDeCanetas()  {
        return quantidadeDeCanetas++;
    }
    
    public void getEstado() {
        System.out.println("Modelo: " + this.modelo);
        System.out.println("Uma caneta " + this.cor);
        System.out.println("Ponta: " + this.ponta);
        System.out.println("Carga: " + this.carga);
        System.out.println("Está tampada? " + this.tampada);
    }
    
    public void rabiscar() {
        if (this.tampada == true) {
            System.out.println("ERRO! Não posso rebiscar.");
        } else {
            System.out.println("Estou rabiscando.");
        }
    }
    
    public void tampar() {
        this.tampada = true;
    }
    
    public void destampar() {
        this.tampada = false;
    }
}

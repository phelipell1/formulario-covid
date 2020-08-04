package com.project.formulario.formulariocovid.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.project.formulario.formulariocovid.enun.Funcao;


@Entity
@Table(name = "formularios")
public class formulario {
	
	private long id_formulario;
	private String nome_completo;
	private Funcao funcao;
	private double temperatura_corporal;
	private boolean realizou_viagem;
	private String local_viagem;
	private boolean contato_virus;
	private boolean teve_febre;
	private List<String> sintomas;
	private Date dataCadastro;
	
	public formulario() {
		super();
	}

	public formulario(long id_formulario, String nome_completo, Funcao funcao, double temperatura_corporal,
			boolean realizou_viagem, String local_viagem, boolean contato_virus, boolean teve_febre,
			List<String> sintomas, Date dataCadastro) {
		super();
		this.id_formulario = id_formulario;
		this.nome_completo = nome_completo;
		this.funcao = funcao;
		this.temperatura_corporal = temperatura_corporal;
		this.realizou_viagem = realizou_viagem;
		this.local_viagem = local_viagem;
		this.contato_virus = contato_virus;
		this.teve_febre = teve_febre;
		this.sintomas = sintomas;
		this.dataCadastro = dataCadastro;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	public long getId_formulario() {
		return id_formulario;
	}

	public void setId_formulario(long id_formulario) {
		this.id_formulario = id_formulario;
	}
	
	@Column(name = "nome_completo", nullable = false)
	public String getNome_completo() {
		return nome_completo;
	}

	public void setNome_completo(String nome_completo) {
		this.nome_completo = nome_completo;
	}
	
	@Column(name = "funcao", nullable = false)
	public Funcao getFuncao() {
		return funcao;
	}

	public void setFuncao(Funcao funcao) {
		this.funcao = funcao;
	}
	
	@Column(name = "temperatura_corporal", nullable = false)
	public double getTemperatura_corporal() {
		return temperatura_corporal;
	}

	public void setTemperatura_corporal(double temperatura_corporal) {
		this.temperatura_corporal = temperatura_corporal;
	}
	
	@Column(name = "realizou_viagem", nullable = false)
	public boolean isRealizou_viagem() {
		return realizou_viagem;
	}

	public void setRealizou_viagem(boolean realizou_viagem) {
		this.realizou_viagem = realizou_viagem;
	}
	
	@Column(name = "local_viagem", nullable = true)
	public String getLocal_viagem() {
		return local_viagem;
	}

	public void setLocal_viagem(String local_viagem) {
		this.local_viagem = local_viagem;
	}
	
	@Column(name = "contato_virus", nullable = false)
	public boolean isContato_virus() {
		return contato_virus;
	}

	public void setContato_virus(boolean contato_virus) {
		this.contato_virus = contato_virus;
	}
	
	@Column(name = "tebe_febre", nullable = false)
	public boolean isTeve_febre() {
		return teve_febre;
	}

	public void setTeve_febre(boolean teve_febre) {
		this.teve_febre = teve_febre;
	}
	
	
	@Column(name = "sintomas", nullable = true)
	@ElementCollection(targetClass=String.class)
	public List<String> getSintomas() {
		return sintomas;
	}

	public void setSintomas(List<String> sintomas) {
		this.sintomas = sintomas;
	}
	
	@Column(name = "dataCadastro", nullable = false)
	public Date getDataCadastro() {
		return dataCadastro;
	}

	public void setDataCadastro(Date dataCadastro) {
		this.dataCadastro = dataCadastro;
	}

	@Override
	public String toString() {
		return "formulario [id_formulario=" + id_formulario + ", nome_completo=" + nome_completo + ", funcao=" + funcao
				+ ", temperatura_corporal=" + temperatura_corporal + ", realizou_viagem=" + realizou_viagem
				+ ", local_viagem=" + local_viagem + ", contato_virus=" + contato_virus + ", teve_febre=" + teve_febre
				+ ", sintomas=" + sintomas + ", dataCadastro=" + dataCadastro + "]";
	}
}

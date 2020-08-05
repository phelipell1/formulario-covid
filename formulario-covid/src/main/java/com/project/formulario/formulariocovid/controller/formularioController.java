package com.project.formulario.formulariocovid.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.formulario.formulariocovid.exception.ResourceNotFoundException;
import com.project.formulario.formulariocovid.model.formulario;
import com.project.formulario.formulariocovid.repository.formularioRepository;

@RestController
@RequestMapping("/formulario-covid")
public class formularioController {
	
	@Autowired
	formularioRepository formularioRepository;
	
	@GetMapping("/formulario")
	public List<formulario> getAllFormulario(){
		return formularioRepository.findAll();
	}
	
	@PostMapping("/formulario")
	public formulario newFormulario(@Validated @RequestBody formulario formularios) {
		return formularioRepository.save(formularios);
	}
	
	@PutMapping("/formulario/{id}")
	public ResponseEntity<formulario> updateFormulario(@PathVariable(name = "id") Long formularioId,
			@Validated @RequestBody formulario formularioDetalhes) throws ResourceNotFoundException{
		
		formulario formularios = formularioRepository.findById(formularioId)
				.orElseThrow(() -> new ResourceNotFoundException("Atenção ! \n ID :: "+formularioId+" não localizado !" ));
		
		formularios.setNome_completo(formularioDetalhes.getNome_completo());
		formularios.setFuncao(formularioDetalhes.getFuncao());
		formularios.setTemperatura_corporal(formularioDetalhes.getTemperatura_corporal());
		formularios.setRealizou_viagem(formularioDetalhes.isRealizou_viagem());
		formularios.setLocal_viagem(formularioDetalhes.getLocal_viagem());
		formularios.setContato_virus(formularioDetalhes.isContato_virus());
		formularios.setTeve_febre(formularioDetalhes.isTeve_febre());
		formularios.setSintomas(formularioDetalhes.getSintomas());
		final formulario forms = formularioRepository.save(formularios);
		return ResponseEntity.ok().body(forms);
	}
	
	@DeleteMapping("/formulario/{id}")
	public Map<String, Boolean> deleteFormulario(@PathVariable(value="id") Long formularioId)
		throws ResourceNotFoundException{
		formulario forms = formularioRepository.findById(formularioId)
				.orElseThrow(() -> new ResourceNotFoundException("Nada encontrado!"));
		formularioRepository.delete(forms);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deletado", Boolean.TRUE);
		return response;
	}
}

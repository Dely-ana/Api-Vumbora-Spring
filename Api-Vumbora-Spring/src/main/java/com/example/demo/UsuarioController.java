package com.example.demo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	// nesta classe serão criadas:
	
	// Pegar todos os usuarios;
	@GetMapping("/usuarios")
	public List<Usuario> getAllUsuarios(){
		return usuarioRepository.findAll();
		
	}
	
	// Pegar um usuario com seu ID;
	@GetMapping("/usuarios/{id}")
	public ResponseEntity<Usuario> getUsuarioById(@PathVariable Long id){
		Usuario usuario = usuarioRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Usuario não existe com id:"+ id));
		return ResponseEntity.ok(usuario);
	}



    //Criar um novo usuario // Não entendi muito bem esse conceito
	@PostMapping("/usuarios")
	public Usuario createUsuario(@RequestBody Usuario usuario) {
		return usuarioRepository.save(usuario);
		
	}
	
	// Alterar um Usuario;
	 @PutMapping("/usuarios/{id}")
	public ResponseEntity<Usuario> updateUsuario (@PathVariable Long id, @RequestBody Usuario usuarioDetails){
		
		Usuario usuario = usuarioRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Usuario não existe com id:"+ id));
		usuario.setNome(usuarioDetails.getNome());
		usuario.setCpf(usuarioDetails.getCpf());
		usuario.setTelefone(usuarioDetails.getTelefone());
		usuario.setEmail(usuarioDetails.getEmail());
		usuario.setSexo(usuarioDetails.getSexo());
		usuario.setPais(usuarioDetails.getPais());
		usuario.setDestino(usuarioDetails.getDestino());
		
		Usuario updateUsuario = usuarioRepository.save(usuario);
		return ResponseEntity.ok(updateUsuario);
	
	}
	
	// Deletar um Usuario.
		
	@DeleteMapping("/usuarios/{id}")  
	public ResponseEntity<Map<String, Boolean>> deleteUsuario(@PathVariable Long id){
		Usuario usuario = usuarioRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Usuario não existe com id:"+ id));
		usuarioRepository.delete(usuario);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deletado", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
//		OBS: O delete apresentou "Request method 'DELETE' not supported" corrigi em usuario/{id} estava com o U maiusculo
		
	}	

 }

	
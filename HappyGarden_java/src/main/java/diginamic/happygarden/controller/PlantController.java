package diginamic.happygarden.controller;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import diginamic.happygarden.model.Plant;
import diginamic.happygarden.service.PlantService;

@RestController
@RequestMapping("/Plant")
public class PlantController extends AbstractCRUDController<Plant, Long, PlantService> {

	@Override
	@PreAuthorize("permitAll()")
	public List<Plant> getAll() {
		return super.getAll();
	}
	
	
}

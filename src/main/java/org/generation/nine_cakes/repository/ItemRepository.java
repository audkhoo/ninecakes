package org.generation.nine_cakes.repository;
import org.springframework.data.repository.CrudRepository;
import org.generation.nine_cakes.repository.entity.Item;

public interface ItemRepository extends CrudRepository<Item, Integer> {
// Access all methods in CrudRepository; e.g., save,count, delete, findById, findAll
}

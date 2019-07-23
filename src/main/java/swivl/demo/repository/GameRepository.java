package swivl.demo.repository;

import org.springframework.data.repository.CrudRepository;
import swivl.demo.entities.Game;

import java.util.List;

public interface GameRepository extends CrudRepository<Game, Long> {
    List<Game> findAllByName(String name);
}
package swivl.demo.repository;

import org.springframework.data.repository.CrudRepository;
import swivl.demo.entities.Game;
import swivl.demo.entities.Quiz;
import swivl.demo.entities.User;

import java.util.List;
import java.util.Set;

public interface QuizRepository extends CrudRepository<Quiz, Long> {

}
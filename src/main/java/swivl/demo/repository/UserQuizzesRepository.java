package swivl.demo.repository;

import org.springframework.data.repository.CrudRepository;
import swivl.demo.entities.Quiz;
import swivl.demo.entities.UserQuizzes;

public interface UserQuizzesRepository extends CrudRepository<UserQuizzes, Long> {

}
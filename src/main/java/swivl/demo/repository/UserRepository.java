package swivl.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import swivl.demo.entities.BrowserContent;
import swivl.demo.entities.User;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
List<User> findAllByAccessToken(String accessToken);

}


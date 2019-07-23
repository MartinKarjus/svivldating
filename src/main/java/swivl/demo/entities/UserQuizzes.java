package swivl.demo.entities;


import lombok.Data;
import swivl.demo.entities.User;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "USER_QUIZZES")
public class UserQuizzes {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;

    @Column(name = "user_id")
    private long userId;

    @Column(name = "quiz_id")
    private String quizId;





}

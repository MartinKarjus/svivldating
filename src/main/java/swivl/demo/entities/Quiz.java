package swivl.demo.entities;


import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "quiz")
public class Quiz {

    @Id
    @Column(updatable = false, nullable = false,name="id")
    private long id;

//
//    @ManyToMany(mappedBy = "quizzes")
//    private Set<User> users = new HashSet<User>();

    @Column(name = "filename1")
    private String filename1; //todo placeholder, change when we actually have images for quizzes

    @Column(name = "filename2")
    private String filename2;

    @Column(name = "question")
    private String question;

    @Column(name = "answer1")
    private String answer1;

    @Column(name = "answer2")
    private String answer2;

}

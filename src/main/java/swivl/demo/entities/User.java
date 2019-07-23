package swivl.demo.entities;


import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "USER")
public class User {

    @Id
    @Column(updatable = false, nullable = false, name="id")
    private long id;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    @Column(name = "accesstoken")
    private String accessToken;

//    @ManyToMany(cascade = { CascadeType.ALL })
//    @JoinTable(
//            name = "USER_QUIZ",
//            joinColumns = { @JoinColumn(name = "user_id") },
//            inverseJoinColumns = { @JoinColumn(name = "quiz_id") }
//    )
//    private Set<Quiz> quizzes = new HashSet<>();


    public User(long id, String firstname, String lastname, String password, String email, String accessToken) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.email = email;
        this.accessToken = accessToken;
    }

    public User() {
    }
}

package swivl.demo.entities.responses;

import lombok.Data;
import swivl.demo.entities.Quiz;

import java.util.List;

@Data
public class QuizRequestResponse {
    List<Quiz> quizzes;
}

package swivl.demo.controller;


import org.springframework.web.bind.annotation.*;
import swivl.demo.entities.responses.ImageRequestResponse;
import swivl.demo.entities.User;

@RestController
@RequestMapping("/api/quiz")
public class QuizController {

    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping("/getNewContent")
    public ImageRequestResponse usernameEmailCheck(@RequestBody User user) {


        return null;
    }
}

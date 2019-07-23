package swivl.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import swivl.demo.entities.Cover;
import swivl.demo.entities.Game;
import swivl.demo.entities.User;
import swivl.demo.repository.GameRepository;
import swivl.demo.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TestController {

    @Autowired
    private GameRepository gameRepository;
    @Autowired
    private UserRepository userRepository;


    @RequestMapping("/test")
    public String saveSth(){
        gameRepository.save(new Game(127, "Assassin's Creed II", "The lineage continues as this new chapter introduces Ezio, inheritor of the talents and creed of the Assassins. His family murdered by rival families, Ezio resolves to learn the ancient art of the Assassin in order to seek revenge. He will not do so alone though, allying with historical figures such as philosopher and writer Niccolò Machiavelli. You will also be able to master the art of the assassin with all new weapons and instruments created by the renowned inventor and genius of the Renaissance, Leonardo Da Vinci himself.", 90.25, 1258416000000L, new Cover("//images.igdb.com/igdb/image/upload/t_thumb/doczeiofd1ckpapdhqs7.jpg", "doczeiofd1ckpapdhqs7", 1000, 1426)));

        userRepository.deleteAll();

        userRepository.save(new User(1,"fName", "lastN","pass","mail","token"));
        userRepository.save(new User(2,"fName", "lastN","pass","mail","token2"));
        userRepository.save(new User(3,"fName", "lastN","pass","mail","token3"));
        userRepository.save(new User(4,"fName", "lastN","pass","mail","token4"));
        return "success";
    }
    @RequestMapping("/get")
    public List<Game> loadGame(){
        List<Game> games = new ArrayList<>();
        gameRepository.findAll().forEach(games::add);
        return games;
        //return "success";
    }

    @RequestMapping("/getAllUsers")
    public List<User> loadAllUsers(){
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    @RequestMapping("/getUsers")
    public List<User> loadUsers(){
        List<User> users = new ArrayList<>();
        //userRepository.findAll().forEach(users::add);
        users.addAll(userRepository.findAllByAccessToken("token2"));
        return users;
        //return "success";
    }
}

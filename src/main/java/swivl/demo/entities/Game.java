package swivl.demo.entities;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "GAME")
public class Game {

    @Id
    @Column(name = "ID")
    private long id;

    @Column (name = "NAME")
    private String name;

    @Column(name = "STORYLINE", length = 4000)
    private String storyline;

    @Column(name = "AGGREGATED_RATING")
    @JsonProperty("aggregated_rating")
    private double aggregatedRating;

    @Column(name = "FIRST_RELEASE_DATE")
    @JsonProperty("first_release_date")
    private long firstReleaseDate;

    @Embedded
    private Cover cover;

    public Game(){

    }

    public Game(long id, String name, String storyline, double aggregatedRating, long firstReleaseDate, Cover cover) {
        this.id = id;
        this.name = name;
        this.storyline = storyline;
        this.aggregatedRating = aggregatedRating;
        this.firstReleaseDate = firstReleaseDate;
        this.cover = cover;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getStoryline() {
        return storyline;
    }

    public double getAggregatedRating() {
        return aggregatedRating;
    }

    public long getFirstReleaseDate() {
        return firstReleaseDate;
    }

    public Cover getCover() {
        return cover;
    }


}
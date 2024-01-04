package com.cricket.apis.repositories;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cricket.apis.entities.Match;

@Repository
public interface MatchRepo extends JpaRepository<Match, Integer>{

//	fetch match based on teamHeading
	
	Optional<Match> findByTeamHeading(String teamHeading);
}

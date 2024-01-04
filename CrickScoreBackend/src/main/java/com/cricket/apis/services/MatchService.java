package com.cricket.apis.services;

import java.util.List;
import java.util.Map;

import com.cricket.apis.entities.Match;


public interface MatchService {
//	get all Matches
	List<Match> getAllMatches();
	
//	get live Matches
	List<Match> getLiveMatches();
	
//	get cwc2023 point table
	List<List<String>> getPointTable();
	
}

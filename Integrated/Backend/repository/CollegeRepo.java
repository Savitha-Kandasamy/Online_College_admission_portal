package com.team.savitha.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.team.savitha.model.College;

@Repository
public interface CollegeRepo extends JpaRepository<College, Long> {
    // Additional custom query methods can be added if needed
}

package com.team.savitha.repository;

import com.team.savitha.model.College;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CollegeRepo extends JpaRepository<College, Long> {
    // Additional custom query methods can be added if needed
}

package com.team.savitha.repository;

import com.team.savitha.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepo extends JpaRepository<Payment, Long> {
    // Additional custom query methods can be added if needed
}

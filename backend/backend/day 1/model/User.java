package com.team.vel.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_User")
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    private Long userId;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "email", nullable = false)
    private String email;
    
    @Column(name = "mobileNumber", nullable = false)
    private String mobileNumber;

    @Column(name = "userRole", nullable = false)
    private String userRole;

    @Column(name = "password", nullable = false)
    private String password;
}

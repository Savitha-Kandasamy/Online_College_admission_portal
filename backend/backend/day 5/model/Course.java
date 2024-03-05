package com.team.vel.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Course")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "courseId")
    private Long courseId;

    @Column(name = "courseName", nullable = false)
    private String courseName;

    @Column(name = "courseDescription")
    private String courseDescription;

    @Column(name = "courseDuration")
    private String courseDuration;

    @Column(name = "fees")
    private Double fees;

    @Column(name = "noOfSeats")
    private int noOfSeats;

     @ManyToOne
    @JoinColumn(name="instituteId")
    @JsonBackReference
    private College institute;
}

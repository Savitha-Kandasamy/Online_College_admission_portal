package com.team.savitha.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CourseDto {

    private Long courseId;
    private String courseName;
    private String courseDescription;
    private String courseDuration;
    private Double fees;
    private int noOfSeats;
}

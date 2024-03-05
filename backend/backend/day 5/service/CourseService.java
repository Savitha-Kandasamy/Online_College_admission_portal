package com.team.vel.service;

import java.util.List;

import com.team.vel.dto.CourseDto;

public interface CourseService {

    CourseDto createCourse(CourseDto courseDto);

    CourseDto getCourseById(Long courseId);

    List<CourseDto> getAllCourses();

    CourseDto updateCourse(Long courseId, CourseDto courseDto);

    void deleteCourse(Long courseId);

    // Other methods for updating, deleting, etc. can be added as needed
}

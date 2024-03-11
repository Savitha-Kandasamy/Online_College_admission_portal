package com.team.savitha.service;

import com.team.savitha.dto.CourseDto;

import java.util.List;

public interface CourseService {

    CourseDto createCourse(CourseDto courseDto);

    CourseDto getCourseById(Long courseId);

    List<CourseDto> getAllCourses();

    CourseDto updateCourse(Long courseId, CourseDto courseDto);

    void deleteCourse(Long courseId);

    List<CourseDto> getCoursesByInstituteId(Long instituteId);

    CourseDto createCourse(Long instituteId, CourseDto courseDto);
}

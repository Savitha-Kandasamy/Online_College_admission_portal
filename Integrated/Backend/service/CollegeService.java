package com.team.savitha.service;

import java.util.List;

import com.team.savitha.dto.CollegeDto;
import com.team.savitha.dto.CourseDto;
import com.team.savitha.model.College;
import com.team.savitha.model.Course;

public interface CollegeService {

    CollegeDto createInstitute(CollegeDto collegeDTO);

    CollegeDto getInstituteById(Long instituteId);

    // List<CollegeDto> getAllInstitutes();
    List<College> getAllInstitutes();

    CollegeDto updateInstitute(Long instituteId, CollegeDto collegeDto);

    void deleteInstitute(Long instituteId);
    Course updateCourse(Long instituteId, Long courseId, CourseDto courseDto);

    void deleteCourse(Long instituteId, Long courseId);

    long getNumberOfColleges();

    long getNumberOfCourses();


    // Other methods for updating, deleting, etc. can be added as needed
}

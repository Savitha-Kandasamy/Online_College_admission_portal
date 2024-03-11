package com.team.savitha.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.team.savitha.dto.CourseDto;
import com.team.savitha.service.CourseService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@AllArgsConstructor
@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private final CourseService courseService;

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping
    public ResponseEntity<CourseDto> createCourse(@RequestBody CourseDto courseDto) {
        CourseDto savedCourse = courseService.createCourse(courseDto);
        return new ResponseEntity<>(savedCourse, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<CourseDto> getCourseById(@PathVariable("id") Long courseId) {
        CourseDto courseDto = courseService.getCourseById(courseId);
        return ResponseEntity.ok(courseDto);
    }

    @GetMapping
    public ResponseEntity<List<CourseDto>> getAllCourses() {
        List<CourseDto> courses = courseService.getAllCourses();
        return ResponseEntity.ok(courses);
    }

    @GetMapping("/byInstitute/{instituteId}")
    public ResponseEntity<List<CourseDto>> getCoursesByInstituteId(@PathVariable("instituteId") Long instituteId) {
        List<CourseDto> courses = courseService.getCoursesByInstituteId(instituteId);
        return ResponseEntity.ok(courses);
    }

    @PutMapping("{id}")
    public ResponseEntity<CourseDto> updateCourse(@PathVariable("id") Long courseId, @RequestBody CourseDto courseDto) {
        CourseDto updatedCourse = courseService.updateCourse(courseId, courseDto);
        return ResponseEntity.ok(updatedCourse);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable("id") Long courseId) {
        courseService.deleteCourse(courseId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/{instituteId}")
    public ResponseEntity<CourseDto> createCourse(@PathVariable("instituteId") Long instituteId, @RequestBody CourseDto courseDto) {
        CourseDto savedCourse = courseService.createCourse(instituteId, courseDto);
        return new ResponseEntity<>(savedCourse, HttpStatus.CREATED);
    }
}

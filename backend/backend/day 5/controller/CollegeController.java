package com.team.vel.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team.vel.dto.CollegeDto;
import com.team.vel.service.CollegeService;

import java.util.List;
@AllArgsConstructor
@RestController
@RequestMapping("/api/institutes")
public class CollegeController {

    private  CollegeService collegeService;

    @PostMapping
    public ResponseEntity<CollegeDto> createInstitute(@RequestBody CollegeDto collegeDto) {
        CollegeDto savedCollege = collegeService.createInstitute(collegeDto);
        return new ResponseEntity<>(savedCollege, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<CollegeDto> getInstituteById(@PathVariable("id") Long instituteId) {
        
            CollegeDto instituteDTO = collegeService.getInstituteById(instituteId);
            return ResponseEntity.ok(instituteDTO);
        
    }

    @GetMapping
    public ResponseEntity<List<CollegeDto>> getAllInstitutes() {
        List<CollegeDto> institutes = collegeService.getAllInstitutes();
        return ResponseEntity.ok(institutes);
    }

     @PutMapping("{id}")
    public ResponseEntity<CollegeDto> updateInstitute(@PathVariable("id") Long instituteId, @RequestBody CollegeDto collegeDto) {
        CollegeDto updatedCollege = collegeService.updateInstitute(instituteId, collegeDto);
        return ResponseEntity.ok(updatedCollege);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteInstitute(@PathVariable("id") Long instituteId) {
        collegeService.deleteInstitute(instituteId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

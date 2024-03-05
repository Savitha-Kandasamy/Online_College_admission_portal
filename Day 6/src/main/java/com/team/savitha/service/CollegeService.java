package com.team.savitha.service;

import com.team.savitha.dto.CollegeDto;

import java.util.List;

public interface CollegeService {

    CollegeDto createInstitute(CollegeDto collegeDTO);

    CollegeDto getInstituteById(Long instituteId);

    List<CollegeDto> getAllInstitutes();

    CollegeDto updateInstitute(Long instituteId, CollegeDto collegeDto);

    void deleteInstitute(Long instituteId);

    // Other methods for updating, deleting, etc. can be added as needed
}

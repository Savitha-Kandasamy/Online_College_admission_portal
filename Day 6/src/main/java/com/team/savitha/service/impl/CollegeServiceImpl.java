package com.team.savitha.service.impl;

import com.team.savitha.dto.CollegeDto;
import com.team.savitha.exception.CollegeNotFoundException;
import com.team.savitha.mapper.CollegeMapper;
import com.team.savitha.model.College;
import com.team.savitha.repository.CollegeRepo;
import com.team.savitha.service.CollegeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CollegeServiceImpl implements CollegeService {

    private final CollegeRepo collegeRepo;

    @Override
    public CollegeDto createInstitute(CollegeDto collegeDto) {
        College college = CollegeMapper.mapToCollege(collegeDto);
        College savedCollege = collegeRepo.save(college);
        return CollegeMapper.mapToCollegeDto(savedCollege);
    }

    @Override
    public CollegeDto getInstituteById(Long instituteId) {
        Optional<College> optionalCollege = collegeRepo.findById(instituteId);
        College college = optionalCollege.orElseThrow(() ->
                new CollegeNotFoundException("College not found with id: " + instituteId));
        return CollegeMapper.mapToCollegeDto(college);
    }

    @Override
    public List<CollegeDto> getAllInstitutes() {
        List<College> institutes = collegeRepo.findAll();
        return institutes.stream()
                .map(CollegeMapper::mapToCollegeDto)
                .collect(Collectors.toList());
    }

    @Override
    public CollegeDto updateInstitute(Long instituteId, CollegeDto collegeDto) {
        Optional<College> optionalCollege = collegeRepo.findById(instituteId);
        College existingCollege = optionalCollege.orElseThrow(() ->
                new CollegeNotFoundException("College not found with id: " + instituteId));

        // Update fields with values from CollegeDto
        existingCollege.setInstituteName(collegeDto.getInstituteName());
        existingCollege.setInstituteDescription(collegeDto.getInstituteDescription());
        existingCollege.setInstituteAddress(collegeDto.getInstituteAddress());
        existingCollege.setMobile(collegeDto.getMobile());
        existingCollege.setEmail(collegeDto.getEmail());
        existingCollege.setNoOfCoursesAvailable(collegeDto.getNoOfCoursesAvailable());
        // Update other fields as needed

        // Save the updated entity back to the repository
        College updatedCollege = collegeRepo.save(existingCollege);
        return CollegeMapper.mapToCollegeDto(updatedCollege);
    }

    @Override
    public void deleteInstitute(Long instituteId) {
        collegeRepo.deleteById(instituteId);
    }
    // Other methods for updating, deleting, etc. can be added as needed
}

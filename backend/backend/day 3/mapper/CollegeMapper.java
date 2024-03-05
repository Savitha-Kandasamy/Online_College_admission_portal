package com.team.vel.mapper;

import com.team.vel.dto.CollegeDto;
import com.team.vel.model.College;

public class CollegeMapper {

    public static CollegeDto mapToCollegeDto(College college) {
        CollegeDto collegeDto = new CollegeDto();
        collegeDto.setInstituteId(college.getInstituteId());
        collegeDto.setInstituteName(college.getInstituteName());
        collegeDto.setInstituteDescription(college.getInstituteDescription());
        collegeDto.setInstituteAddress(college.getInstituteAddress());
        collegeDto.setMobile(college.getMobile());
        collegeDto.setEmail(college.getEmail());
        collegeDto.setNoOfCoursesAvailable(college.getNoOfCoursesAvailable());
        return collegeDto;
    }

    public static College mapToCollege(CollegeDto collegeDto) {
        College college = new College();
        college.setInstituteId(collegeDto.getInstituteId());
        college.setInstituteName(collegeDto.getInstituteName());
        college.setInstituteDescription(collegeDto.getInstituteDescription());
        college.setInstituteAddress(collegeDto.getInstituteAddress());
        college.setMobile(collegeDto.getMobile());
        college.setEmail(collegeDto.getEmail());
        college.setNoOfCoursesAvailable(collegeDto.getNoOfCoursesAvailable());
        return college;
    }
    
}

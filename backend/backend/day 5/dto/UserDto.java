package com.team.vel.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserDto {

    private Long userId;
    private String email;
    private String password;
    private String username;
    private String mobileNumber;
    private String userRole;


}

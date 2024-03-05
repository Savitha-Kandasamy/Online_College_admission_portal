package com.team.vel.service;

import java.util.List;

import com.team.vel.dto.UserDto;

public interface UserService {

    UserDto createUser(UserDto userDto);

    UserDto getUserById(Long userId);

    List<UserDto> getAllUsers();

    UserDto updateUser(Long userId, UserDto userDto);

    void deleteUser(Long userId);

    UserDto addUser(UserDto userDto);
    
    // Other methods for updating, deleting, etc. can be added as needed
}

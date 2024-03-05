package com.team.savitha.service;

import com.team.savitha.dto.UserDto;

import java.util.List;

public interface UserService {

    UserDto createUser(UserDto userDto);

    UserDto getUserById(Long userId);

    List<UserDto> getAllUsers();

    UserDto updateUser(Long userId, UserDto userDto);

    void deleteUser(Long userId);

    UserDto addUser(UserDto userDto);
    
    // Other methods for updating, deleting, etc. can be added as needed
}

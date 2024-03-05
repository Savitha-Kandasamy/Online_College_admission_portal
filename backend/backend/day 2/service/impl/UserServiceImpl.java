package com.team.vel.service.impl;

import lombok.AllArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.team.vel.dto.UserDto;
import com.team.vel.exception.UserNotFoundException;
import com.team.vel.mapper.UserMapper;
import com.team.vel.model.User;
import com.team.vel.repository.UserRepo;
import com.team.vel.service.UserService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDto createUser(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto);
        User savedUser = userRepo.save(user);
        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public UserDto getUserById(Long userId) {
        Optional<User> optionalUser = userRepo.findById(userId);
        User user = optionalUser.orElseThrow(() ->
                new UserNotFoundException("User not found with id: " + userId));
        return UserMapper.mapToUserDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepo.findAll();
        return users.stream()
                .map(UserMapper::mapToUserDto)
                .collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(Long userId, UserDto userDto) {
        Optional<User> optionalUser = userRepo.findById(userId);
        User existingUser = optionalUser.orElseThrow(() ->
                new UserNotFoundException("User not found with id: " + userId));

        // Update fields with values from UserDto
        existingUser.setEmail(userDto.getEmail());
        existingUser.setPassword(userDto.getPassword());
        existingUser.setUsername(userDto.getUsername());
        existingUser.setMobileNumber(userDto.getMobileNumber());
        existingUser.setUserRole(userDto.getUserRole());
        // Add more fields as needed

        // Save the updated entity back to the repository
        User updatedUser = userRepo.save(existingUser);
        return UserMapper.mapToUserDto(updatedUser);
    }

    @Override
    public void deleteUser(Long userId) {
        userRepo.deleteById(userId);
    }

    // public String addUser(UserDto userDto) {
        //     // TODO Auto-generated method stub
        //     throw new UnsupportedOperationException("Unimplemented method 'addUser'");
        // }
    @Override
    public UserDto addUser(UserDto userInfo) {
        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        User k=UserMapper.mapToUser(userInfo);
        User ans=userRepo.save(k);
        return UserMapper.mapToUserDto(ans);
    }
    // Other methods for updating, deleting, etc. can be added as needed
}

package com.team.savitha.service.impl;

import com.team.savitha.dto.PaymentDto;
import com.team.savitha.exception.PaymentNotFoundException;
import com.team.savitha.mapper.PaymentMapper;
import com.team.savitha.model.Payment;
import com.team.savitha.repository.PaymentRepo;
import com.team.savitha.service.PaymentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepo paymentRepo;

    @Override
    public PaymentDto createPayment(PaymentDto paymentDto) {
        Payment payment = PaymentMapper.mapToPayment(paymentDto);
        Payment savedPayment = paymentRepo.save(payment);
        return PaymentMapper.mapToPaymentDto(savedPayment);
    }

    @Override
    public PaymentDto getPaymentById(Long paymentId) {
        Optional<Payment> optionalPayment = paymentRepo.findById(paymentId);
        Payment payment = optionalPayment.orElseThrow(() ->
                new PaymentNotFoundException("Payment not found with id: " + paymentId));
        return PaymentMapper.mapToPaymentDto(payment);
    }

    @Override
    public List<PaymentDto> getAllPayments() {
        List<Payment> payments = paymentRepo.findAll();
        return payments.stream()
                .map(PaymentMapper::mapToPaymentDto)
                .collect(Collectors.toList());
    }

    @Override
    public PaymentDto updatePayment(Long paymentId, PaymentDto paymentDto) {
        Optional<Payment> optionalPayment = paymentRepo.findById(paymentId);
        Payment existingPayment = optionalPayment.orElseThrow(() ->
                new PaymentNotFoundException("Payment not found with id: " + paymentId));

        // Update fields with values from PaymentDto
        existingPayment.setStatus(paymentDto.getStatus());
        existingPayment.setAmountPaid(paymentDto.getAmountPaid());
        // Add more fields as needed

        // Save the updated entity back to the repository
        Payment updatedPayment = paymentRepo.save(existingPayment);
        return PaymentMapper.mapToPaymentDto(updatedPayment);
    }

    @Override
    public void deletePayment(Long paymentId) {
        paymentRepo.deleteById(paymentId);
    }
    // Other methods for updating, deleting, etc. can be added as needed
}

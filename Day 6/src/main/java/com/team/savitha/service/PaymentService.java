package com.team.savitha.service;

import com.team.savitha.dto.PaymentDto;

import java.util.List;

public interface PaymentService {

    PaymentDto createPayment(PaymentDto paymentDto);

    PaymentDto getPaymentById(Long paymentId);

    List<PaymentDto> getAllPayments();

    PaymentDto updatePayment(Long paymentId, PaymentDto paymentDto);

    void deletePayment(Long paymentId);

    // Other methods for updating, deleting, etc. can be added as needed
}

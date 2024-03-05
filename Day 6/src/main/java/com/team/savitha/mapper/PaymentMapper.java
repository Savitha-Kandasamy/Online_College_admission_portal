package com.team.savitha.mapper;

import com.team.savitha.dto.PaymentDto;
import com.team.savitha.model.Payment;

public class PaymentMapper {

    public static PaymentDto mapToPaymentDto(Payment payment) {
        PaymentDto paymentDto = new PaymentDto();
        paymentDto.setPaymentId(payment.getPaymentId());
        paymentDto.setStatus(payment.getStatus());
        paymentDto.setAmountPaid(payment.getAmountPaid());
        paymentDto.setPaymentDate(payment.getPaymentDate());
        paymentDto.setModeOfPayment(payment.getModeOfPayment());
        return paymentDto;
    }

    public static Payment mapToPayment(PaymentDto paymentDto) {
        Payment payment = new Payment();
        payment.setPaymentId(paymentDto.getPaymentId());
        payment.setStatus(paymentDto.getStatus());
        payment.setAmountPaid(paymentDto.getAmountPaid());
        payment.setPaymentDate(paymentDto.getPaymentDate());
        payment.setModeOfPayment(paymentDto.getModeOfPayment());
        return payment;
    }
}

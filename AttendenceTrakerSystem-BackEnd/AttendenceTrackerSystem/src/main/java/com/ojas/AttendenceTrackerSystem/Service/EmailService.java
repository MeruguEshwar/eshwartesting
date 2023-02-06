package com.ojas.AttendenceTrackerSystem.Service;

import com.ojas.AttendenceTrackerSystem.model.EmailDetails;

import jakarta.mail.MessagingException;

public interface EmailService {

	String sendSimpleMail(EmailDetails details);

	String sendMailWithAttachment(EmailDetails details) throws MessagingException;

}

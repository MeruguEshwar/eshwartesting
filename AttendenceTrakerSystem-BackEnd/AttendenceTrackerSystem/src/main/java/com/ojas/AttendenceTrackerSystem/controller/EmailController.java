package com.ojas.AttendenceTrackerSystem.controller;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ojas.AttendenceTrackerSystem.Service.EmailService;
import com.ojas.AttendenceTrackerSystem.model.EmailDetails;

import jakarta.mail.MessagingException;



@RestController
@RequestMapping("/email")
public class EmailController {

	@Autowired
	private EmailService emailservice;

//	@PostMapping("/sendMail")
//	public String sendMail(@Validated EmailDetails details) {
//		String status = emailservice.sendSimpleMail(details);
//		return status;
//	}
	
	@PostMapping(path="/sendMail", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String sendMail(@RequestBody EmailDetails emaildetails) {
		String status = emailservice.sendSimpleMail(emaildetails);
		return status;
	}

	@PostMapping("/sendMailWithAttachment")
	public String sendMailWithAttachment(@RequestBody EmailDetails details) throws MessagingException {
		String status = emailservice.sendMailWithAttachment(details);
		return status;
	}

}

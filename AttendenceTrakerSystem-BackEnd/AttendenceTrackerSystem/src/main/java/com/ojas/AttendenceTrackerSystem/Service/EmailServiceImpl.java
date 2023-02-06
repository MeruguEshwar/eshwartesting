package com.ojas.AttendenceTrackerSystem.Service;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import com.ojas.AttendenceTrackerSystem.model.EmailDetails;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailServiceImpl implements EmailService {

	@Autowired
	private JavaMailSender javaMailSender;

	@Value("${spring.mail.username}")
	private String sender;

	public int test() {
		Random rn = new Random();
		// Random method called for integer values with fixed value.
		int num = rn.nextInt(1000000);
		String number = "123456";

		// show Random with 6 digits number.
		if (num > 100000) {
			number = String.valueOf(num);
			System.out.println("Your OTP is : " + num);
		} else {
			System.out.println("Retry!");
		}
		return num;
	}

	@Override
	public String sendSimpleMail(EmailDetails details) {
		SimpleMailMessage mailMessage = new SimpleMailMessage();
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		// int otp = test();
		MimeMessageHelper mimeMessageHelper;
		// String s = String.valueOf(otp);

		try {
			mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
			mailMessage.setFrom(sender);
			mailMessage.setTo(details.getRecipient());
			mailMessage.setText("Hi \n\n This mail is from AttandanceMangmentSystem \n\n Thank you for registering..");
			mailMessage.setSubject("Welcome To AttandanceManagmentSystem");
			// mailMessage.setText("Your OTP is:" + s);

			FileSystemResource file = new FileSystemResource("C:/Users/Bablu/Downloads/4.png");
			mimeMessageHelper.addAttachment("attachment.png", file);
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		javaMailSender.send(mailMessage);
		return "Mail Sent Successfully...";
	}

	public String sendMailWithAttachment(EmailDetails details) throws MessagingException {
		MimeMessage mm = javaMailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(mm,true);
		helper.setTo(details.getRecipient());
		helper.setText("Hi \n\n This mail is from AttandanceMangmentSystem \n\n Thank you for registering..");
		helper.setSubject("Welcome To AttandanceManagmentSystem");
		FileSystemResource file=new FileSystemResource("C:\\Users\\Bablu\\Downloads\\4.png");
		helper.addAttachment("attachment.png", file);
		javaMailSender.send(mm);
		return sender;
	}

}

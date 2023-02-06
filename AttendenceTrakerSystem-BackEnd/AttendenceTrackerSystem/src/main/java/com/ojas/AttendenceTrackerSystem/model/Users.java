package com.ojas.AttendenceTrackerSystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table
public class Users {
	@Id
	@GeneratedValue
	private int empId;
	private String empName;
	private String email;
	private String password;
	private String type;
	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Users(int empId, String empName, String email, String password, String type) {
		super();
		this.empId = empId;
		this.empName = empName;
		this.email = email;
		this.password = password;
		this.type = type;
	}
	
	public Users() {
		
	}

}

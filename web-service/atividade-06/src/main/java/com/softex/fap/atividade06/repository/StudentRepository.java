package com.softex.fap.atividade06.repository;

import com.softex.fap.atividade06.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {}

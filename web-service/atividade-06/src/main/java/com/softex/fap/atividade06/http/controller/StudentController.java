package com.softex.fap.atividade06.http.controller;

import com.softex.fap.atividade06.entity.Student;
import com.softex.fap.atividade06.service.StudentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @Autowired
    private ModelMapper modelMapper;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Student save(@RequestBody Student student) {
        return studentService.save(student);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Student> findAll() {
        return studentService.findAll();
    }

    @GetMapping("/{id}")
    public Student findById(@PathVariable("id") Long id) {
        return studentService.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Estudante não encontrado!")
        );
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable("id") Long id) {
        studentService.findById(id).map(student -> {
            studentService.deleteById(student.getId());
            return Void.TYPE;
        }).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Estudante não encontrado!")
        );
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable("id") Long id, @RequestBody Student student) {
        studentService.findById(id).map(studentBase -> {
            modelMapper.map(student, studentBase);
            studentService.save(studentBase);
            return Void.TYPE;
        }).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Estudante não encontrado!")
        );
    }
}

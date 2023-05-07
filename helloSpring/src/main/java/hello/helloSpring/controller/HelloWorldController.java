package hello.helloSpring.controller;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hello.helloSpring.service.HelloWorldService;

/**
 * HelloWorldController 2023/04/30
 *
 * Copyright Naver Webtoon Corp. All rights Reserved.
 * Naver Webtoon Corp. PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 * @author haram.jang@webtoonscorp.com
 * @since 2023/04/30
 * @description
 */

@RestController
public class HelloWorldController {

	@Autowired
	HelloWorldService helloWorldService;

	@GetMapping("/api/hello")
	public String test(@RequestParam("value") Long value) {
		System.out.println("hello!!!!!");
		return helloWorldService.getHello(value);
	}
}

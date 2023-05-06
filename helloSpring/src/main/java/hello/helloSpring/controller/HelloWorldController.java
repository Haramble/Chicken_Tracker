package hello.helloSpring.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

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

	@GetMapping("/api/hello")
	public String test() {
		System.out.println("hello!!!!");
		return "Hello, world!";
	}
}

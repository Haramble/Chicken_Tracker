package hello.helloSpring.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hello.helloSpring.entity.Hello;
import hello.helloSpring.repository.HelloRepository;

/**
 * HelloWorldService 2023/05/07
 *
 * Copyright Naver Webtoon Corp. All rights Reserved.
 * Naver Webtoon Corp. PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 * @author haram.jang@webtoonscorp.com
 * @since 2023/05/07
 * @description
 */

@Service
public class HelloWorldService {

	@Autowired
	HelloRepository helloRepository;

	public String getHello(Long lValue) {

		System.out.println("result!: " + helloRepository.findById(lValue));
		Optional<Hello> result = helloRepository.findById(lValue);

		if (result.isPresent()) {
			Hello hello = result.get();
			System.out.println("return: " + hello.getName());
			return hello.getName();
		}
		System.out.println("return: " + null);
		return null;
	}


}

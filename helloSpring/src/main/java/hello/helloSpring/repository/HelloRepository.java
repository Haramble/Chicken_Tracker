package hello.helloSpring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import hello.helloSpring.entity.Hello;

/**
 * HelloRepository 2023/05/07
 *
 * Copyright Naver Webtoon Corp. All rights Reserved.
 * Naver Webtoon Corp. PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 * @author haram.jang@webtoonscorp.com
 * @since 2023/05/07
 * @description
 */
public interface HelloRepository extends JpaRepository<Hello, Long> {
}

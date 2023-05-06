package hello.helloSpring.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

/**
 * Hello 2023/05/07
 *
 * Copyright Naver Webtoon Corp. All rights Reserved.
 * Naver Webtoon Corp. PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 * @author haram.jang@webtoonscorp.com
 * @since 2023/05/07
 * @description
 */

@Entity
public class Hello {

	@Id
	private Long _id;

	public void setId(Long id) {
		this._id = id;
	}

	public Long getId() {
		return _id;
	}

	@Column
	String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPostList } from '../../lib/apis/postApis';
import PostItem from './PostItem';
import PostPicture from './PostPicture';

export default function PostList({ user, type }) {
	const [postList, setPostList] = useState([]);
	const [toggle, setToggle] = useState(true);

	useEffect(() => {
		getPostList(user).then((res) => {
			setPostList([...res.data.post]);
		});
	}, [user]);

	return (
		<>
			<section>
				<div>
					<button onClick={() => setToggle(true)}>글 보기</button>
					<button onClick={() => setToggle(false)}>사진만</button>
				</div>
				<div>
					{toggle
						? postList.map((post, idx) => (
								<PostItem
									key={idx}
									{...post}
									setPostList={setPostList}
									user={user}
									type={type}
								/>
						  ))
						: postList.map((post, idx) => <PostPicture key={idx} {...post} />)}
				</div>
			</section>
		</>
	);
}

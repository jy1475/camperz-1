import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../../component/common/Header';
import PostDetailContent from '../../component/post/PostDetailContent';
import PostDetailComment from '../../component/post/PostDetailComment';
import CommentBox from '../../component/common/CommentBox';
import boxIcon from '../../assets/icons/basic_profile_chat.png';
import { useEffect } from 'react';
//post 상세 페이지를 보려면 해당 페이지의 id가 필요하다.
export default function PostDetailPage() {
	const { id } = useParams();
	const [addComment, setAddComment] = useState(1);
	useEffect(() => {
		console.log(addComment);
	}, [addComment]);
	return (
		<>
			<Header />
			<S_Main>
				<PostDetailContent id={id} />
				<PostDetailComment post_id={id} addComment={addComment} />
			</S_Main>
			<CommentBox post_id={id} onAdd={setAddComment} />
		</>
	);
}

const S_Main = styled.main`
	margin: 20px auto 0;
`;

import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../component/common/Header';
import PostDetailContent from '../../component/post/PostDetailContent';
import PostDetailComment from '../../component/post/PostDetailComment';
import CommentBox from '../../component/common/CommentBox';
import boxIcon from '../../assets/icons/basic_profile_chat.png';
import leftArrow from '../../assets/icons/icon_arrow_left.png';
//post 상세 페이지를 보려면 해당 페이지의 id가 필요하다.
export default function PostDetailPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const sayHi = () => {
		navigate(-1);
	};
	return (
		<>
			<Header />
			<S_Main>
				<PostDetailContent id={id} />
				<PostDetailComment post_id={id} />
			</S_Main>
			<CommentBox post_id={id} boxIcon={boxIcon} />
		</>
	);
}

const S_Main = styled.main`
  margin: 20px auto 0;
`;

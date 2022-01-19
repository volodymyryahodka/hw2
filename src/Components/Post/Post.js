const Post = ({post: {id, userId, title, body}}) => {
	return (
		<div>
			<div>Id: {id}</div>
			<div>UserId: {userId}</div>
			<div>Title: {title}</div>
			<div>Body: {body}</div>
		</div>
	);
};

export default Post;
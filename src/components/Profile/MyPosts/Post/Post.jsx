import s from './Post.module.css';
const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://bugaga.ru/uploads/posts/2017-03/1489052030_kotik-hosiko-12.jpg" />
            {props.message}
            <div>
                <span>like {props.likesCounts}</span>
            </div>
        </div>
    );
}

export default Post;
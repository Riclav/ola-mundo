import styles from './Inicio.module.css';

import posts from 'json/posts.json';
import Post from "components/PostCard";
import PostCard from 'components/PostCard';

export default function Inicio() {
    return (
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    )
}
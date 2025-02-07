import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    return (
        <main>
            {posts.map(post => <Article key={post.title}><Article title={post.title} date={post.date} preview={post.preview} /></Article>)}
        </main>
    )
}
export default ArticleList;
import { useState, useEffect } from 'react';
import { MediumPost } from '../interfaces/MediumPost';
import { getMediumPosts } from '../utils/api';

function Medium() {
  const [articles, setArticles] = useState<MediumPost[]>([]);

  useEffect(() => {
    getMediumPosts().then((data) => {
      // Set the second parameter (the second number) to the max amount of post that you want to display
      setArticles(data.slice(0, 3));
    });
  }, []);

  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.link}>
            <a href={article.link}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Medium;

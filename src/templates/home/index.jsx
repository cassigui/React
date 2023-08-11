import { useEffect, useState, useCallback } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/loadPosts'
import { Button } from '../../components/Button';
import { TextInput } from '../../components/textInput';

export const Home = () => {

  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(6);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue ? allPosts.filter(post => {
    return post.title.toLowerCase().includes(
      searchValue.toLowerCase()
    );
  }) : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, [])

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage])

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  }

  const handleChange = (e) => {
    const { value } = e.target
    setSearchValue(value);
  }

  return (
    <section className="container">

      <div className='searchContainer'>

        {!!searchValue && (
          <h1>Search value: {searchValue}</h1>
        )}

        <TextInput
          searchValue={searchValue}
          handleChange={handleChange}
        />

      </div>

      {
        filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )
      }

      {
        filteredPosts.length === 0 && (
          <p style={{ color: "red" }}>Não existem posts</p>
        )
      }

      <div className="btn-container">
        {!searchValue && (
          <Button
            text="Load more posts"
            onClick={loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </div>
    </section >
  );
}

// export class Home2 extends Component {
//   state = {
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 6,
//     searchValue: ""
//   };

//   async componentDidMount() {
//     await this.loadPosts();
//   }

//   loadPosts = async () => {
//     const { page, postsPerPage } = this.state;

//     const postsAndPhotos = await loadPosts();
//     this.setState({
//       posts: postsAndPhotos.slice(page, postsPerPage),
//       allPosts: postsAndPhotos,
//     });
//   }

//   loadMorePosts = () => {
//     const {
//       page,
//       postsPerPage,
//       allPosts,
//       posts
//     } = this.state;
//     const nextPage = page + postsPerPage;
//     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
//     posts.push(...nextPosts);

//     this.setState({ posts, page: nextPage });
//   }

//   handleChange = (e) => {
//     const { value } = e.target
//     this.setState({ searchValue: value })
//   }

//   render() {
//     const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
//     const noMorePosts = page + postsPerPage >= allPosts.length;

//     const filteredPosts = !!searchValue ? allPosts.filter(post => {
//       return post.title.toLowerCase().includes(
//         searchValue.toLowerCase()
//       );
//     }) : posts;

//     return (
//       <section className="container">

//         <div className='searchContainer'>

//           {!!searchValue && (
//             <h1>Search value: {searchValue}</h1>
//           )}

//           <TextInput
//             searchValue={searchValue}
//             handleChange={this.handleChange}
//           />

//         </div>

//         {
//           filteredPosts.length > 0 && (
//             <Posts posts={filteredPosts} />
//           )
//         }

//         {
//           filteredPosts.length === 0 && (
//             <p style={{ color: "red" }}>Não existem posts</p>
//           )
//         }

//         <div className="btn-container">
//           {!searchValue && (
//             <Button
//               text="Load more posts"
//               onClick={this.loadMorePosts}
//               disabled={noMorePosts}
//             />
//           )}
//         </div>
//       </section >
//     );
//   }
// }

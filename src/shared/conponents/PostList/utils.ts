import { Author, Post } from '../../../store/models';

export  const postsWithAuthors = (posts:Post[], authors:Author[]):Post[] =>{
  let arr = []
  if (posts.length && authors.length) {
    for (let post of posts) {
      arr.push ({...post, user: authors.filter(el => el.id === post.userId)[0].name})
    }
  }
  return arr
}
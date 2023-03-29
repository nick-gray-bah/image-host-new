import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";

// const mainFeaturedPost = {
//     title: 'Title of a longer featured blog post',
//     description:
//         "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
//     image: 'https://source.unsplash.com/random',
//     imageText: 'main image description',
//     linkText: 'Continue reading…',
// };

// const featuredPosts = [
//     {
//         title: 'Featured post',
//         date: 'Nov 12',
//         description:
//             'This is a wider card with supporting text below as a natural lead-in to additional content.',
//         image: 'https://source.unsplash.com/random',
//         imageLabel: 'Image Text',
//     },
//     {
//         title: 'Post title',
//         date: 'Nov 11',
//         description:
//             'This is a wider card with supporting text below as a natural lead-in to additional content.',
//         image: 'https://source.unsplash.com/random',
//         imageLabel: 'Image Text',
//     },
// ];

// const posts = [post1, post2, post3];

export default function Blog() {
  return (
    <>
      <Container maxWidth="lg" sx={{ pb: 4 }}>
        <Header title="Booz | Allen | Hamilton" />
        <main>
          <Grid container>
            <Carousel />
          </Grid>
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}

          {/* <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid> */}
        </main>
      </Container>
      <Footer
        title="Booz | Allen | Hamilton"
        description="Modern Tech For Modern Missions"
      />
    </>
  );
}

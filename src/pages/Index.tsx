
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Poems from '../components/Poems';
import Book from '../components/Book';
import InstagramFeed from '../components/InstagramFeed';
import Footer from '../components/Footer';
import { Toaster } from 'sonner';

const Index = () => {
  useEffect(() => {
    document.title = 'Bia Ferrario - Arte e Poesia';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" />
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Poems />
        <Book />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

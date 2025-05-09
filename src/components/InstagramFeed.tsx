
import { Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Componente de feed do Instagram atualizado com imagens reais
const InstagramFeed = () => {
  const instagramPosts = [
    {
      id: 1,
      imageUrl: "/lovable-uploads/c332e9ef-9a2e-4e7c-b53c-676c035832a6.png",
      likes: 124,
      comments: 18,
      caption: "Pensar em lar com mais ímpeto..."
    },
    {
      id: 2,
      imageUrl: "/lovable-uploads/353fb5d4-1f38-4ec7-9f7e-9cbad3dc612b.png",
      likes: 89,
      comments: 7,
      caption: "É que depois da última vez eu verdadeiramente quis."
    },
    {
      id: 3,
      imageUrl: "/lovable-uploads/e1de8556-05dc-4666-bfaa-a5ca87105589.png",
      likes: 156,
      comments: 23,
      caption: "Personagens que contam histórias..."
    },
    {
      id: 4,
      imageUrl: "/lovable-uploads/40bed54e-9fcc-4ce5-9eef-b29a215b0869.png",
      likes: 102,
      comments: 12,
      caption: "De há guerra por tudo que é mais sagrado."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="h-6 w-6 text-accent" />
            <h2 className="heading-lg">Instagram</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acompanhe meu processo criativo e os bastidores do meu trabalho artístico
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map(post => (
            <div key={post.id} className="group relative overflow-hidden rounded-lg shadow-md">
              <img 
                src={post.imageUrl} 
                alt={`Instagram post ${post.id}`}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <div className="flex items-center gap-4 text-white mb-3">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    {post.likes}
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    {post.comments}
                  </div>
                </div>
                <p className="text-white text-sm text-center">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-accent text-accent hover:bg-accent hover:text-white"
            onClick={() => window.open("https://www.instagram.com/biaferrario/", "_blank")}
          >
            <Instagram className="mr-2 h-4 w-4" /> Seguir no Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;

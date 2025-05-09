import { Button } from "@/components/ui/button";
import { BookOpen, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface BookPage {
  id: number;
  imageSrc: string;
  alt: string;
  type: "cover" | "content" | "text";
  content?: string;
  title?: string;
}

const Book = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const bookPages: BookPage[] = [
    {
      id: 1,
      imageSrc: "/lovable-uploads/a289fe61-3514-4215-884c-867e4f73fb35.png",
      alt: "Capa do livro O Guia do Palhaço Ilustrado",
      type: "cover",
      title: "Capa"
    },
    {
      id: 2,
      imageSrc: "/lovable-uploads/28161d4e-2263-44ad-a25b-cadcd8177b04.png",
      alt: "Página de título do livro",
      type: "cover",
      title: "Folha de Rosto"
    },
    {
      id: 3,
      imageSrc: "/lovable-uploads/1eb01ac4-816e-4a84-be48-977525e8edb2.png",
      alt: "Dedicatória do livro",
      type: "text",
      title: "Dedicatória",
      content: "Principalmente à minha vó Carminha e a meu pai, César. Que deram vida à Arte, ao Teatro e às palhaçadas aqui dentro — e garantem nunca deixá-las morrer."
    },
    {
      id: 4,
      imageSrc: "/lovable-uploads/d4fa86e6-18c9-42ec-815b-532b55ecffe1.png",
      alt: "Prólogo do livro",
      type: "text",
      title: "Prólogo",
      content: "Tato e cautela, sou um livro palhaço. Se não sabe do que se trata, eu menos ainda. O dicionário não me define (aprisiona), lá nem existo. Sou uma excrecência, uma demasia, um excesso, superfluidade; coisas que desequilibram a harmonia de um todo sem a responsabilidade de restituir qualquer sentido. Sou caminhos sem chegada. Tudo isso e nada disso, no fim sou pedaços..."
    },
    {
      id: 5,
      imageSrc: "/lovable-uploads/7aff8c62-e844-4e15-a151-a048a7214e85.png",
      alt: "Introdução do livro",
      type: "text",
      title: "Introdução",
      content: "Senhoras e senhores, respeitável público, Sejam bem vindos à tenda d'O Guia do Palhaço Ilustrado, onde todos os palhaços que conseguimos enfiar num único carro descarregam suas identidades e brincadeiras, trocando de fantasias até o dia virar noite e as coxias ficarem abarrotadas de estripulias..."
    },
    {
      id: 6,
      imageSrc: "/lovable-uploads/78c6ab8c-5b3d-401d-8d91-ab72578e7b93.png",
      alt: "O Arlequim Preguiçoso",
      type: "content",
      title: "O Arlequim Preguiçoso"
    },
    {
      id: 7,
      imageSrc: "/lovable-uploads/4eed60d4-9122-4d2a-a4ba-bbfb55810b25.png",
      alt: "Ilustração de palhaço colorida",
      type: "content",
      title: "Ilustração"
    },
    {
      id: 8,
      imageSrc: "/lovable-uploads/512a93cf-dd52-4d6c-a589-1ced8779886d.png",
      alt: "O Pierrot Apaixonado",
      type: "content",
      title: "O Pierrot Apaixonado"
    },
    {
      id: 9,
      imageSrc: "/lovable-uploads/6e9d101c-5a7a-4b7d-8956-06b37b1616a9.png",
      alt: "Ilustração de Pierrot",
      type: "content",
      title: "Ilustração"
    },
    {
      id: 10,
      imageSrc: "/lovable-uploads/534bfcaa-f39f-490f-bf54-41f117ffb307.png",
      alt: "A Colombina",
      type: "content",
      title: "A Colombina"
    },
    {
      id: 11,
      imageSrc: "/lovable-uploads/b1f65984-e8ba-4d1e-ab52-8a55e8a52a97.png",
      alt: "Ilustração da Colombina",
      type: "content",
      title: "Ilustração"
    },
    {
      id: 12,
      imageSrc: "/lovable-uploads/210e0f53-427c-4262-b718-efbad7a7abc5.png",
      alt: "Sobre a autora",
      type: "text",
      title: "Sobre a Autora",
      content: "Beatriz Ferrario é artista visual com raízes nas artes cênicas. Com a sensibilidade de quem cresceu nos palcos e o conhecimento adquirido na licenciatura em Artes Visuais, seu trabalho constrói uma trajetória que se relaciona com a pintura, o teatro e o cinema."
    }
  ];

  const totalPages = bookPages.length;

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };
  
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const handleBuyNow = () => {
    const phoneNumber = "5584987824228";
    const message = encodeURIComponent("Oi gostaria de comprar O guia do palhaço ilustrado!!");
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappLink, "_blank");
    toast.success("Redirecionando para o WhatsApp...");
  };

  const displayedPages = () => {
    // This logic decides which page numbers to show in pagination
    const pages = [];
    
    // Always show first page
    pages.push(0);
    
    // Calculate range around current page
    const start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages - 2, currentPage + 1);
    
    // Add ellipsis after first page if needed
    if (start > 1) pages.push(-1); // -1 indicates ellipsis
    
    // Add pages around current
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    // Add ellipsis before last page if needed
    if (end < totalPages - 2) pages.push(-2); // -2 indicates ellipsis
    
    // Always show last page if more than 1 page
    if (totalPages > 1) pages.push(totalPages - 1);
    
    return pages;
  };

  return (
    <section id="livro" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 font-serif text-accent">O Guia do Palhaço Ilustrado</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O primeiro livro de Bia Ferrario, com ilustrações originais e poemas que capturam a essência dos palhaços e sua arte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12">
          <div className="order-2 lg:order-1">
            <h3 className="heading-md mb-4">Uma jornada através de palhaços e sentimentos</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              O Guia do Palhaço Ilustrado é o primeiro livro de Bia Ferrario e conta com 20 ilustrações originalmente 
              produzidas pela artista em pintura à óleo sobre papel, representando palhaços diversos, 
              personagens do seu imaginário provenientes de um repertório artístico que remonta à tradição 
              artística de sua família e sua infância nas coxias do teatro.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              As ilustrações são acompanhadas de versos poéticos de autoria da artista em uma proposta lúdica, 
              marcando sua incursão na literatura e a ênfase na sua proeminente atuação como arte-educadora.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-accent hover:bg-accent/90 text-white" 
                size="lg"
                onClick={() => window.open("https://pubhtml5.com/abdfk/jykn/", "_blank")}
              >
                <BookOpen className="mr-2 h-4 w-4" /> Ler Completo
              </Button>
              <Button 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-white" 
                size="lg"
                onClick={() => window.scrollTo({ top: document.getElementById('book-preview')?.offsetTop, behavior: 'smooth' })}
              >
                Ver Páginas
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                size="lg"
                onClick={handleBuyNow}
              >
                <ShoppingCart className="mr-2 h-4 w-4" /> Comprar Agora
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rotate-3 bg-accent/10 rounded-lg transform -z-10"></div>
              <img 
                src="/lovable-uploads/a289fe61-3514-4215-884c-867e4f73fb35.png" 
                alt="Livro O Guia do Palhaço Ilustrado de Bia Ferrario" 
                className="max-w-sm w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-full shadow-lg">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center text-white font-serif text-lg">
                  1ª Ed.
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="book-preview" className="mt-20">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-medium">Folheie o livro</h3>
            <div className="text-sm text-muted-foreground">Página {currentPage + 1} de {totalPages}</div>
          </div>
          
          <div className="relative">
            <div className="bg-secondary/50 p-8 mb-6 rounded-lg">
              <div className="relative max-w-3xl mx-auto">
                <button 
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md disabled:opacity-50 disabled:pointer-events-none z-10"
                >
                  <ChevronLeft />
                </button>

                <div className={`book-page-container ${bookPages[currentPage].type === 'text' ? 'bg-[#f8f0dd]' : ''} relative rounded-lg overflow-hidden shadow-2xl mx-auto`}>
                  {bookPages[currentPage].type === 'text' ? (
                    <div className="bg-[#f8f0dd] p-8 min-h-[500px] flex flex-col items-center justify-center text-center">
                      <h4 className="font-serif text-2xl mb-6 text-amber-950">{bookPages[currentPage].title}</h4>
                      <ScrollArea className="h-[350px] w-full">
                        <div className="px-6 py-4 whitespace-pre-line text-amber-950/90 text-lg font-serif leading-relaxed">
                          {bookPages[currentPage].content}
                        </div>
                      </ScrollArea>
                    </div>
                  ) : (
                    <img 
                      src={bookPages[currentPage].imageSrc} 
                      alt={bookPages[currentPage].alt}
                      className={cn(
                        "w-full h-auto max-h-[500px] object-contain",
                        bookPages[currentPage].type === 'content' && "bg-[#f8f0dd]"
                      )}
                    />
                  )}
                </div>

                <button 
                  onClick={nextPage}
                  disabled={currentPage === totalPages - 1}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md disabled:opacity-50 disabled:pointer-events-none z-10"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
            
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={prevPage}
                    className={currentPage === 0 ? "pointer-events-none opacity-50" : "cursor-pointer"} 
                  />
                </PaginationItem>
                
                {displayedPages().map((page, index) => 
                  page < 0 ? (
                    <PaginationItem key={`ellipsis-${index}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={page}>
                      <PaginationLink
                        isActive={currentPage === page}
                        onClick={() => goToPage(page)}
                      >
                        {page + 1}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={nextPage}
                    className={currentPage === totalPages - 1 ? "pointer-events-none opacity-50" : "cursor-pointer"} 
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              "Existem apenas 150 cópias deste livro e uma delas está em suas mãos." <br />
              — <i>O Guia do Palhaço Ilustrado</i>, 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;

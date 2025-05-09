
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

interface Poem {
  id: number;
  title: string;
  content: string;
}

const poems: Poem[] = [
  {
    id: 1,
    title: "Segurança",
    content: `Se é nos braços ou nas paredes que encontro alguma segurança, isso não me importa. 
Me importa se tenho você/ se o chão é firme/ se o coração pulsa/ que as infiltracões não tomem conta.

Eu quero pensar em lar com mais
ímpeto do que da ultima vez
pra não correr o risco da goteira inundar, das rachaduras ramificarem, de você virar estranho.

É que sei: Se dessa vez a fundação for firme, as paredes bem pintadas;
se eu não deixar de aguar as plantas;
se dessa vez eu segura com menos força
há de vingar.`
  },
  {
    id: 2,
    title: "Depois da Última Vez",
    content: `É que depois da ultima vez fiquei disposta. 
Depois da ultima vez eu verdadeiramente quis.`
  },
  {
    id: 3,
    title: "Começo",
    content: `Todos os dias chego na fundação, abro todas as portas e cadeados, 
abro meu ateliê de chave de senha, abro as janelas, 
pego um dos desenhos e começo.

Todos os dias abro o coração, 
me desfaço das travas, 
assumo que o erro é oportuno, 
estalo os ombros, respiro fundo e começo.

Esse ano vou lançar um livro
E a vida só começa.`
  },
];

const Poems = () => {
  return (
    <section id="poemas" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Poemas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Palavras que dançam entre sentimentos e imagens, 
            tecendo versos que capturam a essência da experiência humana.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="poem-1" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              {poems.map(poem => (
                <TabsTrigger key={poem.id} value={`poem-${poem.id}`} className="font-serif">
                  {poem.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {poems.map(poem => (
              <TabsContent key={poem.id} value={`poem-${poem.id}`} className="animate-fade-in">
                <div className="poem-card">
                  <h3 className="text-2xl font-serif mb-4 text-accent">{poem.title}</h3>
                  <Separator className="mb-6 bg-accent/20" />
                  <div className="whitespace-pre-line text-foreground/90 leading-relaxed font-light">
                    {poem.content}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Poems;

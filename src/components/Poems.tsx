
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
    title: "Amanhecer",
    content: `Cores desvendam o horizonte
Em silêncio, a espera se desfaz
O mundo respira novamente
E a luz faz renascer a paz.

Cada raio toca a terra
Em um beijo morno e gentil
Desperto para outro dia
Onde a esperança se faz mil.`
  },
  {
    id: 2,
    title: "Entre Palavras",
    content: `No espaço entre palavras não ditas
Mora o mais sincero sentimento
O que os lábios contiveram
O que o peito guarda com atenção.

Silêncios carregam verdades
Que vozes não conseguem vestir
O que não se pronuncia
Frequentemente grita mais alto.

Entre letras, entre linhas
Entre os traços da nossa história
O não dito permanece eterno
Em um eco contínuo de memória.`
  },
  {
    id: 3,
    title: "Cores da Alma",
    content: `Pinto minha alma com cores que ninguém vê
Tons que escapam do espectro visível
Emoções que transbordam da tela
E pingam no chão da realidade.

Cada pincelada é um suspiro
Cada textura, um sentimento guardado
Nas misturas improváveis de pigmentos
Revela-se a verdade do ser calado.

A arte que flui de minhas mãos
É confissão que dispensa palavras
É grito silencioso que ecoa
Nas paredes brancas do mundo.`
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

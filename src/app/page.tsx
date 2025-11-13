import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">ReformaMarket</h1>
        <div className="space-x-4">
          <Link href="/auth/login">
            <Button variant="ghost">Entrar</Button>
          </Link>
          <Link href="/auth/register">
            <Button>Cadastrar</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Reformas que <span className="text-primary">competem</span> por você
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Publique seu projeto de reforma e receba propostas de prestadores qualificados.
          Compare, converse e contrate o melhor para sua obra.
        </p>
        <div className="space-x-4">
          <Link href="/auth/register?role=owner">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Publicar Projeto
            </Button>
          </Link>
          <Link href="/auth/register?role=provider">
            <Button size="lg" variant="outline">
              Sou Prestador
            </Button>
          </Link>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Como Funciona</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">1. Publique seu Projeto</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Descreva detalhadamente sua reforma: fotos, plantas, orçamento estimado e prazo.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">2. Receba Propostas</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Prestadores qualificados enviam orçamentos detalhados competindo pelo seu projeto.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">3. Contrate e Avalie</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Compare propostas, converse com prestadores e avalie o serviço após conclusão.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Categorias */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-12">Serviços Disponíveis</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            'Marcenaria', 'Pintura', 'Piso', 'Pedras/Bancadas',
            'Box/Vidros', 'Ar-condicionado', 'Elétrica', 'Hidráulica',
            'Gesso', 'Arquitetura', 'Design de Interiores'
          ].map((category) => (
            <Badge key={category} variant="secondary" className="text-center py-2">
              {category}
            </Badge>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Casos de Sucesso</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                "Recebi 5 propostas excelentes para minha reforma de cozinha. Economizei tempo e dinheiro!"
              </p>
              <p className="font-semibold">- Maria Silva, Proprietária</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                "A plataforma me conectou com projetos incríveis. Meu negócio cresceu 300%!"
              </p>
              <p className="font-semibold">- João Santos, Prestador</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 py-16 text-center bg-primary text-white">
        <h3 className="text-3xl font-bold mb-6">Pronto para começar?</h3>
        <p className="text-xl mb-8">Junte-se a milhares de proprietários e prestadores na ReformaMarket</p>
        <Link href="/auth/register">
          <Button size="lg" variant="secondary">
            Criar Conta Gratuita
          </Button>
        </Link>
      </section>
    </div>
  )
}
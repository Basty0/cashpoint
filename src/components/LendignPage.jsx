import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Search, DollarSign, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export default function LendignPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center"></header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Gérez vos points de vente avec facilité
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Enregistrez vos transactions, suivez vos revenus et optimisez
                  votre activité avec CashPoint Manager.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Essai gratuit</Button>
                <Button variant="outline">En savoir plus</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Fonctionnalités principales
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <BarChart3 className="h-8 w-8 mb-2" />
                  <CardTitle>Suivi des transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Enregistrez facilement toutes vos transactions quotidiennes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Search className="h-8 w-8 mb-2" />
                  <CardTitle>Recherche avancée</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Retrouvez rapidement n'importe quelle transaction grâce à
                    notre moteur de recherche puissant.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <DollarSign className="h-8 w-8 mb-2" />
                  <CardTitle>Analyse des revenus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Visualisez instantanément votre chiffre d'affaires sans
                    calculs complexes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Tarifs flexibles
            </h2>
            <Tabs defaultValue="monthly" className="w-full max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="monthly">Mensuel</TabsTrigger>
                <TabsTrigger value="yearly">Annuel</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Gratuit</CardTitle>
                      <CardDescription>
                        Pour les petites entreprises
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">Ar 0 / mois</p>
                      <ul className="mt-4 space-y-2">
                        <li>Jusqu'à 100 transactions/mois</li>
                        <li>Recherche basique</li>
                        <li>Rapport mensuel</li>
                        <li>1 point de vente</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Commencer</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Pro</CardTitle>
                      <CardDescription>
                        Pour les entreprises en croissance
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">Ar 5,000 / mois</p>
                      <ul className="mt-4 space-y-2">
                        <li>Transactions illimitées</li>
                        <li>Recherche avancée</li>
                        <li>Rapports personnalisés</li>
                        <li>Jusqu'à 3 points de vente</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">S'abonner</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Entreprise</CardTitle>
                      <CardDescription>
                        Pour les grandes entreprises
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">Ar 20,000 / mois</p>
                      <ul className="mt-4 space-y-2">
                        <li>Fonctionnalités Pro +</li>
                        <li>Support prioritaire</li>
                        <li>API personnalisée</li>
                        <li>Points de vente illimités</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Contacter les ventes</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="yearly">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Gratuit</CardTitle>
                      <CardDescription>
                        Pour les petites entreprises
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">Ar 0 / an</p>
                      <ul className="mt-4 space-y-2">
                        <li>Jusqu'à 100 transactions/mois</li>
                        <li>Recherche basique</li>
                        <li>Rapport mensuel</li>
                        <li>1 point de vente</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Commencer</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Pro</CardTitle>
                      <CardDescription>
                        Pour les entreprises en croissance
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">Ar 50,000 / an</p>
                      <ul className="mt-4 space-y-2">
                        <li>Transactions illimitées</li>
                        <li>Recherche avancée</li>
                        <li>Rapports personnalisés</li>
                        <li>Jusqu'à 3 points de vente</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">S'abonner</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Entreprise</CardTitle>
                      <CardDescription>
                        Pour les grandes entreprises
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">Ar 200,000 / an</p>
                      <ul className="mt-4 space-y-2">
                        <li>Fonctionnalités Pro +</li>
                        <li>Support prioritaire</li>
                        <li>API personnalisée</li>
                        <li>Points de vente illimités</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Contacter les ventes</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <DollarSign className="h-6 w-6" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 CashPoint Manager. Tous droits réservés.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
            <Link
              className="text-sm hover:underline underline-offset-4"
              href="#"
            >
              Politique de confidentialité
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4"
              href="#"
            >
              Conditions d'utilisation
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4"
              href="#"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

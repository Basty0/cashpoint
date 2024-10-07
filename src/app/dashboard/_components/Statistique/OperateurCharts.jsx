"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart with text";

// Remplacer les données du graphique par des données d'opérateurs
const chartData = [
  { operateur: "Orange", clients: 275, fill: "var(--color-orange)" },
  { operateur: "SFR", clients: 200, fill: "var(--color-sfr)" },
  { operateur: "Free", clients: 287, fill: "var(--color-free)" },
  { operateur: "Bouygues", clients: 173, fill: "var(--color-bouygues)" },
  { operateur: "Autres", clients: 190, fill: "var(--color-autres)" },
];

// Mettre à jour la configuration du graphique
const chartConfig = {
  clients: {
    label: "Clients",
  },
  Orange: {
    label: "Orange",
    color: "hsl(var(--chart-1))",
  },
  SFR: {
    label: "SFR",
    color: "hsl(var(--chart-2))",
  },
  Free: {
    label: "Free",
    color: "hsl(var(--chart-3))",
  },
  Bouygues: {
    label: "Bouygues",
    color: "hsl(var(--chart-4))",
  },
  Autres: {
    label: "Autres",
    color: "hsl(var(--chart-5))",
  },
};

const OperateurCharts = () => {
  const totalClients = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.clients, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Répartition des clients par opérateur</CardTitle>
        <CardDescription>Janvier - Juin 2024</CardDescription>
      </CardHeader>
      <div className=" flex justify-center items-center">
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="clients"
                nameKey="operateur"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {totalClients.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Clients
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </div>
    </Card>
  );
};

export default OperateurCharts;

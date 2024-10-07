import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import TabsDetail from "./TabsDetail";

const TabsTransaction = ({ transaction }) => {
  return (
    <div>
      <Tabs defaultValue="detail" className="w-full">
        <TabsList>
          <TabsTrigger value="detail">Détails </TabsTrigger>
          <TabsTrigger value="modifier">Modifier </TabsTrigger>
        </TabsList>
        <TabsContent value="detail">
          <TabsDetail transaction={transaction} />
        </TabsContent>
        <TabsContent value="modifier">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsTransaction;

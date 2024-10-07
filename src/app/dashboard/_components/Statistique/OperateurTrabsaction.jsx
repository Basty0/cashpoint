import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const OperateurTrabsaction = (data) => {
  return (
    <div className="my-3">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.data.map((item) => (
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 ">
                <Avatar>
                  <AvatarImage
                    src={`https://cash-point.sopera.mg/${item.operateur.image}`}
                  />
                  <AvatarFallback>OP</AvatarFallback>
                </Avatar>
                <h1>{item.operateur.nom}</h1>
              </div>
            </CardHeader>
            <CardContent>
              <div className=" text-center items-center">
                <h1 className="text-4xl mx-3">{item.total_transactions}</h1>
                <h1>{item.total_montant} Ar</h1>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OperateurTrabsaction;

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import tonyImg from "@/assets/team-tony.jpeg";
import justinImg from "@/assets/team-justin.jpeg";
import sallyImg from "@/assets/team-sally.jpeg";
import jessicaImg from "@/assets/team-jessica.jpeg";

const teamMembers = [
  {
    name: "Tony L",
    image: tonyImg
  },
  {
    name: "Justin S",
    image: justinImg
  },
  {
    name: "Sally M",
    image: sallyImg
  },
  {
    name: "Jessica L",
    image: jessicaImg
  }
];

export const Team = () => {
  return (
    <section id="team" className="py-20 bg-vault-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-vault-navy mb-4">
            Meet our team
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-vault-navy">
                  {member.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="vault" size="lg">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};
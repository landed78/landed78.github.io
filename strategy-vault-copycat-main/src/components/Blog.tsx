import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import blogMaImg from "@/assets/blog-ma.jpeg";
import blogAgileImg from "@/assets/blog-agile.jpeg";
import blogOpportunitiesImg from "@/assets/blog-opportunities.jpeg";
import blogConsistencyImg from "@/assets/blog-consistency.jpeg";

const blogPosts = [
  {
    title: "M&A - Thinking ahead before acquiring a business",
    image: blogMaImg
  },
  {
    title: "Projects - Agile coaching strategies",
    image: blogAgileImg
  },
  {
    title: "Business Analysis - How to spot opportunities",
    image: blogOpportunitiesImg
  },
  {
    title: "Business Analysis - How to add consistency value",
    image: blogConsistencyImg
  }
];

export const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-vault-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-vault-navy mb-4">
            Our blog
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-vault-navy/20 group-hover:bg-vault-navy/10 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-vault-navy mb-4 leading-tight">
                    {post.title}
                  </h3>
                  <Button variant="link" className="p-0 h-auto text-vault-blue hover:text-vault-navy">
                    Read more
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
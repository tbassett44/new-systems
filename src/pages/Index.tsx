
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ArrowRight, Leaf, Users, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Leaf className="h-4 w-4" />
            Living Blueprint for Systems Redesign
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            New Systems and Structures
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Supporting Better Feedback, Effective Governance, and Improved Wellbeing
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/papers">
              <Button size="lg" className="group">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore White Papers
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Dignity-Centered</CardTitle>
              <CardDescription>
                Every proposal centers human dignity and the inherent worth of all beings
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Regenerative</CardTitle>
              <CardDescription>
                Systems designed to heal, restore, and enhance life rather than extract from it
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Participatory</CardTitle>
              <CardDescription>
                Empowering communities to co-create the systems that serve them
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Authors */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold mb-4">Authors</h2>
          <div className="space-y-2">
            <p className="text-lg">
              <strong>Juicy Life</strong> - <a href="mailto:juicy@actualize.earth" className="text-primary hover:underline">juicy@actualize.earth</a>
            </p>
            <p className="text-muted-foreground">
              and <strong>Aether</strong>, an AI collaborator powered by GPT-4 by OpenAI
            </p>
          </div>
        </div>

        {/* Vision */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
              We are living in a pivotal evolutionary moment—one that mirrors the metamorphosis of 
              a caterpillar into a butterfly. This collection offers a set of high-level, yet actionable 
              systems change proposals that aims to support a more intelligent, responsive, and 
              life-affirming civilization.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;

import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, GitBranch, Users, Heart, MessageCircle, ArrowRight, Lightbulb, Edit, Share2 } from "lucide-react";

const Contribute = () => {
  useEffect(() => {
    document.title = "Contribute | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join the collaborative effort to redesign systems for human flourishing. Learn how to contribute to this living manifesto.');
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Co-Create the Future
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          This living manifesto thrives on collective wisdom. Your perspective, insights, and contributions 
          help shape a more dignified and regenerative civilization.
        </p>
      </div>

      {/* Why Contribute */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            Why Your Voice Matters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg leading-relaxed">
            We are living in a pivotal evolutionary moment—one that mirrors the metamorphosis of 
            a caterpillar into a butterfly. The systems that govern our world need fundamental 
            redesign, and this can only happen through collaborative effort.
          </p>
          <p className="leading-relaxed">
            Every perspective brings unique insights. Whether you're an expert in governance, 
            technology, ecology, economics, or simply someone who cares about the future—your 
            contribution can help refine and improve these proposals for systems change.
          </p>
        </CardContent>
      </Card>

      {/* How to Contribute */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">How to Contribute</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>GitHub Collaboration</CardTitle>
              <CardDescription>
                The primary platform for proposing changes and improvements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  Submit improvements and suggestions through pull requests
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  Edit proposals directly in the repository
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  Propose entirely new systems and structures
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  Review and discuss changes with the community
                </li>
              </ul>
              <Button 
                asChild 
                variant="outline" 
                className="w-full"
              >
                <a href="https://github.com/your-repo-here" target="_blank" rel="noopener noreferrer" className="group">
                  <Github className="mr-2 h-4 w-4" />
                  View Repository
                  <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <GitBranch className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Open Source Process</CardTitle>
              <CardDescription>
                Transparent, collaborative development for collective wisdom
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  Fork the repository to make your own copy
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  Create branches for different improvements
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  Submit pull requests with detailed explanations
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  Engage in constructive dialogue about proposals
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Types of Contributions */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Ways to Contribute</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Edit className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Refine Content</CardTitle>
              <CardDescription>
                Improve clarity, add examples, fix errors, or enhance existing proposals
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Propose Ideas</CardTitle>
              <CardDescription>
                Suggest new systems, innovative approaches, or missing perspectives
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Share & Discuss</CardTitle>
              <CardDescription>
                Spread awareness, facilitate discussions, and build community around these ideas
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Core Principles for Contributors */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Contribution Guidelines</CardTitle>
          <CardDescription>
            These principles guide all contributions to maintain the integrity and vision of this manifesto
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Dignity-Centered</h4>
              <p className="text-sm text-muted-foreground">
                Every proposal should center human dignity and the inherent worth of all beings
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <div className="h-6 w-6 text-primary">🌱</div>
              </div>
              <h4 className="font-semibold mb-2">Regenerative</h4>
              <p className="text-sm text-muted-foreground">
                Focus on systems that heal, restore, and enhance life rather than extract from it
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Participatory</h4>
              <p className="text-sm text-muted-foreground">
                Empower communities to co-create the systems that serve them
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Creative Process Link */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Explore the Creative Process</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Curious about how this manifesto came to be? View the complete conversation between 
            the human and AI collaborators that helped compose this document.
          </p>
          <Button 
            asChild 
            variant="outline" 
            size="sm"
          >
            <a 
              href="https://chatgpt.com/share/687fdc0d-19ac-800c-a7c7-bbfcb463fb5d" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              View ChatGPT Conversation
              <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contribute;
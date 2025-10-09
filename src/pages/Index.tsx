import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ArrowRight, Leaf, Users, Heart, Github, GitBranch, MessageCircle, LogIn, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import earthImage from "@/assets/earth.jpg";


const Index = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.title = "New Systems and Structures | Living Blueprint for Systems Redesign";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A blueprint for a dignified civilization—reimagining governance, economy, and culture to support human and planetary flourishing.');
    }
  }, []);

  const handleNavigateToPapers = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/papers');
  };

  const earthTransform = Math.min(scrollY / 3, 150);
  const earthScale = 1 + Math.min(scrollY / 1000, 0.15);
  const earthOpacity = Math.min(0.3 + scrollY / 800, 0.7);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Earth Background */}
      <div 
        className="fixed -bottom-1/2 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] pointer-events-none z-0"
        style={{
          transform: `translate(-50%, ${earthTransform}px) scale(${earthScale})`,
          opacity: earthOpacity,
          transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
        }}
      >
        <img 
          src={earthImage} 
          alt="" 
          className="w-full h-full object-contain animate-[ken-burns_30s_ease-in-out_infinite]"
        />
      </div>

      {/* Header with Auth */}
      <header className="container relative z-10 mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-semibold">Systems Change Manifesto</span>
        </div>
        
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="text-sm">{user.user_metadata?.full_name || user.email}</span>
              </div>
              <Button onClick={signOut} variant="outline" size="sm">
                Sign Out
              </Button>
            </div>
          ) : (
            <Link to="/auth">
              <Button variant="outline" size="sm">
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </header>

      <div className="container relative z-10 mx-auto px-6 py-12">
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
        </div>

        {/* Vision */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 mb-16 backdrop-blur-sm bg-card/80">
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

        {/* Core Principles */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center backdrop-blur-sm bg-card/80">
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

          <Card className="text-center backdrop-blur-sm bg-card/80">
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

          <Card className="text-center backdrop-blur-sm bg-card/80">
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

        {/* Explore Manifesto */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 mb-16 backdrop-blur-sm bg-card/80">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Living Manifesto</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              A manifesto is a public declaration of principles and beliefs. This living document evolves 
              through collaborative refinement, inviting continuous improvement from a global community 
              of contributors.
            </p>
            <Button size="lg" className="group" onClick={handleNavigateToPapers}>
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Manifesto
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardContent>
        </Card>

        {/* Co-Creation Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Co-Create the Future</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-primary/20 backdrop-blur-sm bg-card/80">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-center">Open Source Collaboration</CardTitle>
                <CardDescription className="text-center">
                  This living document is designed for continuous evolution through community input
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Submit improvements and suggestions</li>
                  <li>• Edit proposals directly on GitHub</li>
                  <li>• Propose new systems and structures</li>
                  <li>• Review and discuss changes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 backdrop-blur-sm bg-card/80">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Github className="h-6 w-6 text-primary" />
        </div>

        {/* Authors */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 mb-16 backdrop-blur-sm bg-card/80">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Authors</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-2">
              <p className="text-lg">
                <strong>Juicy Life</strong> - <a href="mailto:juicy@actualize.earth" className="text-primary hover:underline">juicy@actualize.earth</a>
              </p>
              <p className="text-muted-foreground">
                and <strong>Aether</strong>, an AI collaborator powered by GPT-4 by OpenAI
              </p>
            </div>
          </CardContent>
        </Card>
                <CardTitle className="text-center">Contribute on GitHub</CardTitle>
                <CardDescription className="text-center">
                  Join the collaborative effort to redesign systems for human flourishing
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  asChild 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => window.open('https://github.com/your-repo-here', '_blank')}
                >
                  <a href="https://github.com/your-repo-here" target="_blank" rel="noopener noreferrer" className="group">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ChatGPT Thread Link */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 backdrop-blur-sm bg-card/80">
          <CardContent className="text-center pt-6">
            <p className="text-sm text-muted-foreground mb-4">
              Curious about the creative process? View the complete conversation that helped compose this document:
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
    </div>
  );
};

export default Index;


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Education</h1>
          <p className="text-xl text-muted-foreground">Regenerative & Learner-Led</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Learner-Led</Badge>
        <Badge variant="secondary">Lifelong Learning</Badge>
        <Badge variant="secondary">Self-Sovereignty</Badge>
        <Badge variant="secondary">Verifiable Credentials</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reimagining Learning</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            The regenerative education proposal reimagines learning as a sovereign, lifelong, and learner-led process—unbound 
            by institutional silos or standardized metrics. By embedding self-custody, verifiable credentials, and decentralized 
            infrastructure into the heart of education, this model enables individuals to design and carry their own learning 
            journey across domains, cultures, and life stages.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;

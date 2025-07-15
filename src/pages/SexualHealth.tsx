
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown } from "lucide-react";

const SexualHealth = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Crown className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Sexual Health, Reproductive Choice, and Cultural Dignity</h1>
          <p className="text-xl text-muted-foreground">Dignity, Consent, and Harm Reduction</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Dignity-Centered</Badge>
        <Badge variant="secondary">Consent-Based</Badge>
        <Badge variant="secondary">Harm Reduction</Badge>
        <Badge variant="secondary">Equitable Access</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reframing Through Dignity and Consent</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            This proposal addresses the often-taboo yet deeply impactful domain of sexual and reproductive health—reframing 
            it through a lens of dignity, consent, and harm reduction. By expanding options for male contraception, increasing 
            access to early pregnancy detection, and making STI testing free, anonymous, and securely shareable through 
            sovereign digital identity systems, we reduce unwanted outcomes while upholding personal autonomy.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SexualHealth;
